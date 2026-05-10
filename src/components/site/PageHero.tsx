export function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="container-page py-20 md:py-28 max-w-4xl space-y-5">
        <span className="text-xs tracking-widest uppercase text-gold">{eyebrow}</span>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05]">{title}</h1>
        {desc && <p className="text-lg text-muted-foreground max-w-2xl">{desc}</p>}
      </div>
    </section>
  );
}