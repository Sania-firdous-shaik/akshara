export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative container mx-auto px-6 h-full flex items-end pb-14">
        <div className="max-w-2xl text-primary-foreground">
          {eyebrow && <div className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">{eyebrow}</div>}
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-primary-foreground/85 max-w-xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
