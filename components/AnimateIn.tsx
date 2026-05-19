'use client'

import { useEffect, useRef } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add('is-visible'), delay)
          observer.unobserve(el)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  )
}
