import { EstateZone, ProcessStage, CompanionCrop, TripOption } from '../types';

export const estateZones: Record<'farm' | 'factory' | 'relax', EstateZone> = {
  farm: {
    key: 'farm',
    number: '01',
    label: '01 / THE FARMING ZONE',
    kicker: 'GROW WITH THE LAND',
    title: 'Where it all begins.',
    image: '/assets/farm.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Concept image of Arabica coffee cherries growing on a highland farm',
    description: 'Explore 4.4 acres with approximately 3,000 Arabica trees, intercropped with tea, macadamia, papaya, dragon fruit and passion fruit.',
    highlights: ['4.4 ACRES OF COFFEE', '3,000 ARABICA TREES'],
    activities: ['Walk among the coffee trees', 'Discover companion crops', 'See the harvest up close']
  },
  factory: {
    key: 'factory',
    number: '02',
    label: '02 / THE FACTORY ZONE',
    kicker: 'THE CRAFT BEHIND THE CUP',
    title: 'A thoughtful transformation.',
    image: '/assets/factory.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Concept image of raised drying beds in a boutique coffee facility',
    description: 'Discover the proposed boutique washed-process facility, from flotation sorting and fermentation tanks to raised solar drying beds.',
    highlights: ['WASHED-PROCESS COFFEE', 'RAISED DRYING BEDS'],
    activities: ['Follow the washed process', 'Explore the drying beds', 'Discover coffee craftsmanship']
  },
  relax: {
    key: 'relax',
    number: '03',
    label: '03 / THE RELAX ZONE',
    kicker: 'FIND YOUR QUIET PLACE',
    title: 'A little room to breathe.',
    image: '/assets/retreat.webp',
    fallbackImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    alt: 'Concept image of a timber veranda overlooking misty highland hills',
    description: 'Imagine mountain views, fresh brews and unhurried moments around a solar-powered pond setting in the highland air.',
    highlights: ['MOUNTAIN VERANDA', 'PANORAMIC VIEWPOINTS'],
    activities: ['Pause with a fresh brew', 'Take in the mountain views', 'Unwind by the ponds']
  }
};

export const processStages: ProcessStage[] = [
  {
    label: 'STAGE ONE · THE BEGINNING',
    title: 'Flotation Tank<br>& Sizing',
    description: 'Freshly harvested cherries are introduced to water, where flotation helps separate them before sorting and sizing.',
    fact: 'A careful first selection'
  },
  {
    label: 'STAGE TWO · REVEAL THE BEAN',
    title: 'Mechanical<br>Depulping',
    description: 'A depulper removes the outer fruit from each coffee cherry, revealing the precious beans within.',
    fact: 'From ripe cherry to coffee seed'
  },
  {
    label: 'STAGE THREE · PATIENCE',
    title: 'Tank<br>Fermentation',
    description: 'The beans rest in fermentation tanks for approximately 12–36 hours, helping loosen the remaining fruit layer before washing.',
    fact: '12–36 hours of careful fermentation'
  },
  {
    label: 'STAGE FOUR · SUN & AIR',
    title: 'Raised<br>Sun-Drying',
    description: 'After washing, the beans dry on raised beds in the sun until they reach approximately 11–12% moisture.',
    fact: 'Target moisture: 11–12%'
  },
  {
    label: 'STAGE FIVE · REFINEMENT',
    title: 'Hulling &<br>Density Grading',
    description: 'The dried parchment layer is removed, then green beans are graded by characteristics including size and density.',
    fact: 'A considered selection of green coffee'
  },
  {
    label: 'STAGE SIX · THE FINISH',
    title: 'Artisan Roasting<br>& Nitrogen Sealing',
    description: 'Coffee is roasted to bring out its character and sealed with nitrogen to help protect its freshness.',
    fact: 'Ready to become your next favourite cup'
  }
];

export const companionCrops: CompanionCrop[] = [
  {
    id: 'tea',
    number: '01 / THE EVERYDAY HARVEST',
    art: '♧',
    name: 'Tea',
    desc: 'A year-round harvest with the potential for steady income.',
    bgClass: 'crop-tea'
  },
  {
    id: 'dragon',
    number: '02 / A SPLASH OF COLOUR',
    art: '✳',
    name: 'Dragon Fruit',
    desc: 'Brilliant colour and sculptural shapes make a beautiful photo moment.',
    bgClass: 'crop-dragon'
  },
  {
    id: 'passion',
    number: '03 / A TASTE OF THE FARM',
    art: '✺',
    name: 'Passion Fruit',
    desc: 'Fragrant fruit imagined as the heart of refreshing farm juices.',
    bgClass: 'crop-passion'
  },
  {
    id: 'macadamia',
    number: '04 / ROOTED IN THE FUTURE',
    art: '◉',
    name: 'Macadamia',
    desc: 'A long-term crop that helps diversify the farm’s future.',
    bgClass: 'crop-macadamia'
  },
  {
    id: 'banana',
    number: '05 / NATURE’S SUPPORTERS',
    art: '❧',
    name: 'Banana & Papaya',
    desc: 'Banana material can enrich compost while papaya offers welcome shade.',
    bgClass: 'crop-banana'
  }
];

export const tripOptions: Record<'harvest' | 'villa' | 'cupping', TripOption> = {
  harvest: {
    id: 'harvest',
    name: 'Day Harvest Tour',
    tag: 'DAY EXPERIENCE',
    title: 'A day in the<br><em>growing fields.</em>',
    itinerary: [
      'Welcome & estate introduction',
      'Guided coffee and orchard walk',
      'Fresh brew and time to unwind'
    ],
    total: (guests: number) => 45000 * guests,
    rate: (guests: number, t: (s: string) => string) =>
      `45,000 MMK × ${guests} ${t(guests === 1 ? 'guest' : 'guests')}`
  },
  villa: {
    id: 'villa',
    name: 'Weekend Villa Stay',
    tag: 'TWO-NIGHT EXPERIENCE',
    title: 'A little longer<br><em>in the highlands.</em>',
    itinerary: [
      'Arrive and settle into your villa',
      'Explore the estate and enjoy a fresh brew',
      'Two unhurried nights in the highlands'
    ],
    total: (guests: number) => 380000 + Math.max(0, guests - 2) * 95000,
    rate: (guests: number, t: (s: string) => string) =>
      guests <= 2
        ? `380,000 MMK ${t('base · up to 2 guests')}`
        : `380,000 MMK ${t('base')} + 95,000 × ${guests - 2} ${t('extra')}`
  },
  cupping: {
    id: 'cupping',
    name: 'Specialty Cupping Workshop',
    tag: 'COFFEE EXPERIENCE',
    title: 'Discover a more<br><em>thoughtful cup.</em>',
    itinerary: [
      'Meet the coffee and its origin',
      'Explore aroma and tasting techniques',
      'Compare flavours in a guided cupping'
    ],
    total: (guests: number) => 65000 * guests,
    rate: (guests: number, t: (s: string) => string) =>
      `65,000 MMK × ${guests} ${t(guests === 1 ? 'guest' : 'guests')}`
  }
};
