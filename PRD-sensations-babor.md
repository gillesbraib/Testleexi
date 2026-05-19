# PRD — Refonte site vitrine Sensations Babor Ciney

> **Pour Claude Code** : génère le site complet en suivant ce document.
> Active le skill `frontend-design` (déjà installé). Lis tout le PRD avant de commencer. Pose 3 questions max si quelque chose est ambigu, sinon commence à coder.

---

## 1. Contexte client

**Nom** : Sensations Babor — Laura Busar
**Type** : Institut de beauté indépendant, sous franchise/partenariat BABOR (marque cosmétique allemande premium)
**Localisation** : rue du Commerce 91, 5590 Ciney (province de Namur, Belgique)
**Contact** : 083/21.44.40 — sensations@sensations-ciney.be
**Horaires** : Mardi-Vendredi 09h30-18h00, Samedi 09h30-16h00
**Site actuel** : https://www.sensations-ciney.be/ (très daté, structure tableau HTML, pas mobile-first)
**Boutique en ligne** : externe via babor.be/sensations (à linker, pas à recréer)
**Facebook** : facebook.com/Sensations-Ciney-119639328183312

## 2. Services à présenter

**Soins visage**
- Soins anti-âge de luxe
- Soins traditionnels
- Soins Doctor Babor (gamme cosmétique médicale)
- Soins Babor Tech (technologie appareil)

**Soins du corps**
- Massages et soins
- Packages Détente
- V-SLIM (amincissement par appareil)

**Épilation**
- Épilation classique
- Épilation définitive

**Maquillage permanent**
- Microblading
- Shading

**Compléments alimentaires** (gamme Babor)
**Cosmétiques** (vente produits Babor)

## 3. Objectifs de la refonte

Par ordre de priorité business :

1. **Générer des prises de rendez-vous** : le site actuel oblige à appeler. Ajouter un parcours de réservation clair (CTA fort, formulaire de contact qualifié, idéalement intégration Calendly ou équivalent en stub).
2. **Asseoir le positionnement premium** : BABOR est une marque haut de gamme, le site doit refléter ça. Aujourd'hui le visuel détruit la perception de qualité du produit.
3. **SEO local Ciney/Namur** : capter les recherches "institut beauté Ciney", "microblading Namur", "soin visage Ciney", etc.
4. **Mettre Laura Busar en avant** : storytelling fondatrice, expertise, années de pratique. L'humain est le différentiateur vs chaîne franchise.
5. **Mobile first** : 70%+ du trafic d'un institut local vient du mobile.

## 4. Direction artistique

**Tone** : Editorial luxe / refined minimalism. Pense magazine beauté haut de gamme (Vogue Beauty, The Gentlewoman), pas spa générique.

**Mood board mental** :
- Aesop, Susanne Kaufmann (sites de marque)
- Beaucoup d'espace blanc, photographie premium, typographie raffinée
- Calme, confiance, expertise, féminin sans clichés

**À PROSCRIRE ABSOLUMENT** :
- Roses pastel saturés, paillettes, dorures kitsch
- Stock photos génériques de mains avec pétales de rose
- Fonts type Great Vibes, Dancing Script ou autre script "spa"
- Sliders carrousel avec auto-rotation
- Dégradés violet/rose
- Emojis dans le contenu
- Comic Sans, Arial, Times New Roman (évident mais on précise)

**Typographie**
- Display : serif éditorial avec caractère (proposer parmi : Fraunces, Editorial New, GT Sectra, Cormorant Garamond, ou équivalent). Choisis-en UN, pas tous.
- Body : sans-serif neutre et lisible (proposer parmi : Inter Tight, GT America, Söhne, ou équivalent).
- Pairing serif display + sans body, jamais l'inverse.

**Palette** (point de départ, à raffiner) :
- Base : `#FAF8F5` (blanc cassé chaud) ou `#FFFFFF`
- Texte principal : `#1A1A1A` (noir profond, pas pur)
- Accent 1 : tons nude / chair (`#D4B5A0` ou approchant)
- Accent 2 : un seul accent froid ou sombre pour CTA (bordeaux profond `#5A1A2C`, ou vert sapin `#2A3D2C`, ou noir charbon). Choisis-en UN.
- Pas de palette à 6 couleurs. Maximum 4 valeurs CSS.

**Photographie**
- Toutes les images sont placeholders (utilise des `<div>` avec aspect-ratio + fond `#E8E4DF` + texte "PHOTO À FOURNIR : [description]").
- Décris précisément en placeholder ce que la cliente doit photographier (ex : "Photo Laura Busar en cabine, lumière naturelle, format portrait 3:4").

**Mouvement**
- Animation au scroll : fade-in subtil + translateY 20px, staggered sur les sections.
- Hover sur cards/CTA : transitions douces (200-300ms ease-out).
- Respecte `prefers-reduced-motion`.
- Pas d'animation Lottie, pas de parallax lourd.

**Composition spatiale**
- Grilles asymétriques sur sections clés (hero, à propos).
- Espace blanc généreux, lecture aérée.
- Photos peuvent dépasser la grille (full-bleed) sur sections marquantes.

## 5. Architecture du site

Pages à produire (one-pager NE convient PAS, on veut du SEO multi-pages) :

1. `/` — Accueil
2. `/soins-visage` — Soins visage (avec ancres vers les 4 sous-gammes)
3. `/soins-corps` — Soins du corps + V-SLIM
4. `/epilation` — Épilation classique + définitive
5. `/maquillage-permanent` — Microblading & Shading
6. `/laura-busar` — À propos (storytelling fondatrice)
7. `/contact` — Contact + plan + horaires + formulaire RDV

Footer cohérent partout. Header sticky avec CTA "Prendre rendez-vous" toujours visible.

## 6. Détail des pages

### 6.1 `/` Accueil

**Hero**
- Pas de slider. Une image full-bleed (placeholder décrit) + titre éditorial.
- H1 : `Sensations Babor` (typo display, large)
- Sous-titre : `Institut de beauté à Ciney. Soins du visage, du corps et expertise Babor depuis [X] ans.`
- Sous Laura Busar — c'est ELLE le différentiateur, pas la franchise.
- CTA primaire : "Prendre rendez-vous"
- CTA secondaire (lien discret) : "Découvrir l'institut"

**Section "Un institut, pas une chaîne"** (positionnement)
- 2 colonnes asymétriques. À gauche : portrait Laura (placeholder). À droite : 3 paragraphes courts.
- Proof points : années d'expérience, formation Babor certifiée, soins sur mesure.

**Section services** (4 cards)
- Soins visage / Soins corps / Épilation / Maquillage permanent
- Chaque card : visuel placeholder + nom + 1 ligne descriptive + lien "Voir les soins".
- Layout : grille 2x2 sur desktop, stack mobile.

**Section "Pourquoi Babor"**
- Texte court expliquant la marque, sa philosophie cosmétique.
- 3 points : qualité allemande, recherche dermatologique, gamme professionnelle.
- Pas trop long, 80% du visiteur s'en fout.

**Section témoignages**
- 3 témoignages clientes (placeholders avec prénom + ville + texte).
- Mise en page éditoriale, pas en card Trustpilot.

**Section infos pratiques**
- Adresse + map (placeholder iframe Google Maps `<iframe>` commenté).
- Horaires d'ouverture.
- Téléphone cliquable, email cliquable.

**CTA final**
- "Réservez votre soin"

### 6.2 `/soins-visage`

- Hero court (titre + 1 paragraphe + photo).
- 4 sections : Anti-âge de luxe, Traditionnels, Doctor Babor, Babor Tech.
- Chaque section : titre, paragraphe descriptif (~80 mots), liste des soins inclus, durée indicative, CTA "Réserver".
- Pas de prix affichés (politique habituelle institut), mention "Sur devis personnalisé".

### 6.3 `/soins-corps`
- Mêmes principes : Massages, Packages Détente, V-SLIM.
- V-SLIM a sa propre section plus longue car c'est un appareil technique (cryolipolyse / radiofréquence — décris en placeholder, la cliente affinera).

### 6.4 `/epilation`
- Section épilation classique (cire, zones).
- Section épilation définitive (technologie lumière pulsée, nombre de séances type, contre-indications à mentionner).

### 6.5 `/maquillage-permanent`
- Section microblading (sourcils).
- Section shading (effet poudré).
- Mise en avant : avant/après (placeholders), durée tenue, protocole en 2 séances.
- FAQ courte (5 questions max).

### 6.6 `/laura-busar`
- Format éditorial long : portrait + texte long story-driven.
- Parcours, formations Babor, philosophie du métier, vision.
- Placeholder long pour brief client.
- Mise en page magazine : titre + chapeau + corps de texte + citations en exergue.

### 6.7 `/contact`
- Coordonnées complètes.
- Map intégrée (placeholder iframe).
- Formulaire : nom, email, téléphone, soin souhaité (select), message, créneau préféré.
- Mention : "Réponse sous 24h ouvrées. Pour un RDV urgent, appelez le 083/21.44.40."
- Lien Facebook.

## 7. Composants UI requis

- **Header** : sticky, transparent sur hero puis fond plein au scroll, logo gauche, nav centrale/droite, CTA "Prendre RDV" bouton plein.
- **Footer** : 3 colonnes (Institut / Soins / Contact) + ligne légale en bas (TVA BE0840.080.673, mentions légales, politique confidentialité).
- **CTA primaire** : bouton plein, accent sombre, hover subtil.
- **CTA secondaire** : underline simple ou bouton outline.
- **Cards services** : image + titre + texte court + flèche → ; hover : légère élévation OU image qui zoom légèrement, pas les deux.
- **Section title** : structure répétable (eyebrow petit caps + titre display + paragraphe intro).

## 8. Stack technique

**Choix par défaut** : Next.js 14+ (App Router) + Tailwind CSS + TypeScript.

Raison : meilleur SEO, simple à déployer sur Vercel/Netlify, structure scalable si la cliente veut ajouter un blog plus tard.

**Alternative acceptable** : HTML/CSS/JS vanilla si tu veux livrer plus vite pour démo prospect — dans ce cas, génère un site multi-pages avec partials ou copie-colle des composants header/footer.

**Demande à Gilles AVANT de coder** : "Next.js ou HTML statique pour ce projet ?"

**Pas de** : WordPress, Webflow exports, dépendances JS lourdes pour des animations triviales.

## 9. SEO local

Chaque page doit avoir :
- `<title>` unique avec nom institut + service + ville.
- `<meta description>` 150-160 caractères.
- Balise H1 unique.
- Schema.org `BeautySalon` ou `LocalBusiness` en JSON-LD sur l'accueil avec adresse, horaires, téléphone, geo.
- Alt text descriptif sur toutes les images (placeholders inclus).
- URLs en kebab-case français.
- `sitemap.xml` et `robots.txt`.

Mots-clés cibles à intégrer naturellement :
- Institut de beauté Ciney
- Soins visage Ciney / Namur
- Microblading Ciney / Namur
- Épilation définitive Ciney
- V-SLIM amincissement Ciney
- Babor Ciney

## 10. Performance & accessibilité

- Lighthouse cible : Perf 90+, A11y 95+, SEO 100, Best Practices 95+.
- Images en `<picture>` avec formats modernes (WebP) prévus dans le code même si les placeholders sont des divs.
- Contraste WCAG AA minimum partout.
- Navigation clavier complète, focus visible et stylé (pas le focus bleu navigateur par défaut).
- Skip-to-content.
- `lang="fr"` sur `<html>`.

## 11. Ce qu'il faut livrer

- Code complet du site multi-pages
- README à la racine avec :
  - Stack utilisée et raison
  - Commandes pour lancer en local
  - Liste exhaustive des placeholders à remplacer (photos, textes Laura, témoignages, prix éventuels)
  - Étapes de déploiement (Vercel par défaut)
- Tous les liens internes fonctionnels
- Mentions légales et politique de confidentialité en pages séparées (placeholders OK, mais structure RGPD belge correcte)
- Pas de cookie banner intrusive : si Google Analytics est prévu, banner minimaliste en bas, pas de modale plein écran

## 12. Règles de style et copy

**Pas d'em dashes (—) dans le body copy.** Tirets simples ou virgules.

**Pas de buzzwords beauté.** Bannir : "révolutionnaire", "magique", "miracle", "exceptionnel", "unique en son genre", "incontournable", "transcendant". Le luxe parle bas.

**Ton operator, pas pub.** Décrire ce que le soin fait, pour qui, comment. Pas vendre une promesse floue.

**CTA en mode proposition, pas supplication.** "Réservez votre soin" oui. "On vous attend !" non.

**Pas de "nous sommes une équipe passionnée".** Tout le monde le dit, plus personne ne le lit.

**Français de Belgique** : septante/nonante OK si naturel, sinon FR standard. TVA, BCE, mentions belges respectées.

## 13. Ce que tu fais en premier

1. Confirme le choix de stack (Next.js vs HTML vanilla).
2. Propose 2 directions typographiques + 2 palettes en commentaire avant de générer la home, pour que je tranche.
3. Génère la page d'accueil complète.
4. Attends ma validation avant de produire les autres pages.

Tu peux y aller.
