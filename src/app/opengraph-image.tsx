import { ImageResponse } from "next/og";

export const alt =
  "TMF México — Tubería flexible para instalaciones eléctricas e industriales";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#009DE4",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          TMF México
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1,
            }}
          >
            Tubería flexible para cada instalación.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#ECF5F9",
            }}
          >
            Eléctrico · Industrial · Fabricado en México
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#ECF5F9" }}>
          Tubos Mexicanos Flexibles · Desde 1957
        </div>
      </div>
    ),
    size,
  );
}
