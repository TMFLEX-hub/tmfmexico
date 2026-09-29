type PageHeadingProps = {
  title: string;
};

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="heading text-4xl tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
    </main>
  );
}
