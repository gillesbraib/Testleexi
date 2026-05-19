# Sensations Babor — Site vitrine

Refonte du site de l'institut de beauté Sensations Babor, Ciney (Belgique).

## Stack

- **Framework** : Next.js (App Router) — SEO multi-pages, Server Components
- **Style** : Tailwind CSS v4 — thème défini dans `app/globals.css`
- **Polices** : Cormorant Garamond (display) + Inter Tight (body) via `next/font/google`
- **Déploiement** : Vercel

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure des pages

| Route | Description |
|-------|-------------|
| `/` | Accueil |
| `/soins-visage` | Soins visage (4 gammes Babor) |
| `/soins-corps` | Soins corps + V-SLIM |
| `/epilation` | Épilation classique + définitive |
| `/maquillage-permanent` | Microblading + Shading + FAQ |
| `/laura-busar` | À propos - storytelling fondatrice |
| `/contact` | Contact + formulaire RDV + map |
| `/mentions-legales` | Mentions légales |
| `/politique-confidentialite` | Politique RGPD |

## Placeholders à remplacer

### Photos (priorité 1 - bloquer une session photo)

Chercher `Photo à fournir` dans le code pour localiser tous les emplacements.

| Page | Description |
|------|-------------|
| Hero accueil | Intérieur de l'institut, lumière naturelle, format 16:9 ou 3:2 |
| Section "Un institut" | Portrait Laura Busar en cabine, format 3:4 |
| Card Soins visage | Soin en cabine, format 4:3 |
| Card Soins corps | Table de massage, format 4:3 |
| Card Épilation | Cabine épilation, format 4:3 |
| Card Maquillage permanent | Gros plan sourcils, format 1:1 |
| `/soins-visage` | 4 photos par gamme, format 4:3 |
| `/soins-corps` | 3 photos, format 4:3 |
| `/epilation` | 2 photos, format 4:3 |
| `/maquillage-permanent` | Avant/après x2, portrait 3:4 |
| `/laura-busar` | Portrait + photo cabine |

### Textes (priorité 2)

- `[X]` : Nombre d'années d'expérience de Laura
- `[Chapeau à rédiger par Laura]` : Phrase signature page About
- `[Ce texte est un placeholder]` : Biographie complète Laura (page `/laura-busar`)
- `[Citation de Laura]` : Citation en exergue page About
- Témoignages : 3 témoignages réels à substituer aux placeholders
- V-SLIM : Description exacte des technologies utilisées

### Technique (priorité 3)

- Google Maps iframe : remplacer le bloc commenté dans `/contact` et page d'accueil
- Formulaire de contact : brancher une Server Action + service d'envoi (Resend recommandé)
- `metadataBase` dans `app/layout.tsx` : confirmer l'URL finale du site
- `sitemap.xml` : mettre à jour si le domaine change

## Déploiement Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

Ou via le dashboard Vercel en connectant le dépôt Git.

Aucune variable d'environnement requise pour ce site vitrine (pas de base de données, pas d'auth).
Si le formulaire de contact est branché sur Resend : ajouter `RESEND_API_KEY` dans les variables Vercel.

## Checklist avant mise en ligne

- [ ] Remplacer toutes les photos placeholders
- [ ] Compléter la biographie Laura Busar
- [ ] Intégrer l'iframe Google Maps
- [ ] Brancher le formulaire de contact
- [ ] Vérifier le numéro de TVA (actuellement : BE0840.080.673)
- [ ] Mettre à jour la date dans la politique de confidentialité
- [ ] Confirmer le domaine final et mettre à jour `metadataBase`
- [ ] Test complet mobile (iPhone, Android)
- [ ] Lighthouse audit (cible : Perf 90+, A11y 95+, SEO 100)
