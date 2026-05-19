import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Sensations Babor Ciney',
  description: 'Politique de confidentialité et traitement des données personnelles de Sensations Babor, conformément au RGPD.',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 lg:px-12">
      <h1 className="font-heading text-4xl font-light text-ink mb-12">
        Politique de confidentialité
      </h1>

      <div className="space-y-10 font-body text-base leading-relaxed text-ink/70">
        <section>
          <p>
            Conformément au Règlement (UE) 2016/679 du Parlement européen (RGPD) et à la loi
            belge du 30 juillet 2018, Sensations Babor s'engage à protéger vos données personnelles.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Responsable du traitement
          </h2>
          <p>
            Laura Busar - Sensations Babor
            <br />
            Rue du Commerce 91, 5590 Ciney
            <br />
            BCE : BE0840.080.673
            <br />
            Contact :{' '}
            <a
              href="mailto:sensations@sensations-ciney.be"
              className="text-cta hover:underline"
            >
              sensations@sensations-ciney.be
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Données collectées
          </h2>
          <p className="mb-4">
            Via le formulaire de contact, nous collectons les données suivantes :
          </p>
          <ul className="space-y-1.5 pl-4">
            {[
              'Nom et prénom',
              'Numéro de téléphone',
              'Adresse e-mail',
              'Type de soin souhaité',
              'Créneau horaire préféré',
              'Contenu du message',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-nude mt-0.5 shrink-0">-</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Finalités du traitement
          </h2>
          <p>
            Ces données sont collectées exclusivement pour répondre à votre demande de rendez-vous
            ou à votre question. Elles ne sont pas utilisées à des fins commerciales, ni transmises
            à des tiers.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Durée de conservation
          </h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de votre demande,
            et au maximum 3 ans à compter du dernier contact, sauf obligation légale contraire.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Vos droits
          </h2>
          <p className="mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="space-y-1.5 pl-4">
            {[
              "Droit d'accès à vos données",
              'Droit de rectification',
              "Droit à l'effacement (droit à l'oubli)",
              "Droit à la limitation du traitement",
              "Droit d'opposition",
              'Droit à la portabilité',
            ].map((droit) => (
              <li key={droit} className="flex items-start gap-3">
                <span className="text-nude mt-0.5 shrink-0">-</span>
                {droit}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            Pour exercer ces droits, contactez-nous à l'adresse{' '}
            <a
              href="mailto:sensations@sensations-ciney.be"
              className="text-cta hover:underline"
            >
              sensations@sensations-ciney.be
            </a>
            . Vous disposez également du droit d'introduire une réclamation auprès de l'Autorité
            de protection des données (APD) :{' '}
            <a
              href="https://www.autoriteprotectiondonnees.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cta hover:underline"
            >
              autoriteprotectiondonnees.be
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Cookies
          </h2>
          <p>
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Si des cookies techniques
            sont utilisés (ex. : analytics anonymisé), ils sont limités au strict nécessaire et ne
            requièrent pas de consentement selon les lignes directrices de l'APD belge.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-light text-ink mb-4">
            Mise à jour
          </h2>
          <p>
            Cette politique peut être mise à jour à tout moment. La version en vigueur est celle
            publiée sur cette page. Dernière mise à jour : [date à compléter].
          </p>
        </section>
      </div>
    </div>
  )
}
