// Gallery Dataset for Centaur House State Fair with Verified Local Image Assets
import { IMAGES } from './images';

export const GALLERY_CATEGORIES = [
  { id: "all", label: "ALL EXHIBITS" },
  { id: "heritage", label: "HERITAGE" },
  { id: "nature", label: "NATURE" },
  { id: "culture", label: "CULTURE" },
  { id: "food", label: "FOOD" }
];

export const GALLERY_ITEMS = [
  // HERITAGE
  {
    id: "gallery-neermahal",
    category: "heritage",
    title: "Neermahal Water Palace",
    alt: "Royal Neermahal Water Palace floating in the center of Rudrasagar Lake, Tripura",
    src: IMAGES.neermahal,
    icon: "🏰",
    description: "Northeast India's only lake palace floating in Rudrasagar Lake, built by Maharaja Bir Bikram Kishore Manikya."
  },
  {
    id: "gallery-ujjayanta",
    category: "heritage",
    title: "Ujjayanta Palace & Gardens",
    alt: "Neoclassical Ujjayanta Palace facade with twin fountains in Agartala",
    src: IMAGES.ujjayantaPalace,
    icon: "🏛️",
    description: "Grand royal palace in Agartala, designed by Alexander Martin and named by Rabindranath Tagore."
  },
  {
    id: "gallery-unakoti",
    category: "heritage",
    title: "Unakoti Rock Reliefs",
    alt: "Gigantic 30-foot rock-cut head of Lord Shiva Kal Bhairava at Unakoti",
    src: IMAGES.unakoti,
    icon: "🗿",
    description: "Ancient 8th-century Shaivite rock sculptures carved directly into forest hillslopes in Kailashahar."
  },
  {
    id: "gallery-tripurasundari",
    category: "heritage",
    title: "Tripura Sundari Temple",
    alt: "500-year-old Tripura Sundari Shakti Peetha temple in Udaipur Matabari",
    src: IMAGES.tripuraSundariTemple,
    icon: "🛕",
    description: "Sacred 1501 AD Shakti Peetha temple built on a tortoise-shaped hillock near Kalyan Sagar lake."
  },
  {
    id: "gallery-pilak",
    category: "heritage",
    title: "Pilak Archaeological Ruins",
    alt: "Ancient 8th-12th century Buddhist and Hindu stone sculptures at Pilak",
    src: IMAGES.pilak,
    icon: "☸️",
    description: "Ancient archaeological site revealing terraced stupas and stone sculptures of Avalokiteshvara and Vishnu."
  },

  // NATURE
  {
    id: "gallery-jampui",
    category: "nature",
    title: "Jampui Hills Sunrise",
    alt: "Mist-covered green mountain peaks of Jampui Hills during sunrise",
    src: IMAGES.jampuiHills,
    icon: "⛰️",
    description: "Tripura's highest mountain range at 1,000m altitude, famous for orange orchards and perpetual spring."
  },
  {
    id: "gallery-rudrasagar",
    category: "nature",
    title: "Rudrasagar RAMSAR Lake",
    alt: "Tranquil waters and waterfowl habitat of Rudrasagar RAMSAR wetland",
    src: IMAGES.rudrasagarLake,
    icon: "🌊",
    description: "Designated RAMSAR wetland site supporting rich aquatic biodiversity and winter migratory waterfowl."
  },
  {
    id: "gallery-dumboor",
    category: "nature",
    title: "Dumboor Lake Islands",
    alt: "Aerial view of 48 green islands in the 41 sq km Dumboor Lake",
    src: IMAGES.dumboorLake,
    icon: "🏝️",
    description: "Serene 41 sq km lake dotted with 48 emerald islands, forming the origin of the Gomati River."
  },
  {
    id: "gallery-sepahijala",
    category: "nature",
    title: "Sepahijala Primate Sanctuary",
    alt: "Lush tropical tree canopies protecting rare wildlife at Sepahijala Sanctuary",
    src: IMAGES.sepahijalaSanctuary,
    icon: "🐒",
    description: "Spanning 18.5 sq km, famous for the State Animal Phayre's Leaf Monkey and Clouded Leopard breeding center."
  },
  {
    id: "gallery-trishna",
    category: "nature",
    title: "Trishna Gaur Reserve",
    alt: "Primary bamboo and sal forest habitat of Indian Gaur at Trishna Sanctuary",
    src: IMAGES.trishnaSanctuary,
    icon: "🦬",
    description: "Dense primary sanctuary protecting the endangered Indian Gaur (wild bison) and virgin bamboo brakes."
  },

  // CULTURE
  {
    id: "gallery-kokborok",
    category: "culture",
    title: "Kokborok Script & Heritage",
    alt: "Indigenous Kokborok script and linguistic literature of Tipra community",
    src: IMAGES.kokborok,
    icon: "🗣️",
    description: "Preserving ancestral Sino-Tibetan language, oral folklore, proverbs, and royal poetry."
  },
  {
    id: "gallery-indigenous-cloth",
    category: "culture",
    title: "Traditional Handwoven Rignai & Risa",
    alt: "Handwoven Tripuri traditional attire Rignai and Risa",
    src: IMAGES.traditionalClothing,
    icon: "👘",
    description: "Vibrant traditional handwoven garments featuring clan-specific geometric motifs."
  },
  {
    id: "gallery-handloom",
    category: "culture",
    title: "Indigenous Handloom Weaving",
    alt: "Indigenous handloom weaver crafting vibrant geometric textiles",
    src: IMAGES.handloom,
    icon: "🧵",
    description: "Cornerstone household art combining natural dyes with geometric motifs across rural hamlets."
  },
  {
    id: "gallery-bamboo-crafts",
    category: "culture",
    title: "Bamboo & Cane Mastercrafts",
    alt: "Intricate handcrafted bamboo screens, basketry, and utility items",
    src: IMAGES.bambooCaneCrafts,
    icon: "🎋",
    description: "World-renowned eco-friendly bamboo utility products and screens produced by local master artisans."
  },
  {
    id: "gallery-bamboo-art",
    category: "culture",
    title: "Traditional Bamboo Wall Art",
    alt: "Intricate bamboo wall hanging and wooden carving craft of Tripura",
    src: IMAGES.traditionalArt,
    icon: "🎨",
    description: "Sculpted wooden masks, bamboo wall hangings, and ceremonial decorative structures."
  },
  {
    id: "gallery-dance",
    category: "culture",
    title: "Hojagiri & Folk Dance",
    alt: "Reang tribal folk dancers performing traditional harvest routines",
    src: IMAGES.dance,
    icon: "💃",
    description: "Famous harvest dance of the Reang community, featuring extraordinary physical balance on earthen pitchers."
  },
  {
    id: "gallery-music",
    category: "culture",
    title: "Traditional Music & Sumui Flute",
    alt: "Traditional Tripuri musical instruments Sumui flute, Kham drum, and Sarinda",
    src: IMAGES.music,
    icon: "🎵",
    description: "Bamboo and wood musical instruments providing rhythmic accompaniment for harvests and festivals."
  },
  {
    id: "gallery-kharchi-puja",
    category: "culture",
    title: "Kharchi Puja Royal Festival",
    alt: "Sacred procession of 14 royal deities during Kharchi Puja in Old Agartala",
    src: IMAGES.kharchiPuja,
    icon: "🪔",
    description: "Landmark 7-day royal festival honoring the fourteen chief deities (Chaturdash Devta) in Old Agartala."
  },
  {
    id: "gallery-garia-puja",
    category: "culture",
    title: "Garia Puja Festival",
    alt: "Traditional Garia Puja celebrations blessing agriculture before Jhum cultivation",
    src: IMAGES.gariaPuja,
    icon: "🌾",
    description: "Vaisakha festival invoking Lord Garia for bumper crops, livestock health, and community unity."
  },
  {
    id: "gallery-ker-puja",
    category: "culture",
    title: "Ker Puja Sanctuary Ritual",
    alt: "Sacred protective Ker Puja ritual marked by bamboo sanctuary boundaries",
    src: IMAGES.kerPuja,
    icon: "🛡️",
    description: "Sacred protective ritual performed two weeks after Kharchi Puja to guard against calamities."
  },
  {
    id: "gallery-durga-puja",
    category: "culture",
    title: "Durga Puja Festivities",
    alt: "Grand Durga Puja celebration and royal Durgabari pandal illuminations",
    src: IMAGES.durgaPuja,
    icon: "✨",
    description: "Autumn festival uniting royal Manikya traditions with grand neighborhood celebrations."
  },

  // FOOD
  {
    id: "gallery-mui-borok",
    category: "food",
    title: "Traditional Mui Borok Meal",
    alt: "Authentic Tripuri home meal Mui Borok with organic rice, bamboo shoots, and boiled herbs",
    src: IMAGES.muiBorok,
    icon: "🍲",
    description: "The traditional staple meal of indigenous Tipra cuisine prepared with healthy oil-free boiling methods."
  },
  {
    id: "gallery-chakhwi",
    category: "food",
    title: "Chakhwi Bamboo Stew",
    alt: "Traditional Tripuri Chakhwi stew with bamboo shoots, green papaya, and natural alkali",
    src: IMAGES.chakhwi,
    icon: "🍲",
    description: "Ancient alkaline stew made with tender bamboo shoots, green papaya, and natural plant ash extract."
  },
  {
    id: "gallery-gudok",
    category: "food",
    title: "Gudok Bamboo Tube Dish",
    alt: "Steamed Gudok mashed inside a green bamboo hollow over wood fire",
    src: IMAGES.gudok,
    icon: "🌶️",
    description: "Signature festival dish mashed inside a fresh green bamboo hollow with fermented fish and chilies."
  },
  {
    id: "gallery-mosdeng-serma",
    category: "food",
    title: "Mosdeng Serma Chutney",
    alt: "Fiery Tripuri Mosdeng Serma chutney with roasted tomatoes, garlic, and Berma",
    src: IMAGES.mosdengSerma,
    icon: "🧄",
    description: "Tangy chili-garlic chutney served as an appetizing side dish accompanying main meals."
  },
  {
    id: "gallery-muya-awandru",
    category: "food",
    title: "Muya Awandru Bamboo Curry",
    alt: "Creamy Muya Awandru bamboo shoot curry with rice flour batter and green chilies",
    src: IMAGES.muyaAwandru,
    icon: "🎋",
    description: "Rich, creamy bamboo shoot curry cooked with rice flour batter and local herbs."
  },
  {
    id: "gallery-kosoi-bwtwi",
    category: "food",
    title: "Kosoi Bwtwi Green Bean Soup",
    alt: "Nutritious Kosoi Bwtwi boiled green bean and vegetable soup infused with garlic",
    src: IMAGES.kosoiBwtwi,
    icon: "🥗",
    description: "Nutritious boiled green bean and vegetable soup highlighting oil-free cooking."
  },
  {
    id: "gallery-panch-phoron",
    category: "food",
    title: "Panch Phoron Tarkari Curry",
    alt: "Fragrant Panch Phoron Tarkari mixed vegetable curry tempered with five-spice",
    src: IMAGES.panchPhoronTarkari,
    icon: "🍛",
    description: "Fragrant mixed vegetable curry tempered with five-spice blend ('Panch Phoron')."
  }
];
