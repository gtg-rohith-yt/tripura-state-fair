// Centaur House State Fair Presentation Mode Sequence Data
// Exactly 15 structured slides using real local images from public/images/

import { IMAGES } from './images';

export const PRESENTATION_SLIDES = [
  {
    id: "slide-1-intro",
    slideIndex: 1,
    type: "intro",
    tag: "CENTAUR HOUSE PRESENTS",
    title: "TRIPURA",
    subtitle: "Where Heritage Meets Nature",
    icon: "🏛️",
    image: IMAGES.ujjayantaPalace,
    content: "Welcome to the official Centaur House State Fair exhibition on Tripura—an enchanting land of royal palaces, ancient rock reliefs, diverse indigenous cultures, and tropical forest sanctuaries.",
    bullets: [
      "Princely Manikya dynasty heritage spanning over 500 years",
      "Attained full Indian Statehood on 21 January 1972",
      "Bordered by Bangladesh on 3 sides (856 km international border)"
    ]
  },
  {
    id: "slide-2-discover",
    slideIndex: 2,
    type: "stats",
    tag: "STATE PROFILE",
    title: "DISCOVER TRIPURA",
    subtitle: "Essential Geography & Administrative Overview",
    icon: "🗺️",
    image: IMAGES.indigenousCommunities,
    stats: [
      { label: "Capital City", value: "Agartala", detail: "Administrative & Cultural Hub" },
      { label: "Total Area", value: "10,491.69 sq km", detail: "3rd Smallest Indian State" },
      { label: "Statehood", value: "21 Jan 1972", detail: "21st State of Republic of India" },
      { label: "Official Languages", value: "Kokborok & Bengali", detail: "Also English & Indigenous Dialects" },
      { label: "Districts", value: "8 Districts", detail: "Divided into 23 Sub-Divisions" },
      { label: "Forest Cover", value: "> 60%", detail: "Dense Tropical Reserves & Sanctuaries" }
    ]
  },
  {
    id: "slide-3-history",
    slideIndex: 3,
    type: "timeline",
    tag: "ROYAL CHRONICLES",
    title: "HISTORY OF TRIPURA",
    subtitle: "From Ancient Rajmala to Indian Statehood",
    icon: "📜",
    image: IMAGES.unakoti,
    timelinePoints: [
      { era: "c. 1400 AD", title: "Manikya Dynasty Founded", desc: "King Ratna Manikya I established the Manikya royal title and state coins." },
      { era: "1501 AD", title: "Tripura Sundari Temple", desc: "Maharaja Dhanya Manikya built the sacred Matabari Temple at Udaipur." },
      { era: "1901 AD", title: "Ujjayanta Palace Built", desc: "Maharaja Radha Kishore Manikya constructed the grand neoclassical palace." },
      { era: "1930 AD", title: "Neermahal Palace Built", desc: "Maharaja Bir Bikram Kishore Manikya commissioned the lake palace." },
      { era: "1949 AD", title: "Merger with India", desc: "Maharani Kanchan Prabha Devi signed the Tripura Merger Agreement." },
      { era: "1972 AD", title: "Full Statehood", desc: "Tripura became a full-fledged State of India under NE Reorganisation Act." }
    ]
  },
  {
    id: "slide-4-royal-heritage",
    slideIndex: 4,
    type: "heritage_overview",
    tag: "ARCHITECTURAL MARVELS",
    title: "ROYAL HERITAGE",
    subtitle: "Palaces, Temples & Ancient Sculptures",
    icon: "🏰",
    image: IMAGES.ujjayantaPalace,
    heritageSites: [
      { name: "Neermahal Water Palace", loc: "Melaghar, Rudrasagar Lake", note: "Solitary Lake Palace of Northeast India built in 1930." },
      { name: "Ujjayanta Palace", loc: "Agartala City Center", note: "Grand neoclassical palace constructed in 1901, now State Museum." },
      { name: "Tripura Sundari Temple", loc: "Udaipur, Matabari", note: "500-Year-old sacred Shakti Peetha temple built in 1501 AD." },
      { name: "Unakoti Rock Carvings", loc: "Kailashahar, Unakoti District", note: "Colossal 8th-9th century Shaivite bas-relief rock carvings." }
    ]
  },
  {
    id: "slide-5-neermahal",
    slideIndex: 5,
    type: "neermahal_feature",
    tag: "SPECIAL FEATURE DESTINATION",
    title: "NEERMAHAL PALACE",
    subtitle: "Northeast India's Solitary Lake Palace",
    icon: "🌊",
    image: IMAGES.neermahal,
    location: "Melaghar, Rudrasagar Lake, Sepahijala District",
    significance: "Royal Summer Palace of Manikya Kings Built in 1930",
    bullets: [
      "Built by Maharaja Bir Bikram Kishore Manikya in 1930 with red brick, sandstone & marble",
      "Features 24 opulent chambers, Andar Mahal living quarters, and open-air theatre",
      "Surrounded by Rudrasagar Lake, an internationally protected RAMSAR wetland",
      "Combines Hindu temple architecture with Islamic dome designs by British firm Martin & Burn"
    ]
  },
  {
    id: "slide-6-ujjayanta",
    slideIndex: 6,
    type: "destination",
    tag: "HERITAGE PALACE",
    title: "UJJAYANTA PALACE",
    subtitle: "Neoclassical Crown Jewel of Agartala",
    icon: "🏛️",
    image: IMAGES.ujjayantaPalace,
    location: "Capital City Agartala",
    significance: "Royal Palace built in 1901, named by Nobel laureate Rabindranath Tagore",
    bullets: [
      "Constructed by Maharaja Radha Kishore Manikya between 1899–1901",
      "Set amidst Mughal-style gardens with twin lotus fountains and grand lake reflecting pools",
      "Now houses the Tripura State Museum showcasing Northeastern art & royal relics",
      "Features soaring 96-foot high central dome and neoclassical tile craft"
    ]
  },
  {
    id: "slide-7-temple",
    slideIndex: 7,
    type: "destination",
    tag: "SACRED HERITAGE",
    title: "TRIPURA SUNDARI TEMPLE",
    subtitle: "500-Year-Old Sacred Matabari Shakti Peetha",
    icon: "🛕",
    image: IMAGES.tripuraSundariTemple,
    location: "Matabari, Udaipur (Ancient Capital)",
    significance: "One of the 51 Sacred Shakti Peethas of Hinduism",
    bullets: [
      "Built in 1501 AD by Maharaja Dhanya Manikya in traditional Bengali Kurma (turtle) style",
      "Shrine houses the holy idol of Goddess Tripura Sundari made of black reddish Kasti stone",
      "Surrounded by Kalyan Sagar lake populated by ancient sacred tortoises",
      "Draws thousands of pilgrims annually during Diwali and fair festivals"
    ]
  },
  {
    id: "slide-8-unakoti",
    slideIndex: 8,
    type: "destination",
    tag: "ANCIENT ROCK ART",
    title: "UNAKOTI ROCK CARVINGS",
    subtitle: "Colossal Shaivite Bas-Relief Sculpture",
    icon: "🗿",
    image: IMAGES.unakoti,
    location: "Kailashahar, Unakoti District",
    significance: "8th–9th Century Open-Air Sculpture Gallery & Pilgrimage Site",
    bullets: [
      "Features 'Unakoti' (meaning one less than a crore / 9,999,999) sacred rock reliefs",
      "Highlights 30-foot tall Unakotiswara Kal Bhairava head carving carved on mountain wall",
      "Nestled amidst pristine forest streams and lush green waterfalls",
      "Under consideration for UNESCO World Heritage Site designation"
    ]
  },
  {
    id: "slide-9-culture",
    slideIndex: 9,
    type: "culture",
    tag: "TRADITIONS & CRAFTS",
    title: "CULTURE OF TRIPURA",
    subtitle: "Indigenous Traditions & Master Craftsmanship",
    icon: "🧵",
    image: IMAGES.traditionalClothing,
    bullets: [
      "19 Indigenous Tribes: Kokborok-speaking Tipra communities with distinct heritage",
      "Rignai & Risa: Hand-woven traditional apparel with intricate tribal clan patterns",
      "Bamboo & Cane Craft: World-renowned eco-friendly furniture, lamps, & umbrellas",
      "Handloom Weaving: Centuries-old pit-loom weaving preserved across rural households"
    ]
  },
  {
    id: "slide-10-music-festivals",
    slideIndex: 10,
    type: "festivals",
    tag: "FESTIVALS & ARTS",
    title: "MUSIC • DANCE • FESTIVALS",
    subtitle: "Sacred Ceremonies & Folk Celebrations",
    icon: "🥁",
    image: IMAGES.kharchiPuja,
    festivals: [
      { name: "Kharchi Puja", desc: "Royal 7-day festival in July worshiping Fourteen Gods at Old Agartala." },
      { name: "Garia Puja", desc: "Spring harvest festival honoring Lord Garia with bamboo deity poles & dance." },
      { name: "Ker Puja", desc: "Sacred guardian deity ceremony maintaining ritual silence & state security." },
      { name: "Durga Puja", desc: "State-wide autumn celebration illuminating Agartala with decorated pandals." }
    ]
  },
  {
    id: "slide-11-nature",
    slideIndex: 11,
    type: "nature",
    tag: "ECOLOGICAL SANCTUARIES",
    title: "NATURE OF TRIPURA",
    subtitle: "Hills, Lakes & Wildlife Sanctuaries",
    icon: "🌲",
    image: IMAGES.jampuiHills,
    reserves: [
      { name: "Jampui Hills", desc: "Highest peak (1,000m) known as 'Seat of Spring' & orange orchards." },
      { name: "Rudrasagar Lake", desc: "RAMSAR protected wetland surrounding Neermahal Palace." },
      { name: "Dumboor Lake", desc: "41 sq km lake dotted with 48 emerald islands and migratory birds." },
      { name: "Sepahijala Sanctuary", desc: "Home to Phayre's Leaf Monkeys, Clouded Leopards & botanical gardens." },
      { name: "Trishna Sanctuary", desc: "Protected habitat of Indian Bison (Gaur) & virgin primary forests." }
    ]
  },
  {
    id: "slide-12-food",
    slideIndex: 12,
    type: "food",
    tag: "TRIPURI GASTRONOMY",
    title: "FOOD & CUISINE",
    subtitle: "Healthy & Authentic Steamed Dishes",
    icon: "🍲",
    image: IMAGES.muiBorok,
    dishes: [
      { name: "Mui Borok", desc: "Traditional staple Tripuri meal centered around rice, herbs, and fish." },
      { name: "Chakhwi", desc: "Ancient alkaline stew prepared with bamboo shoots, jackfruit & green papaya." },
      { name: "Gudok", desc: "Signature dish cooked by mashing vegetables & fish inside green bamboo hollows." },
      { name: "Mosdeng Serma", desc: "Tangy spicy chutney made with roasted chilis, garlic, and fermented Berma." }
    ]
  },
  {
    id: "slide-13-map",
    slideIndex: 13,
    type: "map",
    tag: "INTERACTIVE MAP",
    title: "EXPLORE TRIPURA",
    subtitle: "Interactive Vector Map of Districts & Landmarks",
    icon: "🗺️",
    image: IMAGES.tripuraMap,
    content: "Explore the geographical locations of Agartala, Udaipur, Melaghar, Unakoti, and Jampui Hills across Tripura's 8 districts."
  },
  {
    id: "slide-14-quiz",
    slideIndex: 14,
    type: "quiz",
    tag: "EDUCATIONAL QUIZ",
    title: "HOW WELL DO YOU KNOW TRIPURA?",
    subtitle: "Interactive State Fair Knowledge Challenge",
    icon: "🏆",
    image: IMAGES.kharchiPuja,
    content: "Ready to test your knowledge of Tripura's history, royal palaces, nature reserves, and indigenous traditions? Take the interactive 15-question quiz!",
    buttonText: "START QUIZ"
  },
  {
    id: "slide-15-outro",
    slideIndex: 15,
    type: "outro",
    tag: "THANK YOU FOR EXPLORING",
    title: "TRIPURA",
    subtitle: "Heritage • Culture • Nature",
    icon: "✨",
    image: IMAGES.ujjayantaPalace,
    content: "Thank you for visiting the Tripura State Fair Exhibition! Brought to you by Centaur House.",
    bullets: [
      "State Fair Exhibition Project by Centaur House",
      "Created for Projector & TV Presentation Mode",
      "Explore Tripura — The Jewel of Northeast India"
    ]
  }
];
