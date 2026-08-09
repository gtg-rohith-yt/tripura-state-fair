// Comprehensive Tripura Nature & Wildlife Dataset for Centaur House State Fair
import { IMAGES } from './images';

export const NATURE_STATS = [
  { id: "forest-cover", value: "> 60%", label: "Total Forest Cover", subtext: "6,294 sq km of tropical forest area", icon: "🌲" },
  { id: "sanctuaries", value: "4 + 2", label: "Protected Reserves", subtext: "4 Wildlife Sanctuaries & 2 National Parks", icon: "🏞️" },
  { id: "dumboor-islands", value: "48", label: "Dumboor Islands", subtext: "Picturesque emerald islands in 41 sq km lake", icon: "🏝️" },
  { id: "flora-species", value: "1,500+", label: "Plant Species", subtext: "Includes 266 rare medicinal plant species", icon: "🌿" }
];

export const NATURE_DESTINATIONS = [
  {
    id: "jampui-hills",
    title: "Jampui Hills",
    tag: "Highest Peak in Tripura",
    altitude: "1,000 meters above sea level",
    location: "North Tripura District",
    image: IMAGES.jampuiHills,
    icon: "⛰️",
    shortDesc: "Known as the 'Seat of Spring' with pleasant weather year-round, panoramic valley views, and vibrant orange orchards.",
    fullDesc: "Perched at an elevation of 1,000 meters along the Mizoram border, Jampui Hills is Tripura's highest mountain range. Famous for its perpetual spring climate, mist-clad valleys, and lush orange orchards, Jampui offers breathtaking sunrise and sunset vistas from Betlingchhip peak.",
    keyFauna: "Green Imperial Pigeon, Wild Orchids, Crested Serpent Eagle",
    bestSeason: "October to March (Annual Orange Festival in November)",
    highlights: [
      "Betlingchhip peak (1,097m) is the highest point in Tripura",
      "Panoramic views of the Chittagong Hill Tracts and Mizoram hills",
      "Famous for indigenous Mizo villages, traditional handicrafts, and eco-homestays"
    ]
  },
  {
    id: "rudrasagar-lake",
    title: "Rudrasagar Lake",
    tag: "RAMSAR Wetland Site",
    location: "Melaghar, Sepahijala District",
    image: IMAGES.rudrasagarLake,
    icon: "🌊",
    shortDesc: "A crucial ecological wetland sustaining rich aquatic fauna and migratory waterfowl, enclosing the iconic Neermahal Water Palace.",
    fullDesc: "Spanning 5.3 sq km, Rudrasagar Lake is a designated RAMSAR Wetland of International Importance. Feeding off the Noacherra streams, it supports rare aquatic bio-diversity, commercial freshwater fisheries, and hosts winter migratory waterfowl like whistling teals and pochards.",
    keyFauna: "Whistling Ducks, Ferruginous Pochard, Freshwater Turtles",
    bestSeason: "November to February (Migratory Bird Watching Season)",
    highlights: [
      "RAMSAR International Wetland Site #1572",
      "Encloses Neermahal, Northeast India's only royal lake palace",
      "Sustains traditional fishermen cooperatives and lotus floral ecosystems"
    ]
  },
  {
    id: "dumboor-lake",
    title: "Dumboor Lake",
    tag: "48 Emerald Islands",
    location: "Gandacherra, Dhalai District",
    image: IMAGES.dumboorLake,
    icon: "🏝️",
    shortDesc: "A vast 41 sq km body of water shaped like Lord Shiva's tabor ('Dambur'), dotted with 48 lush green islands and rich birdlife.",
    fullDesc: "Formed at the confluence of the Raima and Sarma rivers, Dumboor Lake derives its name from its resemblance to a 'Dambur' (small drum of Lord Shiva). The lake spreads over 41 square kilometers with 48 emerald islands, providing a paradise for boat cruises, migratory waterfowl, and hydro-electric power generation.",
    keyFauna: "Migratory Geese, Egret, Asian Openbill Stork, Freshwater Mahseer",
    bestSeason: "October to March (Pous Sankranti Mela in January)",
    highlights: [
      "41 sq km lake expanse dotted with 48 green islands",
      "Origin point of the sacred Gomati River",
      "Annual Pous Sankranti fair draws thousands of tribal pilgrims"
    ]
  },
  {
    id: "sepahijala-sanctuary",
    title: "Sepahijala Wildlife Sanctuary",
    tag: "Primate Reserve & Bio-Complex",
    location: "Bishalgarh, Sepahijala District",
    image: IMAGES.sepahijalaSanctuary,
    icon: "🐒",
    shortDesc: "Spanning 18.5 sq km, famous for the endangered Phayre's Leaf Monkey, Clouded Leopard breeding center, and orchid gardens.",
    fullDesc: "Established in 1972, Sepahijala is a unique bio-complex combining a dense primary wildlife sanctuary, botanical gardens, orchidarium, deer park, and boating lakes. It is internationally recognized for its primate conservation efforts, hosting five distinct monkey species.",
    keyFauna: "Phayre's Leaf Monkey, Clouded Leopard, Capped Langur, Pig-tailed Macaque",
    bestSeason: "Year-round (Best wildlife sightings November–March)",
    highlights: [
      "Houses India's only dedicated Clouded Leopard breeding center",
      "Home to the endangered Phayre's Leaf Monkey (State Animal)",
      "Botanical garden showcasing over 450 plant species and wild orchids"
    ]
  },
  {
    id: "trishna-sanctuary",
    title: "Trishna Wildlife Sanctuary",
    tag: "Indian Bison (Gaur) Reserve",
    location: "Belonia, South Tripura District",
    image: IMAGES.trishnaSanctuary,
    icon: "🦬",
    shortDesc: "Dense primary forests protecting the majestic Indian Gaur (wild bison), virgin bamboo brakes, medicinal flora, and serene lakes.",
    fullDesc: "Covering 163.08 sq km of primary sal and mixed deciduous forest, Trishna Wildlife Sanctuary is the primary sanctuary for the endangered Indian Gaur (bison) in Northeast India. Interspersed with natural water bodies and virgin bamboo brakes, it offers a pristine habitat for wild ungulates and rare birds.",
    keyFauna: "Indian Gaur (Bison), Spectacled Monkey, Pheasant-tailed Jacana",
    bestSeason: "October to April",
    highlights: [
      "Northeast India's premier habitat for the majestic Indian Gaur (wild bison)",
      "Protects rare virgin bamboo forests and medicinal plant reserves",
      "Located near the ancient 8th-century archaeological ruins of Pilak"
    ]
  }
];

export const TRIPURA_WILDLIFE = [
  {
    id: "phayres-monkey",
    name: "Phayre's Leaf Monkey",
    tag: "Official State Animal",
    scientificName: "Trachypithecus phayrei",
    image: IMAGES.phayresMonkey,
    icon: "🐒",
    desc: "Famous for distinctive white eye rings that resemble spectacles, this endangered folivorous primate thrives in Sepahijala's tree canopies."
  },
  {
    id: "clouded-leopard",
    name: "Clouded Leopard",
    tag: "State Wildlife Emblem",
    scientificName: "Neofelis nebulosa",
    image: IMAGES.cloudedLeopard,
    icon: "🐆",
    desc: "A vulnerable arboreal feline with beautiful cloud-shaped coat patterns. Sepahijala Sanctuary operates India's only successful breeding program."
  },
  {
    id: "indian-gaur",
    name: "Indian Gaur (Wild Bison)",
    tag: "Largest Wild Bovine",
    scientificName: "Bos gaurus",
    image: IMAGES.indianGaur,
    icon: "🦬",
    desc: "Massive wild cattle weighing up to 1,500 kg, protected inside the dense bamboo and sal forests of Trishna Wildlife Sanctuary."
  },
  {
    id: "green-pigeon",
    name: "Green Imperial Pigeon",
    tag: "Official State Bird",
    scientificName: "Ducula aenea",
    image: IMAGES.greenPigeon,
    icon: "🕊️",
    desc: "A large arboreal pigeon with emerald-green wings and maroon under-tail coverts, inhabiting primary canopy forests across Tripura."
  }
];
