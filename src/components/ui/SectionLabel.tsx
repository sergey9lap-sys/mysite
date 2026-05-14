type SectionLabelProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionLabel({eyebrow, title, text}: SectionLabelProps) {
  return (
    <div className="max-w-xl">
      <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-bone md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-muted">{text}</p> : null}
    </div>
  );
}
