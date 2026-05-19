
import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Laura Busar — Fondatrice de Sensations Babor Ciney',
  description:
    'Laura Busar, esthéticienne certifiée Babor et fondatrice de Sensations Babor à Ciney. Son parcours, sa philosophie du soin, son expertise.',
}

export default function LauraBusar() {
  return (
    <>
      {/* Hero éditorial */}
      <section className="pt-32 pb-0 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-end">
          <div className="pb-12 lg:pb-20">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-nude mb-6">
              À propos
            </p>
            <h1 className="font-heading text-6xl lg:text-7xl font-light text-ink leading-tight mb-0">
              Laura Busar
            </h1>
          </div>
          {/* Source: https://unsplash.com/photos/1531746020798-e6953c6e8e04 */}
          <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format&fit=crop"
              alt="Laura Busar, fondatrice de Sensations Babor Ciney, esthéticienne certifiée Babor"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Chapeau */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12 border-t border-nude/25">
        <AnimateIn>
          <p className="font-heading text-2xl lg:text-3xl font-light italic text-ink/75 max-w-2xl leading-relaxed">
            [Chapeau à rédiger par Laura : une phrase qui résume sa vision du métier. Ex. : "Je crois
            qu'un bon soin commence avant même que la cliente s'allonge."]
          </p>
        </AnimateIn>
      </section>

      {/* Biographie longue */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-24">
          <AnimateIn>
            <div className="space-y-6 font-body text-base leading-relaxed text-ink/70">
              <h2 className="font-heading text-3xl font-light text-ink mb-2">
                Le parcours
              </h2>

              <div className="border-l-2 border-nude/40 pl-6 py-1 my-8">
                <p className="font-body text-sm text-ink/45 italic">
                  [Ce texte est un placeholder. Laura Busar complètera sa biographie directement.
                  Suggestions de contenu ci-dessous.]
                </p>
              </div>

              <p>
                [Années de formation : où, quand, quelle école ou apprentissage. Les premières
                expériences professionnelles. Pourquoi l'esthétique et pas autre chose.]
              </p>
              <p>
                [La rencontre avec la marque Babor : qu'est-ce qui l'a attirée dans cette marque
                spécifiquement - philosophie, qualité, résultats. Formation Babor : quand, comment,
                ce que ça a changé dans sa pratique.]
              </p>
              <p>
                [L'ouverture de Sensations à Ciney : le projet, le lieu, la vision. Pourquoi un
                institut indépendant plutôt qu'une franchise. Ce qu'elle voulait créer comme
                expérience pour ses clientes.]
              </p>

              <h2 className="font-heading text-3xl font-light text-ink mt-10 mb-2">
                La philosophie
              </h2>
              <p>
                [Ce que Laura pense du soin : relation de confiance, personnalisation, continuité
                dans le suivi. Comment elle travaille avec ses clientes sur le long terme. Ce qui
                la différencie d'un centre esthétique standard.]
              </p>
              <p>
                [Les formations continues : Babor, nouvelles techniques, veille sur les innovations
                en cosmétologie. Comment elle reste à jour dans son domaine.]
              </p>

              {/* Citation en exergue */}
              <blockquote className="border-l-4 border-cta pl-6 py-2 my-10">
                <p className="font-heading text-2xl font-light italic text-ink/80">
                  [Citation de Laura sur sa vision du métier - à compléter par elle.]
                </p>
              </blockquote>

              <p>
                [Ce qu'elle aime dans son métier aujourd'hui. Les soins qui lui tiennent
                particulièrement à coeur. Ses projets pour l'institut.]
              </p>
            </div>
          </AnimateIn>

          {/* Sidebar */}
          <AnimateIn delay={150}>
            <div className="space-y-10 pt-2">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">
                  Formation
                </p>
                <ul className="space-y-3 font-body text-sm text-ink/60 leading-relaxed">
                  <li>[Formation initiale - à compléter]</li>
                  <li>[Certification Babor - année]</li>
                  <li>[Autres formations - à compléter]</li>
                </ul>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-nude mb-4">
                  L'institut
                </p>
                <ul className="space-y-3 font-body text-sm text-ink/60 leading-relaxed">
                  <li>Ouvert en [année]</li>
                  <li>Ciney, province de Namur</li>
                  <li>Institut indépendant</li>
                  <li>Partenaire officiel Babor</li>
                </ul>
              </div>

              {/* Source: https://unsplash.com/photos/1531746020798-e6953c6e8e04 */}
              <div className="relative aspect-[2/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80&auto=format&fit=crop"
                  alt="Laura Busar en cabine de soins, Sensations Babor Ciney"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12 border-t border-nude/25 mt-8">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-heading text-2xl font-light text-ink">
              Rencontrons-nous
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-cta text-white font-body text-sm tracking-wide hover:bg-[#4A1525] transition-colors duration-300"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
