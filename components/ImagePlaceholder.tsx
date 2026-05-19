interface ImagePlaceholderProps {
  description: string
  aspectRatio?: string
  className?: string
}

export default function ImagePlaceholder({
  description,
  aspectRatio = '4/3',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-[#E8E4DF] flex items-center justify-center p-8 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`Emplacement photo : ${description}`}
    >
      <div className="text-center max-w-xs">
        <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-[#8A7F79] mb-2">
          Photo à fournir
        </span>
        <p className="font-body text-xs text-[#9E948E] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
