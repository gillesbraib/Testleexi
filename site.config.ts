// ─────────────────────────────────────────────────────────────────────────────
// site.config.ts — SEUL FICHIER À MODIFIER PAR CLIENT
// Tout le contenu, les images, les textes et les métadonnées sont ici.
// Le code des composants et des pages ne change jamais.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {

  // ── MARQUE ──────────────────────────────────────────────────────────────────
  brand: {
    name: 'Sensations Babor',
    tagline: 'Institut de beauté à Ciney',
    description: 'Institut de beauté à Ciney. Spécialiste Babor, soins personnalisés.',
    url: 'https://www.sensations-ciney.be',
    ownerName: 'Laura Busar',
    ownerTitle: 'Esthéticienne certifiée Babor',
    partnerName: 'Babor',
    partnerUrl: 'https://www.babor.be/sensations',
    priceRange: '€€€',
  },

  // ── CONTACT ─────────────────────────────────────────────────────────────────
  contact: {
    phone: '083/21.44.40',
    phoneHref: 'tel:+3283214440',
    email: 'sensations@sensations-ciney.be',
    address: {
      street: 'Rue du Commerce 91',
      city: 'Ciney',
      postalCode: '5590',
      region: 'Namur',
      country: 'BE',
    },
    geo: { latitude: 50.2979, longitude: 5.0972 },
    facebook: 'https://www.facebook.com/Sensations-Ciney-119639328183312',
  },

  // ── HORAIRES ────────────────────────────────────────────────────────────────
  hours: {
    table: [
      { days: 'Mardi - Vendredi', hours: '09h30 - 18h00' },
      { days: 'Samedi',           hours: '09h30 - 16h00' },
      { days: 'Dimanche - Lundi', hours: 'Fermé' },
    ],
    footerLine1: 'Mar. - Ven. : 09h30 - 18h00',
    footerLine2: 'Samedi : 09h30 - 16h00',
    schema: [
      { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '18:00' },
      { dayOfWeek: 'Saturday', opens: '09:30', closes: '16:00' },
    ],
  },

  // ── LÉGAL ───────────────────────────────────────────────────────────────────
  legal: {
    tva: 'BE0840.080.673',
    companyName: 'Sensations Babor',
    ownerName: 'Laura Busar',
    apdRef: '[Numéro APD à compléter]',
  },

  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: [
    { href: '/soins-visage',        label: 'Soins visage' },
    { href: '/soins-corps',         label: 'Soins corps' },
    { href: '/epilation',           label: 'Épilation' },
    { href: '/maquillage-permanent',label: 'Maquillage permanent' },
    { href: '/laura-busar',         label: 'Laura Busar' },
  ],

  footerNav: [
    { href: '/soins-visage',        label: 'Soins du visage' },
    { href: '/soins-corps',         label: 'Soins du corps' },
    { href: '/epilation',           label: 'Épilation' },
    { href: '/maquillage-permanent',label: 'Maquillage permanent' },
    { href: '/laura-busar',         label: 'À propos' },
  ],

  // ── IMAGES ──────────────────────────────────────────────────────────────────
  // Remplacer les URLs Unsplash par les vraies photos du client.
  // Format recommandé : ?w=1200&q=80&auto=format&fit=crop
  images: {
    // Source: https://unsplash.com/photos/1540555700478-4be289fbecef
    hero: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1531746020798-e6953c6e8e04
    ownerPortrait: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1570172619644-dfd03ed5d881
    facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1544161515-4ab6ce6db874
    massage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1616394584738-fc6e612e71b9
    skincare: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1556228720-195a672e8a03
    skincareMinimal: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1522337360788-8b13dee7a37e
    makeup: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&auto=format&fit=crop',
    // Source: https://unsplash.com/photos/1600334089648-b0d9d3028eb2
    spa: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80&auto=format&fit=crop',
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  seo: {
    layout: {
      titleDefault: 'Sensations Babor — Institut de beauté à Ciney',
      titleTemplate: '%s | Sensations Babor Ciney',
      description: 'Institut de beauté à Ciney. Soins visage Babor, massages, épilation définitive, microblading. Expertise personnalisée par Laura Busar, certifiée Babor.',
    },
    home: {
      title: 'Institut de beauté à Ciney — Soins Babor, Épilation, Microblading',
      description: 'Sensations Babor, institut de beauté à Ciney. Soins visage et corps Babor, épilation définitive, microblading. Laura Busar, experte certifiée. Prenez rendez-vous.',
    },
    soinsVisage: {
      title: 'Soins du visage à Ciney — Anti-âge Babor, Doctor Babor, Babor Tech',
      description: 'Soins du visage à Ciney : anti-âge de luxe, soins traditionnels, Doctor Babor et Babor Tech. Institut Sensations Babor, expertise personnalisée par Laura Busar.',
    },
    soinsCorps: {
      title: 'Soins du corps à Ciney — Massages, Packages Détente, V-SLIM',
      description: 'Soins du corps à Ciney : massages relaxants, packages bien-être et technologie V-SLIM. Institut Sensations Babor, Laura Busar.',
    },
    epilation: {
      title: 'Épilation à Ciney — Classique et épilation définitive Namur',
      description: 'Épilation classique et épilation définitive par lumière pulsée à Ciney. Institut Sensations Babor, Laura Busar. Toutes zones.',
    },
    maquillage: {
      title: 'Maquillage permanent Ciney — Microblading & Shading Namur',
      description: 'Microblading et shading sourcils à Ciney. Résultat naturel et durable, protocole en 2 séances. Institut Sensations Babor, Laura Busar.',
    },
    laura: {
      title: 'Laura Busar — Fondatrice de Sensations Babor Ciney',
      description: 'Laura Busar, esthéticienne certifiée Babor et fondatrice de Sensations Babor à Ciney. Son parcours, sa philosophie du soin, son expertise.',
    },
    contact: {
      title: 'Contact et rendez-vous — Sensations Babor Ciney',
      description: 'Prenez rendez-vous à Sensations Babor Ciney. Formulaire de contact, horaires, adresse. Réponse sous 24h ouvrées. Tél. 083/21.44.40.',
    },
  },

  // ── HOME — HERO ─────────────────────────────────────────────────────────────
  hero: {
    h1: 'Sensations Babor',
    subtitle: 'Institut de beauté à Ciney. Soins du visage, du corps et expertise Babor depuis [X] ans.',
  },

  // ── HOME — SECTION INSTITUT ─────────────────────────────────────────────────
  about: {
    eyebrow: "L'expertise avant tout",
    title: 'Une experte, pas un concept',
    paragraphs: [
      "Sensations Babor, c'est Laura Busar. Pas une enseigne, pas un réseau de franchises. Un institut indépendant à Ciney, pensé autour d'un seul principe : chaque peau est différente, chaque soin doit l'être aussi.",
      "Certifiée par Babor et formée en continu, Laura adapte les protocoles de la marque à votre type de peau, vos préoccupations réelles, votre rythme. Pas de prestation catalogue.",
      "Que vous veniez pour un soin ponctuel ou un suivi dans la durée, vous repartez avec des recommandations précises, pas des promesses génériques.",
    ],
    proofPoints: [
      { value: '[X]',      label: "ans d'expérience" },
      { value: '100%',     label: 'certifiée Babor' },
      { value: 'Sur mesure', label: 'à chaque séance' },
    ],
  },

  // ── HOME — SERVICES CARDS ────────────────────────────────────────────────────
  services: [
    {
      href: '/soins-visage',
      label: 'Soins du visage',
      description: 'Anti-âge de luxe, soins traditionnels, Doctor Babor et Babor Tech.',
      imageKey: 'facial' as const,
      imageAlt: 'Soin du visage en cabine, Sensations Babor Ciney',
    },
    {
      href: '/soins-corps',
      label: 'Soins du corps',
      description: 'Massages, packages détente et technologie V-SLIM.',
      imageKey: 'massage' as const,
      imageAlt: 'Table de massage, soins du corps à Sensations Babor Ciney',
    },
    {
      href: '/epilation',
      label: 'Épilation',
      description: "Épilation classique et épilation définitive par lumière pulsée.",
      imageKey: 'spa' as const,
      imageAlt: "Cabine d'épilation professionnelle, Sensations Babor Ciney",
    },
    {
      href: '/maquillage-permanent',
      label: 'Maquillage permanent',
      description: 'Microblading et shading pour des sourcils naturels et durables.',
      imageKey: 'makeup' as const,
      imageAlt: 'Maquillage permanent sourcils, Sensations Babor Ciney',
    },
  ],

  // ── HOME — TÉMOIGNAGES ───────────────────────────────────────────────────────
  testimonials: [
    {
      text: "Après trois séances de soins Doctor Babor, ma peau a retrouvé une texture que je n'avais plus depuis des années. Laura prend le temps d'écouter avant de proposer quoi que ce soit.",
      name: 'Anne-Sophie',
      location: 'Ciney',
    },
    {
      text: "Pour mon microblading, Laura m'a guidée sur la forme et le rendu. Le résultat est naturel, exactement ce que je voulais. Deux ans plus tard, ça tient encore très bien.",
      name: 'Marine',
      location: 'Namur',
    },
    {
      text: "Les packages détente m'ont réconciliée avec le massage. L'ambiance est calme, le soin est sérieux. Je repars à chaque fois avec des recommandations concrètes.",
      name: 'Claire',
      location: 'Dinant',
    },
  ],

  // ── HOME — SECTION BABOR ─────────────────────────────────────────────────────
  babor: {
    intro: "Babor est une maison de cosmétiques fondée en Allemagne en 1956. Sa réputation repose sur des formules concentrées, une recherche dermatologique sérieuse et une distribution exclusive aux instituts de soins professionnels. Pas de grande surface, pas de réseaux généralistes.",
    points: [
      {
        number: '01',
        title: 'Recherche dermatologique',
        text: "Chaque formule est validée cliniquement. Pas d'effets marketing, des résultats mesurables sur le long terme.",
      },
      {
        number: '02',
        title: 'Qualité allemande',
        text: "Fabrication en Allemagne. Concentration élevée en actifs, peu d'excipients inutiles.",
      },
      {
        number: '03',
        title: 'Distribution professionnelle',
        text: "Vendu exclusivement dans des instituts certifiés. Laura est votre interlocutrice directe, avant et après le soin.",
      },
    ],
  },

  // ── SOINS DU VISAGE ──────────────────────────────────────────────────────────
  soinsVisage: {
    intro: "Quatre gammes complémentaires, du soin de confort au protocole médical. Chaque séance commence par un diagnostic peau pour adapter le protocole à votre réalité du moment.",
    gammes: [
      {
        id: 'anti-age',
        title: 'Soins anti-âge de luxe',
        description: "Les protocoles anti-âge Babor combinent des concentrés d'actifs à haute dose et des techniques de massage lifting. Pensés pour les peaux matures ou préoccupées par les premiers signes de vieillissement.",
        soins: ['Soin lifting immédiat', 'Protocole repulpant intensif', 'Soin fermeté et contour', 'Cure anti-rides en séances'],
        duree: '60 à 90 min',
        imageKey: 'skincareMinimal' as const,
        imageAlt: 'Soin anti-âge visage Babor, produits skin care luxe',
      },
      {
        id: 'traditionnels',
        title: 'Soins traditionnels',
        description: "Nettoyage en profondeur, hydratation, rééquilibrage. Ces soins de base Babor s'adaptent à tous les types de peau et forment la base d'un entretien régulier du visage.",
        soins: ['Soin hydratant profond', 'Nettoyage et purification', 'Soin sensible peaux réactives', 'Soin éclat et uniformisation'],
        duree: '45 à 60 min',
        imageKey: 'skincare' as const,
        imageAlt: 'Produits de soins Babor pour soin visage classique hydratant',
      },
      {
        id: 'doctor-babor',
        title: 'Soins Doctor Babor',
        description: 'La gamme Doctor Babor est la ligne cosmétique médicale de la marque. Formulées avec des actifs à concentration clinique, ces soins ciblent des problématiques spécifiques : hyperpigmentation, acné, rougeurs, relâchement cutané.',
        soins: ['Peeling enzymatique', 'Soin correcteur taches', 'Protocole anti-acné', 'Soin remodelant intensif'],
        duree: '60 à 75 min',
        imageKey: 'skincare' as const,
        imageAlt: 'Gamme Doctor Babor, soins cosmétiques à concentration clinique',
      },
      {
        id: 'babor-tech',
        title: 'Babor Tech',
        description: "Les soins Babor Tech associent des appareils de technologie esthétique aux formules concentrées Babor. Micro-courants, ultrasons, lumière LED : les résultats sont renforcés par la combinaison actifs + technologie.",
        soins: ['Soin micro-courants tonifiant', 'Ultrason et pénétration active', 'Photothérapie LED', 'Protocole combiné sur mesure'],
        duree: '60 à 90 min',
        imageKey: 'spa' as const,
        imageAlt: 'Cabine soins Babor Tech, espace épuré et équipement esthétique professionnel',
      },
    ],
  },

  // ── SOINS DU CORPS ───────────────────────────────────────────────────────────
  soinsCorps: {
    intro: "Des massages aux technologies de remodelage, une offre pensée pour le bien-être et l'efficacité. Chaque protocole est adapté à vos objectifs et votre morphologie.",
    massages: {
      description: "Massages relaxants, drainants ou tonifiants. Les protocoles corps de Sensations Babor utilisent les huiles et enveloppements Babor pour un résultat sensoriel et efficace. En séance unique ou en cure régulière.",
      imageKey: 'massage' as const,
      imageAlt: 'Massage relaxant en cabine, Sensations Babor Ciney',
    },
    packages: {
      description: "Des formules combinées soin du visage + massage corps, pensées pour une pause complète. Idéales en cadeau ou en routine mensuelle. Durée et contenu selon le package choisi.",
      imageKey: 'skincare' as const,
      imageAlt: 'Produits Babor pour packages détente, soins visage et corps combinés',
    },
    vslim: {
      description: "V-SLIM est un appareil de remodelage corporel combinant plusieurs technologies [à préciser par la cliente : ex. cryolipolyse, radiofréquence, ultrasons]. Il s'adresse aux personnes souhaitant affiner leur silhouette sans chirurgie.",
      description2: "Un bilan de morphologie est réalisé avant la première séance. Les résultats varient selon le profil et la régularité des séances. Un programme de plusieurs séances est généralement recommandé.",
      note: "[Laura confirmera les technologies exactes utilisées par son appareil V-SLIM pour mettre à jour ce texte.]",
      imageKey: 'spa' as const,
      imageAlt: 'Cabine de soins professionnelle, remodelage corporel V-SLIM',
    },
  },

  // ── ÉPILATION ────────────────────────────────────────────────────────────────
  epilation: {
    intro: "Épilation classique pour un entretien régulier, épilation définitive pour une solution durable. Les deux méthodes sont disponibles sur toutes les zones du corps.",
    classique: {
      description: "Épilation à la cire froide ou chaude, adaptée à chaque zone et chaque type de poil. Réalisée avec soin pour minimiser l'inconfort et préserver la peau entre les séances.",
      zones: "Zones disponibles : jambes, bras, aisselles, maillot, visage, dos, torse et autres zones sur demande.",
      imageKey: 'spa' as const,
      imageAlt: "Cabine d'épilation professionnelle, Sensations Babor Ciney",
    },
    definitive: {
      description: "La lumière pulsée intense (IPL) cible le pigment du poil pour détruire progressivement le follicule. Le résultat est une réduction durable et significative de la pilosité, obtenue sur un protocole de plusieurs séances espacées dans le temps.",
      detail: "Nombre de séances généralement nécessaires : 6 à 10, selon la zone, le phototype et la densité du poil. Une consultation préalable est obligatoire.",
      imageKey: 'spa' as const,
      imageAlt: "Épilation définitive par lumière pulsée, Sensations Babor Ciney",
    },
    contreIndications: [
      'Grossesse',
      'Peau bronzée ou récemment exposée au soleil',
      'Traitement photosensibilisant en cours',
      'Cicatrices récentes sur la zone',
      'Certaines maladies de peau (à évaluer en consultation)',
    ],
  },

  // ── MAQUILLAGE PERMANENT ─────────────────────────────────────────────────────
  maquillage: {
    intro: "Microblading et shading pour des sourcils redessinés avec précision. Un résultat qui s'intègre à votre visage, pas qui s'impose à lui.",
    microblading: {
      description: "Technique de pigmentation manuelle qui reproduit des poils de sourcils un par un. Chaque trait est tracé à la main avec une plume spécialisée. Le résultat est hyper-naturel, adapté aux peaux normales à sèches.",
      detail: "Durée de la séance : environ 2h. Tenue estimée : 12 à 18 mois selon le phototype.",
      imageKey: 'makeup' as const,
      imageAlt: 'Maquillage permanent microblading sourcils, résultat naturel',
    },
    shading: {
      description: "Le shading (ou ombrage) crée un effet poudré en dégradé, similaire à un sourcil tracé au crayon ou à la poudre. Idéal pour les peaux grasses ou mixtes, ou pour les personnes qui souhaitent un rendu plus dense et stylisé.",
      detail: "Durée de la séance : environ 2h. Tenue estimée : 18 à 24 mois selon le phototype. Le microblading et le shading peuvent être combinés pour un rendu mixte.",
      imageKey: 'makeup' as const,
      imageAlt: 'Maquillage permanent shading sourcils, effet poudré naturel',
    },
    faq: [
      {
        q: 'Combien de temps dure le résultat ?',
        a: "Entre 12 et 24 mois selon votre type de peau, l'exposition solaire et l'entretien. Une retouche annuelle permet de maintenir le rendu.",
      },
      {
        q: 'Le protocole se déroule en combien de séances ?',
        a: 'Deux séances sont nécessaires : la première pour la pose, la seconde (4 à 6 semaines plus tard) pour la retouche de cicatrisation.',
      },
      {
        q: 'Est-ce douloureux ?',
        a: 'Un gel anesthésiant est appliqué avant la séance. La douleur est minime pour la grande majorité des clientes.',
      },
      {
        q: 'Microblading ou shading, comment choisir ?',
        a: "Le microblading reproduit des poils un par un pour un effet naturel. Le shading crée un effet poudré plus dense. Laura évalue avec vous le rendu le plus adapté à votre morphologie et votre pilosité existante.",
      },
      {
        q: 'Quelles sont les contre-indications ?',
        a: "Grossesse, allaitement, diabète non contrôlé, traitements anticoagulants, peaux très réactives. Un questionnaire de santé est obligatoire lors de la consultation.",
      },
    ],
  },

  // ── CONTACT — OPTIONS SOIN ──────────────────────────────────────────────────
  soinsOptions: [
    'Soins du visage',
    'Soins anti-âge de luxe',
    'Doctor Babor',
    'Babor Tech',
    'Massage',
    'Package détente',
    'V-SLIM',
    'Épilation classique',
    'Épilation définitive',
    'Microblading',
    'Shading',
    'Autre / Je ne sais pas encore',
  ],

} satisfies Record<string, unknown>

// Helper : résout une imageKey vers son URL
export function img(key: keyof typeof siteConfig.images): string {
  return siteConfig.images[key]
}
