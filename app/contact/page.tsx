import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import SectionTitle from '@/components/SectionTitle'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.contact.title,
  description: siteConfig.seo.contact.description,
}

const { contact, hours, soinsOptions, brand } = siteConfig

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-8 max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-4">
          {brand.name}
        </p>
        <h1 className="font-heading text-5xl lg:text-6xl font-light text-ink leading-tight mb-6">
          Contact
        </h1>
        <p className="font-body text-base text-ink/60 max-w-lg leading-relaxed">
          Réponse sous 24h ouvrées. Pour un rendez-vous urgent, appelez directement le{' '}
          <a
            href={contact.phoneHref}
            className="text-cta underline underline-offset-4 hover:text-ink transition-colors duration-200"
          >
            {contact.phone}
          </a>
          .
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 border-t border-nude/25 pt-12">
          {/* Infos */}
          <AnimateIn>
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
                <table className="font-body text-sm text-ink/70 w-full">
                  <tbody className="divide-y divide-nude/20">
                    {hours.table.map((row) => (
                      <tr key={row.days}>
                        <td className="py-2.5 pr-6">{row.days}</td>
                        <td className="py-2.5 text-ink/45">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">Téléphone</p>
                <a
                  href={contact.phoneHref}
                  className="font-body text-base text-ink/70 hover:text-ink transition-colors duration-200"
                >
                  {contact.phone}
                </a>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">E-mail</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-body text-sm text-ink/65 hover:text-ink transition-colors duration-200 break-all"
                >
                  {contact.email}
                </a>
              </div>

              {contact.facebook && (
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">Réseaux</p>
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-ink/65 hover:text-ink transition-colors duration-200"
                  >
                    Facebook
                  </a>
                </div>
              )}
            </div>
          </AnimateIn>

          {/* Formulaire */}
          <AnimateIn delay={120}>
            <div>
              <SectionTitle title="Formulaire de contact" className="mb-8" />

              {/*
                ACTION SERVEUR À BRANCHER :
                Remplacer l'action par une Server Action Next.js
                ou intégrer Resend, Formspree, ou Calendly.
              */}
              <form
                action="#"
                method="POST"
                className="space-y-6"
                aria-label="Formulaire de prise de rendez-vous"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nom" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text" id="nom" name="nom" required autoComplete="name"
                      className="w-full bg-transparent border border-nude/40 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:border-cta focus:outline-none transition-colors duration-200"
                      placeholder="Marie Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel" id="telephone" name="telephone" required autoComplete="tel"
                      className="w-full bg-transparent border border-nude/40 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:border-cta focus:outline-none transition-colors duration-200"
                      placeholder="04xx xx xx xx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email" id="email" name="email" required autoComplete="email"
                    className="w-full bg-transparent border border-nude/40 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:border-cta focus:outline-none transition-colors duration-200"
                    placeholder="marie@exemple.be"
                  />
                </div>

                <div>
                  <label htmlFor="soin" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                    Soin souhaité
                  </label>
                  <select
                    id="soin" name="soin"
                    className="w-full bg-sand border border-nude/40 px-4 py-3 font-body text-sm text-ink focus:border-cta focus:outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="">-- Choisissez un soin --</option>
                    {soinsOptions.map((soin) => (
                      <option key={soin} value={soin}>{soin}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="creneau" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                    Créneau préféré
                  </label>
                  <input
                    type="text" id="creneau" name="creneau"
                    className="w-full bg-transparent border border-nude/40 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:border-cta focus:outline-none transition-colors duration-200"
                    placeholder="Ex. : mardi matin, ou n'importe quand"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs uppercase tracking-widest text-ink/50 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    className="w-full bg-transparent border border-nude/40 px-4 py-3 font-body text-sm text-ink placeholder:text-ink/30 focus:border-cta focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Votre message, vos questions, vos contraintes particulières..."
                  />
                </div>

                <p className="font-body text-xs text-ink/40">
                  * Champs obligatoires. Vos données ne sont pas transmises à des tiers et ne sont
                  utilisées que pour répondre à votre demande, conformément au RGPD.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center px-10 py-4 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </AnimateIn>
        </div>

        {/* Map */}
        <AnimateIn delay={80}>
          <div className="mt-16 border-t border-nude/25 pt-12">
            <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-6">Nous trouver</p>
            <div
              className="bg-[#E8E4DF] aspect-video w-full flex items-center justify-center"
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
              <p className="font-body text-xs text-center text-[#9A8F87] px-6">
                <span className="block uppercase tracking-[0.18em] text-[10px] mb-2 text-[#7A706A]">À intégrer</span>
                Carte Google Maps — {contact.address.street}, {contact.address.postalCode} {contact.address.city}
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </>
  )
}
