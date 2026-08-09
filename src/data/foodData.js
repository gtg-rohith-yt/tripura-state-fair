// Authentic Tripura Educational Food & Cuisine Dataset for Centaur House State Fair
import { IMAGES } from './images';

export const FOOD_CATEGORIES = [
  { id: "all", label: "ALL DISHES" },
  { id: "traditional", label: "TRADITIONAL" },
  { id: "vegetarian", label: "VEGETARIAN" },
  { id: "other", label: "OTHER / CHUTNEYS" }
];

export const TRIPURA_DISHES = [
  {
    id: "mui-borok",
    name: "Mui Borok",
    category: "traditional",
    isVegetarian: false,
    image: IMAGES.muiBorok,
    icon: "🍲",
    shortDesc: "The traditional staple meal of the indigenous Tripuri people, centered around organic rice, local herbs, vegetables, and fermented fish ('Berma').",
    culturalContext: "Mui Borok literally translates to 'food of the Borok (Tripuri) people'. It represents centuries of culinary heritage relying on oil-free, healthy steaming and boiling techniques.",
    ingredients: ["Organic Rice", "Berma (Fermenting Fish)", "Seasonal Vegetables", "Green Chilies", "Wild Bamboo Shoots"]
  },
  {
    id: "chakhwi",
    name: "Chakhwi",
    category: "vegetarian",
    isVegetarian: true,
    image: IMAGES.chakhwi,
    icon: "🍲",
    shortDesc: "A comforting traditional stew made with bamboo shoots, green papaya, jackfruit seeds, crushed rice paste, and baking soda / liquid alkali ('Khar').",
    culturalContext: "Chakhwi is one of the oldest traditional Tripuri dishes, celebrated for its unique alkaline preparation method using natural plant ash extract ('Khar') and fresh forest bamboo shoots.",
    ingredients: ["Tender Bamboo Shoots ('Muya')", "Green Papaya", "Jackfruit Seeds", "Crushed Rice Paste", "Natural Khar (Alkali)", "Ginger"]
  },
  {
    id: "gudok",
    name: "Gudok",
    category: "traditional",
    isVegetarian: false,
    image: IMAGES.gudok,
    icon: "🌶️",
    shortDesc: "A signature boiled dish prepared by mashing tender bamboo shoots, potatoes, string beans, and fermented fish ('Berma') inside a bamboo hollow.",
    culturalContext: "Traditionally cooked inside a green bamboo tube over an open wood fire, Gudok is served during major tribal festivals, family gatherings, and community feasts.",
    ingredients: ["Berma (Fermented Fish)", "Tender Bamboo Shoots", "Potatoes", "Yardlong Beans", "Green Chilies", "Coriander Leaves"]
  },
  {
    id: "mosdeng-serma",
    name: "Mosdeng Serma",
    category: "other",
    isVegetarian: false,
    image: IMAGES.mosdengSerma,
    icon: "🧄",
    shortDesc: "A tangy and fiery Tripuri chutney prepared by mashing roasted tomatoes, garlic, red chilies, and pan-roasted fermented fish ('Berma').",
    culturalContext: "Served as an appetizing side dish accompanying main meals, Mosdeng Serma exemplifies the Tripuri love for fiery chili-garlic spice blends.",
    ingredients: ["Roasted Tomatoes", "Garlic Cloves", "Berma (Fermented Fish)", "Fresh Red/Green Chilies", "Coriander", "Mustard Oil"]
  },
  {
    id: "muya-awandru",
    name: "Muya Awandru",
    category: "vegetarian",
    isVegetarian: true,
    image: IMAGES.muyaAwandru,
    icon: "🎋",
    shortDesc: "A rich, creamy bamboo shoot curry cooked with rice flour batter, chili paste, and aromatic local herbs.",
    culturalContext: "Demonstrates the versatility of bamboo shoots ('Muya') in daily Tripuri home cooking without using heavy commercial dairy creams.",
    ingredients: ["Fresh Bamboo Shoots", "Rice Flour Batter ('Awandru')", "Green Chilies", "Ginger Paste", "Salt"]
  },
  {
    id: "kosoi-bwtwi",
    name: "Kosoi Bwtwi",
    category: "vegetarian",
    isVegetarian: true,
    image: IMAGES.kosoiBwtwi,
    icon: "🥗",
    shortDesc: "A nutritious boiled green bean and vegetable soup infused with garlic, chilies, and local herbs.",
    culturalContext: "A lightweight, wholesome daily soup served in indigenous households, highlighting oil-free boiling methods.",
    ingredients: ["Yardlong Beans / Green Beans", "Garlic", "Green Chilies", "Turmeric", "Khundrupui Leaves"]
  },
  {
    id: "panch-phoron-tarkari",
    name: "Panch Phoron Tarkari",
    category: "other",
    isVegetarian: true,
    image: IMAGES.panchPhoronTarkari,
    icon: "🍛",
    shortDesc: "A fragrant mixed vegetable curry tempered with five-spice blend ('Panch Phoron'), popular in Bengali Tripuri households.",
    culturalContext: "Reflects the harmonious cultural blending of Tripuri and Bengali culinary traditions, featuring seasonal pumpkin, eggplant, and potatoes.",
    ingredients: ["Pumpkin", "Eggplant", "Potatoes", "Panch Phoron (Five-Spice)", "Mustard Oil", "Bay Leaves"]
  }
];
