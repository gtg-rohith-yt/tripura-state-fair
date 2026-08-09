// Respectful Educational Culture Dataset of Tripura for Centaur House State Fair
import { IMAGES } from './images';

export const CULTURE_CATEGORIES = [
  { id: "all", label: "ALL CULTURE" },
  { id: "traditions", label: "TRADITIONS" },
  { id: "crafts", label: "CRAFTS" },
  { id: "music-dance", label: "MUSIC & DANCE" },
  { id: "festivals", label: "FESTIVALS" }
];

export const CULTURE_CARDS_DATA = [
  // TRADITIONS
  {
    id: "kokborok",
    category: "traditions",
    title: "Kokborok Language",
    image: IMAGES.kokborok,
    icon: "🗣️",
    shortExplanation: "Kokborok is the ancestral Sino-Tibetan language spoken by the indigenous Tipra community, recognized as an official state language of Tripura.",
    culturalImportance: "Preserves centuries of oral history, traditional folklore, proverbs ('Soloma'), and royal poetry passed down through generations."
  },
  {
    id: "indigenous-communities",
    category: "traditions",
    title: "19 Indigenous Communities",
    image: IMAGES.indigenousCommunities,
    icon: "🪶",
    shortExplanation: "Tripura is home to 19 officially recognized Scheduled Tribes—including the Tripuri, Reang (Bru), Jamatia, Chakma, Halam, Mog, Kuki, and Munda communities.",
    culturalImportance: "Forms a harmonious multi-ethnic mosaic where each community preserves distinct customary laws, clan heritages, and attire while sharing state unity."
  },
  {
    id: "traditional-clothing",
    category: "traditions",
    title: "Traditional Clothing (Rignai & Risa)",
    image: IMAGES.traditionalClothing,
    icon: "👘",
    shortExplanation: "Tripuri women craft beautiful hand-woven lower garments called 'Rignai' paired with 'Risa' (chest wrap) and 'Rikutu' (upper drape).",
    culturalImportance: "Rignai patterns ('Chamthwbar', 'Kwakmwtwi') identify specific clans and celebratory occasions, demonstrating high artistic skill and self-reliance."
  },

  // CRAFTS
  {
    id: "bamboo-cane",
    category: "crafts",
    title: "Bamboo & Cane Crafts",
    image: IMAGES.bambooCaneCrafts,
    icon: "🎋",
    shortExplanation: "Tripura is world-renowned for eco-friendly craftsmanship in bamboo screens ('Moora'), fine umbrella handles, decorative lamps, and woven baskets.",
    culturalImportance: "Utilizes abundant local bamboo species ('Muli', 'Barak') to create sustainable, zero-plastic utility items revered in international design fairs."
  },
  {
    id: "handloom",
    category: "crafts",
    title: "Indigenous Handloom",
    image: IMAGES.handloom,
    icon: "🧶",
    shortExplanation: "Traditional handloom weaving on loin looms and frame looms is a cornerstone household art practiced across Tripura's rural hamlets.",
    culturalImportance: "Combines vibrant natural dyes with geometric motifs, empowering rural women artisans and sustaining indigenous textile heritage."
  },
  {
    id: "traditional-art",
    category: "crafts",
    title: "Traditional Art & Wood Carving",
    image: IMAGES.traditionalArt,
    icon: "🎨",
    shortExplanation: "Artisans sculpt intricate wooden masks, bamboo wall hangings, floral alpana floor patterns, and ceremonial idol structures.",
    culturalImportance: "Expresses spiritual reverence and natural motifs (lotus, rice stalk, peacocks) rooted in daily domestic life and sacred rituals."
  },

  // MUSIC & DANCE
  {
    id: "music",
    category: "music-dance",
    title: "Traditional Musical Instruments",
    image: IMAGES.music,
    icon: "🎵",
    shortExplanation: "Indigenous music features unique instruments made from bamboo and wood, including the 'Sumui' (flute), 'Sarinda' (string instrument), 'Kham' (drum), and 'Lebang' clappers.",
    culturalImportance: "Provides rhythmic accompaniment for agricultural harvests, seasonal welcome rituals, and sacred community gatherings."
  },
  {
    id: "dance",
    category: "music-dance",
    title: "Hojagiri & Folk Dances",
    image: IMAGES.dance,
    icon: "💃",
    shortExplanation: "Includes the famous Hojagiri dance of the Reang community—performed with extraordinary physical balance on earthen pitchers—alongside Garia, Dhamail, and Lebang Boomani dances.",
    culturalImportance: "Celebrates harvest seasons, monsoon rains, and spiritual devotions through breathtaking acrobatic poise and synchronized rhythm."
  },

  // FESTIVALS
  {
    id: "kharchi-puja",
    category: "festivals",
    title: "Kharchi Puja",
    image: IMAGES.kharchiPuja,
    icon: "🪔",
    shortExplanation: "A landmark 7-day royal festival celebrated in Old Agartala, where fourteen chief deities ('Chaturdash Devta') are ritually cleansed in the sacred Saidra river.",
    culturalImportance: "Unites tribal and non-tribal communities in public worship, symbolising earth cleansing, fertility, and peace across Tripura."
  },
  {
    id: "garia-puja",
    category: "festivals",
    title: "Garia Puja",
    image: IMAGES.gariaPuja,
    icon: "🌾",
    shortExplanation: "Held in the month of Vaisakha, Garia Puja invokes Lord Garia (the deity of livestock and agriculture) using a sacred bamboo pole adorned with garlands.",
    culturalImportance: "Blesses the agricultural cycle before Jhum cultivation, accompanied by joyous community dancing, feasting, and folk music."
  },
  {
    id: "ker-puja",
    category: "festivals",
    title: "Ker Puja",
    image: IMAGES.kerPuja,
    icon: "🛡️",
    shortExplanation: "A sacred protective ritual performed two weeks after Kharchi Puja, establishing a temporary sanctuary boundaries marked by green bamboo poles.",
    culturalImportance: "Involves solemn quietude within designated areas to protect citizens from natural calamities, illness, and external harm."
  },
  {
    id: "durga-puja",
    category: "festivals",
    title: "Durga Puja in Tripura",
    image: IMAGES.durgaPuja,
    icon: "✨",
    shortExplanation: "A grand autumn celebration featuring elaborate artistic pandals across Agartala, continuing centuries-old royal traditions from the Manikya era.",
    culturalImportance: "Reflects cultural synthesis where royal rituals at Durgabari combine harmoniously with community festivities across all neighborhoods."
  }
];
