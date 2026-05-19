import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Sensations Babor Ciney',
  description: 'Mentions légales et informations juridiques de Sensations Babor, institut de beauté à Ciney.',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 lg:px-12">
      <h1 className="font-heading text-4xl font-light text-ink mb-12">
        Mentions légales
      </h1>

      <div className="space-y-10 font-body text-base leading-relaxed text-ink/70">
        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Éditeur du site
          </h2>
          <p>
            Sensations Babor
            <br />
            Laura Busar
            <br />
            Rue du Commerce 91
            <br />
            5590 Ciney, Belgique
            <br />
            Tél. : 083/21.44.40
            <br />
            E-mail :{' '}
            <a
              href="mailto:sensations@sensations-ciney.be"
              className="text-cta hover:underline"
            >
              sensations@sensations-ciney.be
            </a>
          </p>
          <p className="mt-4">
            <strong className="font-medium text-ink">Numéro BCE (TVA) :</strong> BE0840.080.673
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            340 Pine Street, Suite 701
            <br />
            San Francisco, CA 94104, États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cta hover:underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété
            exclusive de Laura Busar - Sensations Babor, sauf mentions contraires. Toute
            reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Responsabilité
          </h2>
          <p>
            Les informations présentes sur ce site sont fournies à titre indicatif. Sensations
            Babor ne peut être tenu responsable d'éventuelles erreurs ou omissions dans le contenu,
            ni des conséquences de l'utilisation des informations publiées.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Droit applicable
          </h2>
          <p>
            Le présent site et son contenu sont soumis au droit belge. En cas de litige, les
            tribunaux belges sont seuls compétents.
          </p>
        </section>
      </div>
    </div>
  )
}
