import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig, img } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.maquillage.title,
  description: siteConfig.seo.maquillage.description,
}

const { maquillage, brand } = siteConfig

export default function MaquillagePermament() {
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-4">
          {brand.name}
        </p>
        <h1 className="font-heading text-5xl lg:text-6xl font-light text-ink leading-tight mb-6 max-w-xl">
          Maquillage permanent
        </h1>
        <p className="font-body text-base leading-relaxed text-ink/65 max-w-lg">
          {maquillage.intro}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-16">
        {/* Microblading */}
        <AnimateIn>
          <section className="border-t border-nude/25 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Microblading" className="mb-6" />
              <p className="font-body text-base leading-relaxed text-ink/65 mb-5">
                {maquillage.microblading.description}
              </p>
              <p className="font-body text-sm text-ink/55 mb-8 leading-relaxed">
                {maquillage.microblading.detail}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="relative aspect-[1/1] w-full overflow-hidden">
                  <Image
                    src={img(maquillage.microblading.imageKey)}
                    alt={`Résultat ${maquillage.microblading.imageAlt} — à remplacer par photo réelle cliente`}
                    fill
                    className="object-cover object-top"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-[1/1] w-full overflow-hidden">
                  <Image
                    src={img(maquillage.microblading.imageKey)}
                    alt={`Résultat ${maquillage.microblading.imageAlt} — à remplacer par photo réelle cliente`}
                    fill
                    className="object-cover object-top"
                    sizes="25vw"
                  />
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
              >
                Réserver une consultation
              </Link>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={img(maquillage.microblading.imageKey)}
                alt={maquillage.microblading.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </section>
        </AnimateIn>

        {/* Shading */}
        <AnimateIn delay={80}>
          <section className="border-t border-nude/25 pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden lg:order-1 order-2">
              <Image
                src={img(maquillage.shading.imageKey)}
                alt={maquillage.shading.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-2 order-1">
              <SectionTitle title="Shading" className="mb-6" />
              <p className="font-body text-base leading-relaxed text-ink/65 mb-5">
                {maquillage.shading.description}
              </p>
              <p className="font-body text-sm text-ink/55 mb-8 leading-relaxed">
                {maquillage.shading.detail}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
              >
                Réserver une consultation
              </Link>
            </div>
          </section>
        </AnimateIn>

        {/* FAQ */}
        <AnimateIn delay={100}>
          <section className="border-t border-nude/25 pt-12">
            <SectionTitle title="Questions fréquentes" className="mb-10" />
            <dl className="space-y-8 max-w-2xl">
              {maquillage.faq.map((item) => (
                <div key={item.q} className="border-b border-nude/20 pb-8">
                  <dt className="font-heading text-xl font-medium text-ink mb-3">{item.q}</dt>
                  <dd className="font-body text-base leading-relaxed text-ink/65">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </AnimateIn>
      </div>
    </>
  )
}
