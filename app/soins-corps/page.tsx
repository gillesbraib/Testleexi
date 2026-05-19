import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig, img } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.soinsCorps.title,
  description: siteConfig.seo.soinsCorps.description,
}

const { soinsCorps, brand } = siteConfig

export default function SoinsCorps() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-4">
              {brand.name}
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl font-light text-ink leading-tight mb-6">
              Soins du corps
            </h1>
            <p className="font-body text-base leading-relaxed text-ink/65 max-w-lg">
              {soinsCorps.intro}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={img(soinsCorps.massages.imageKey)}
              alt={soinsCorps.massages.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-16">
        {/* Massages */}
        <AnimateIn>
          <section className="border-t border-nude/25 pt-12">
            <SectionTitle title="Massages et soins" className="mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <p className="font-body text-base leading-relaxed text-ink/65">
                {soinsCorps.massages.description}
              </p>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img(soinsCorps.massages.imageKey)}
                  alt={soinsCorps.massages.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
            >
              Réserver un massage
            </Link>
          </section>
        </AnimateIn>

        {/* Packages */}
        <AnimateIn delay={80}>
          <section className="border-t border-nude/25 pt-12">
            <SectionTitle title="Packages Détente" className="mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="font-body text-base leading-relaxed text-ink/65 mb-6">
                  {soinsCorps.packages.description}
                </p>
                <p className="font-body text-xs text-ink/40 uppercase tracking-widest">
                  Sur devis personnalisé
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
                >
                  Demander un package
                </Link>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img(soinsCorps.packages.imageKey)}
                  alt={soinsCorps.packages.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>
        </AnimateIn>

        {/* V-SLIM */}
        <AnimateIn delay={120}>
          <section className="border-t border-nude/25 pt-12">
            <SectionTitle title="V-SLIM" className="mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="font-body text-base leading-relaxed text-ink/65 mb-5">
                  {soinsCorps.vslim.description}
                </p>
                <p className="font-body text-base leading-relaxed text-ink/65 mb-5">
                  {soinsCorps.vslim.description2}
                </p>
                <div className="border-l-2 border-nude/50 pl-5 py-1 my-6">
                  <p className="font-body text-sm text-ink/55 italic">
                    {soinsCorps.vslim.note}
                  </p>
                </div>
                <p className="font-body text-xs text-ink/40 uppercase tracking-widest mb-6">
                  Sur devis - bilan gratuit offert
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
                >
                  Demander un bilan
                </Link>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={img(soinsCorps.vslim.imageKey)}
                  alt={soinsCorps.vslim.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </section>
        </AnimateIn>
      </div>
    </>
  )
}
