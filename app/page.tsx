import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig, img } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.home.title,
  description: siteConfig.seo.home.description,
}

const { brand, contact, hours, hero, about, services, testimonials, babor, images } = siteConfig

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: brand.name,
  description: brand.description,
  url: brand.url,
  telephone: contact.phoneHref.replace('tel:', ''),
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    postalCode: contact.address.postalCode,
    addressRegion: contact.address.region,
    addressCountry: contact.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: contact.geo.latitude,
    longitude: contact.geo.longitude,
  },
  openingHoursSpecification: hours.schema,
  priceRange: brand.priceRange,
  sameAs: [contact.facebook, brand.partnerUrl].filter(Boolean),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-end pb-20 lg:pb-32"
        aria-label={`Accueil ${brand.name}`}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={images.hero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/15 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-none mb-6">
              {hero.h1}
            </h1>
            <p className="font-body text-base lg:text-lg text-white/75 leading-relaxed mb-10 max-w-md">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="#institut"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/50 text-white font-body text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Découvrir l&apos;institut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── UN INSTITUT, PAS UNE CHAINE ── */}
      <section
        id="institut"
        className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12"
        aria-label="À propos de l'institut"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-14 lg:gap-24 items-center">
          <AnimateIn className="order-2 lg:order-1" delay={180}>
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden">
              <Image
                src={images.ownerPortrait}
                alt={`${brand.ownerName}, ${brand.ownerTitle}, fondatrice de ${brand.name}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn className="order-1 lg:order-2">
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.title}
              className="mb-8"
            />
            <div className="space-y-5 font-body text-base leading-relaxed text-ink/70">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-nude/35 pt-8">
              {about.proofPoints.map((point) => (
                <div key={point.label}>
                  <p className="font-heading text-3xl font-light text-cta">
                    {point.value}
                  </p>
                  <p className="font-body text-xs text-ink/55 mt-1 leading-snug">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#F2EEE9]" aria-label="Nos soins et prestations">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <SectionTitle
              eyebrow="Ce que nous proposons"
              title="Soins et prestations"
              lead={`De l'anti-âge clinique au maquillage permanent, en passant par l'épilation et les soins du corps. Chaque prestation suit les protocoles ${brand.partnerName} ou les standards de la profession.`}
              className="mb-16 max-w-xl"
            />
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <AnimateIn key={service.href} delay={i * 90}>
                <Link
                  href={service.href}
                  className="group block bg-sand overflow-hidden hover:shadow-lg transition-shadow duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img(service.imageKey)}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 lg:p-8">
                    <h3 className="font-heading text-2xl font-light text-ink mb-2">
                      {service.label}
                    </h3>
                    <p className="font-body text-sm text-ink/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="font-body text-xs tracking-widest uppercase text-cta">
                      Voir les soins &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI PARTENAIRE ── */}
      <section
        className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12"
        aria-label={`La marque ${brand.partnerName}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimateIn>
            <SectionTitle
              eyebrow="La marque"
              title={`Pourquoi ${brand.partnerName}`}
              className="mb-8"
            />
            <p className="font-body text-base leading-relaxed text-ink/68">
              {babor.intro}
            </p>
            {brand.partnerUrl && (
              <a
                href={brand.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-7 font-body text-sm text-cta border-b border-cta/40 hover:border-cta transition-colors duration-200 pb-0.5"
              >
                Boutique {brand.partnerName} en ligne &rarr;
              </a>
            )}
          </AnimateIn>

          <AnimateIn delay={140}>
            <div className="space-y-9">
              {babor.points.map((point) => (
                <div key={point.number} className="flex gap-7">
                  <span className="font-heading text-sm text-nude font-light mt-0.5 shrink-0 w-6">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-ink mb-2">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-ink/60 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TEMOIGNAGES ── */}
      <section className="py-24 lg:py-32 bg-ink" aria-label="Témoignages clientes">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-nude/55 mb-16 text-center">
              Ce qu&apos;en disent nos clientes
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {testimonials.map((testimonial, i) => (
              <AnimateIn key={testimonial.name} delay={i * 110}>
                <blockquote className="flex flex-col h-full">
                  <span
                    className="font-heading text-7xl text-nude/25 leading-none mb-5 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-body text-base leading-relaxed text-sand/70 flex-1">
                    {testimonial.text}
                  </p>
                  <footer className="mt-8 border-t border-sand/10 pt-6">
                    <p className="font-heading text-lg text-sand">{testimonial.name}</p>
                    <p className="font-body text-xs text-sand/35 mt-0.5">{testimonial.location}</p>
                  </footer>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFOS PRATIQUES ── */}
      <section
        className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12"
        aria-label="Informations pratiques"
      >
        <AnimateIn>
          <SectionTitle eyebrow="Nous trouver" title="L'institut" className="mb-16" />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimateIn>
            <div
              className="bg-[#E8E4DF] aspect-4/3 w-full flex items-center justify-center"
              aria-label="Carte Google Maps - à intégrer"
            >
              {/*
                Remplacer par l'iframe Google Maps :
                <iframe src="https://www.google.com/maps/embed?pb=[EMBED_URL]"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localisation ${brand.name}, ${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`}
                />
              */}
              <p className="font-body text-xs text-center text-[#9A8F87] max-w-xs px-6">
                <span className="block uppercase tracking-[0.18em] text-[10px] mb-2 text-[#7A706A]">
                  À intégrer
                </span>
                Carte Google Maps — {contact.address.street}, {contact.address.postalCode} {contact.address.city}
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="space-y-10">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">Adresse</p>
                <address className="font-body text-base not-italic leading-relaxed text-ink/70">
                  {contact.address.street}<br />
                  {contact.address.postalCode} {contact.address.city}<br />
                  Belgique
                </address>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">Horaires</p>
                <table className="font-body text-sm text-ink/70 w-full max-w-xs">
                  <tbody className="divide-y divide-nude/20">
                    {hours.table.map((row) => (
                      <tr key={row.days}>
                        <td className="py-2.5 pr-8">{row.days}</td>
                        <td className="py-2.5 text-ink/45">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">Contact</p>
                <div className="space-y-2">
                  <p>
                    <a href={contact.phoneHref} className="font-body text-base text-ink/70 hover:text-ink transition-colors duration-200">
                      {contact.phone}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${contact.email}`} className="font-body text-sm text-ink/60 hover:text-ink transition-colors duration-200">
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-cta py-24 lg:py-32 text-center" aria-label="Réservation">
        <AnimateIn>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-heading text-4xl lg:text-6xl font-light text-white mb-6">
              Réservez votre soin
            </h2>
            <p className="font-body text-base text-white/65 mb-10 leading-relaxed">
              Réponse sous 24h ouvrées. Pour un rendez-vous urgent, appelez le{' '}
              <a href={contact.phoneHref} className="text-white underline underline-offset-4 hover:text-nude transition-colors duration-200">
                {contact.phone}
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 border border-white/55 text-white font-body text-sm tracking-wide hover:bg-white hover:text-cta transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
