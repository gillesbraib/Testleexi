import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig, img } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.soinsVisage.title,
  description: siteConfig.seo.soinsVisage.description,
}

const { soinsVisage, brand } = siteConfig

export default function SoinsVisage() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-4">
              {brand.name}
            </p>
            <h1 className="font-heading text-5xl lg:text-6xl font-light text-ink leading-tight mb-6">
              Soins du visage
            </h1>
            <p className="font-body text-base leading-relaxed text-ink/65 max-w-lg">
              {soinsVisage.intro}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={siteConfig.images.facial}
              alt={`Soin du visage en cabine, ${brand.name}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-20">
        {soinsVisage.gammes.map((gamme, i) => (
          <AnimateIn key={gamme.id} delay={i * 60}>
            <section
              id={gamme.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 border-t border-nude/25"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={img(gamme.imageKey)}
                    alt={gamme.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <SectionTitle title={gamme.title} className="mb-5" />
                <p className="font-body text-base leading-relaxed text-ink/65 mb-7">
                  {gamme.description}
                </p>
                <ul className="space-y-2 mb-7">
                  {gamme.soins.map((soin) => (
                    <li key={soin} className="font-body text-sm text-ink/70 flex items-start gap-3">
                      <span className="text-nude mt-0.5 shrink-0">-</span>
                      {soin}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="font-body text-xs text-ink/45 uppercase tracking-widest">
                    Durée : {gamme.duree}
                  </p>
                  <p className="font-body text-xs text-ink/45">Sur devis personnalisé</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
                >
                  Réserver ce soin
                </Link>
              </div>
            </section>
          </AnimateIn>
        ))}
      </div>
    </>
  )
}
