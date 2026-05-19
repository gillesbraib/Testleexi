interface SectionTitleProps {
  eyebrow?: string
  title: string
  lead?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  lead,
  centered = false,
  light = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`font-body text-xs uppercase tracking-[0.2em] mb-4 ${
            light ? 'text-nude/70' : 'text-nude'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl lg:text-5xl font-light leading-tight ${
          light ? 'text-sand' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`font-body text-base leading-relaxed mt-5 max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-sand/65' : 'text-ink/65'}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
