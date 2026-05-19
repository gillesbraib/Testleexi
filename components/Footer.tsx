import Link from 'next/link'
import { siteConfig } from '@/site.config'

export default function Footer() {
  const { brand, contact, hours, legal, footerNav } = siteConfig

  return (
    <footer className="bg-ink text-sand mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Institut */}
        <div>
          <p className="font-heading text-xl text-sand mb-5">{brand.name}</p>
          <p className="font-body text-sm leading-relaxed text-sand/55">
            {brand.tagline}.
            <br />
            Spécialiste {brand.partnerName}, soins personnalisés.
          </p>
          <address className="font-body text-sm mt-5 text-sand/55 not-italic leading-relaxed">
            {contact.address.street}
            <br />
            {contact.address.postalCode} {contact.address.city}, Belgique
          </address>
        </div>

        {/* Soins */}
        <div>
          <p className="font-body text-xs uppercase tracking-[0.18em] text-sand/35 mb-5">
            Nos soins
          </p>
          <nav aria-label="Liens soins">
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-sand/55 hover:text-sand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-xs uppercase tracking-[0.18em] text-sand/35 mb-5">
            Contact
          </p>
          <ul className="space-y-3 font-body text-sm text-sand/55">
            <li>
              <a
                href={contact.phoneHref}
                className="hover:text-sand transition-colors duration-200"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-sand transition-colors duration-200 break-all"
              >
                {contact.email}
              </a>
            </li>
            <li className="pt-2 leading-relaxed text-sand/45">
              {hours.footerLine1}
              <br />
              {hours.footerLine2}
            </li>
            {contact.facebook && (
              <li className="pt-1">
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sand transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-sand/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between gap-3 font-body text-xs text-sand/35">
          <p>TVA {legal.tva} &mdash; {legal.companyName} &mdash; {legal.ownerName}</p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-sand/60 transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-sand/60 transition-colors duration-200"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
