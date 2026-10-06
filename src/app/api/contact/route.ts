import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  correo?: string;
  telefono?: string;
};

function asText(value: unknown, max: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_TO;

  if (!process.env.RESEND_API_KEY || !from || !to) {
    return NextResponse.json(
      { error: "El envío de correo no está configurado." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = asText(body.nombre, 120);
  const empresa = asText(body.empresa, 160);
  const correo = asText(body.correo, 160);
  const telefono = asText(body.telefono, 40);

  if (!nombre || !isEmail(correo)) {
    return NextResponse.json(
      { error: "Nombre y correo son obligatorios." },
      { status: 400 },
    );
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: correo,
    subject: `Nuevo contacto TMF: ${nombre}`,
    text: [
      "Nuevo mensaje desde tmf.com.mx",
      "",
      `Nombre: ${nombre}`,
      `Empresa: ${empresa || "—"}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono || "—"}`,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
