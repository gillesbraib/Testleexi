import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig, img } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.epilation.title,
  description: siteConfig.seo.epilation.description,
}

const { epilation, brand } = siteConfig

export default function Epilation() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-4">
          {brand.name}
        </p>
        <h1 className="font-heading text-5xl lg:text-6xl font-light text-ink leading-tight mb-6 max-w-xl">
          Épilation
        </h1>
        <p className="font-body text-base leading-relaxed text-ink/65 max-w-lg">
          {epilation.intro}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-16">
        {/* Classique */}
        <AnimateIn>
          <section className="border-t border-nude/25 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Épilation classique" className="mb-6" />
              <p className="font-body text-base leading-relaxed text-ink/65 mb-6">
                {epilation.classique.description}
              </p>
              <p className="font-body text-sm text-ink/55 mb-8 leading-relaxed">
                {epilation.classique.zones}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={img(epilation.classique.imageKey)}
                alt={epilation.classique.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </section>
        </AnimateIn>

        {/* Définitive */}
        <AnimateIn delay={80}>
          <section className="border-t border-nude/25 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:order-1 order-2">
              <Image
                src={img(epilation.definitive.imageKey)}
                alt={epilation.definitive.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-2 order-1">
              <SectionTitle title="Épilation définitive" className="mb-6" />
              <p className="font-body text-base leading-relaxed text-ink/65 mb-5">
                {epilation.definitive.description}
              </p>
              <p className="font-body text-sm text-ink/55 mb-6 leading-relaxed">
                {epilation.definitive.detail}
              </p>

              <div className="mb-8">
                <p className="font-body text-xs uppercase tracking-widest text-nude mb-4">
                  Contre-indications
                </p>
                <ul className="space-y-2">
                  {epilation.contreIndications.map((ci) => (
                    <li key={ci} className="font-body text-sm text-ink/60 flex items-start gap-3">
                      <span className="text-nude shrink-0 mt-0.5">-</span>
                      {ci}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
              >
                Demander une consultation
              </Link>
            </div>
          </section>
        </AnimateIn>
      </div>
    </>
  )
}
