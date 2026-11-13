const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const FAMILIES = ['All', 'Floral', 'Woody', 'Amber', 'Citrus', 'Gourmand'];

export const PRODUCTS = [
  {
    id: 'noor-dor',
    name: 'Noor d\u2019Or',
    tagline: 'Golden light, worn close',
    family: 'Floral',
    concentration: 'Eau de Parfum',
    price50: 120,
    price100: 185,
    rating: 4.9,
    reviews: 412,
    badge: 'Bestseller',
    image: img('1541643600914-78b084683601'),
    notes: { top: ['Bergamot', 'Saffron'], heart: ['Turkish Rose', 'Orange Blossom'], base: ['Golden Amber', 'Sandalwood'] },
    description:
      'Our signature scent. Saffron opens bright against Calabrian bergamot, then settles into a heart of Turkish rose warmed by golden amber. The one people ask about.',
    mood: ['evening', 'sensual'],
    longevity: '10–12 hours',
    sillage: 'Moderate',
  },
  {
    id: 'oud-minuit',
    name: 'Oud Minuit',
    tagline: 'Smoke, spice and midnight',
    family: 'Woody',
    concentration: 'Extrait de Parfum',
    price50: 155,
    price100: 240,
    rating: 4.8,
    reviews: 268,
    badge: 'Limited',
    image: img('1615634260167-c8cdede054de'),
    notes: { top: ['Black Pepper', 'Cardamom'], heart: ['Smoked Oud', 'Patchouli'], base: ['Vanilla Bourbon', 'Black Amber'] },
    description:
      'Smoked oud folded into black amber and vanilla bourbon. Deep, dry and quietly commanding — made for evenings that run long.',
    mood: ['evening', 'sensual'],
    longevity: '12+ hours',
    sillage: 'Strong',
  },
  {
    id: 'rose-de-sable',
    name: 'Rose de Sable',
    tagline: 'A rose, dried in the sun',
    family: 'Floral',
    concentration: 'Eau de Parfum',
    price50: 105,
    price100: 165,
    rating: 4.9,
    reviews: 356,
    badge: null,
    image: img('1594035910387-fea47794261f'),
    notes: { top: ['Pink Pepper', 'Lychee'], heart: ['Damask Rose', 'Peony'], base: ['White Musk', 'Cashmere Wood'] },
    description:
      'Damask rose picked at dawn, lifted by pink pepper and softened with white musk. Elegant without trying — the everyday signature.',
    mood: ['day', 'fresh'],
    longevity: '8–10 hours',
    sillage: 'Moderate',
  },
  {
    id: 'citrus-lumiere',
    name: 'Citrus Lumi\u00e8re',
    tagline: 'Morning light in a bottle',
    family: 'Citrus',
    concentration: 'Eau de Toilette',
    price50: 95,
    price100: 145,
    rating: 4.7,
    reviews: 189,
    badge: 'New',
    image: img('1592945403244-b3fbafd7f539'),
    notes: { top: ['Sicilian Lemon', 'Grapefruit'], heart: ['Neroli', 'Green Fig'], base: ['Vetiver', 'White Cedar'] },
    description:
      'Sicilian lemon and neroli over a dry vetiver base. Clean, bright and unhurried — the scent of a slow morning.',
    mood: ['day', 'fresh'],
    longevity: '6–8 hours',
    sillage: 'Soft',
  },
  {
    id: 'vanille-sauvage',
    name: 'Vanille Sauvage',
    tagline: 'Warmth, with an edge',
    family: 'Gourmand',
    concentration: 'Eau de Parfum',
    price50: 110,
    price100: 175,
    rating: 4.8,
    reviews: 301,
    badge: null,
    image: img('1523293182086-7651a899d37f'),
    notes: { top: ['Rum Accord', 'Cinnamon'], heart: ['Madagascar Vanilla', 'Tonka Bean'], base: ['Sandalwood', 'Benzoin'] },
    description:
      'Madagascar vanilla darkened with rum, cinnamon and tonka. Sweet, but never soft — a gourmand for people who do not like gourmands.',
    mood: ['evening', 'warm'],
    longevity: '9–11 hours',
    sillage: 'Moderate',
  },
  {
    id: 'iris-noir',
    name: 'Iris Noir',
    tagline: 'Powder, shadow, poise',
    family: 'Floral',
    concentration: 'Eau de Parfum',
    price50: 125,
    price100: 195,
    rating: 4.9,
    reviews: 224,
    badge: null,
    image: img('1587017539504-67cfbddac569'),
    notes: { top: ['Violet Leaf', 'Carrot Seed'], heart: ['Iris Butter', 'Mimosa'], base: ['Cedarwood', 'Grey Musk'] },
    description:
      'Iris butter — the most patient ingredient in perfumery — paired with violet leaf and dry cedar. Powdery, composed, quietly expensive.',
    mood: ['day', 'warm'],
    longevity: '9–10 hours',
    sillage: 'Moderate',
  },
  {
    id: 'ambre-fume',
    name: 'Ambre Fum\u00e9',
    tagline: 'Resin and slow fire',
    family: 'Amber',
    concentration: 'Eau de Parfum',
    price50: 135,
    price100: 210,
    rating: 4.8,
    reviews: 197,
    badge: null,
    image: img('1610461888750-10bfc601b874'),
    notes: { top: ['Incense', 'Elemi'], heart: ['Labdanum', 'Benzoin'], base: ['Amber', 'Guaiac Wood'] },
    description:
      'Incense and labdanum over a deep amber base. The scent of old libraries and late autumn — resinous, calm, enduring.',
    mood: ['evening', 'warm'],
    longevity: '11–13 hours',
    sillage: 'Strong',
  },
  {
    id: 'fleur-de-nuit',
    name: 'Fleur de Nuit',
    tagline: 'Jasmine after dark',
    family: 'Floral',
    concentration: 'Eau de Parfum',
    price50: 108,
    price100: 170,
    rating: 4.7,
    reviews: 243,
    badge: null,
    image: img('1588405748880-12d1d2a59f75'),
    notes: { top: ['Night Jasmine', 'Pear'], heart: ['Tuberose', 'Ylang Ylang'], base: ['White Musk', 'Sandalwood'] },
    description:
      'Night-blooming jasmine and tuberose, softened with pear and white musk. White florals without the weight — luminous, not loud.',
    mood: ['evening', 'sensual'],
    longevity: '8–10 hours',
    sillage: 'Moderate',
  },
];

export const HERO_IMAGE = img('1608528577891-eb055944f2e7', 1600);
export const STORY_IMAGE = img('1524758631624-e2822e304c36', 1400);
export const ATELIER_IMAGE = img('1596040033229-a9821ebd058d', 1400);
export const BESTSELLER_IMAGE = img('1541643600914-78b084683601', 1400);

export const NOTE_IMAGES = {
  Rose: img('1494972308805-463bc619d34e', 800),
  Citrus: img('1474979266404-7eaacbcd87c5', 800),
  Wood: img('1547887537-6158d64c35b3', 800),
  Floral: img('1490750967868-88aa4486c946', 800),
};

export const TESTIMONIALS = [
  {
    quote:
      'Noor d\u2019Or is the first perfume I have ever finished to the last drop. It smells like the person I want to be — calm, warm, and entirely sure of herself.',
    name: 'Amara S.',
    detail: 'Verified buyer — Noor d\u2019Or, 100ml',
    initials: 'AS',
  },
  {
    quote:
      'I bought Oud Minuit after one spray in a hotel lobby and I have worn it every winter since. Twelve hours later it is still there, softer, like it belongs to me.',
    name: 'Daniel R.',
    detail: 'Verified buyer — Oud Minuit, 50ml',
    initials: 'DR',
  },
  {
    quote:
      'The discovery set found my scent in ten minutes. Rose de Sable is now my everyday — colleagues notice it before I say hello, and always in a good way.',
    name: 'Hana K.',
    detail: 'Verified buyer — Discovery Set',
    initials: 'HK',
  },
];

export const DISCOVERY_SET = {
  id: 'discovery-set',
  name: 'The Discovery Set',
  tagline: 'All eight scents, 2ml each',
  family: 'Set',
  concentration: 'Eau de Parfum',
  price50: 45,
  price100: 45,
  rating: 4.9,
  reviews: 528,
  badge: 'Best value',
  image: img('1615529182904-14819c35db37'),
  notes: { top: ['All eight scents'], heart: ['2ml vials'], base: ['$45 redeemable'] },
  description:
    'All eight eaux de parfum in 2ml vials, with a $45 credit toward your full bottle. Find your scent before you commit.',
  mood: ['day', 'fresh'],
  longevity: '—',
  sillage: '—',
};

export const formatPrice = (n) => `$${n.toFixed(0)}`;
