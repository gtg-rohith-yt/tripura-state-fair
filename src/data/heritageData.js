// Comprehensive Tripura Heritage Destinations Dataset for Centaur House State Fair
import { IMAGES } from './images';

export const NEERMAHAL_FEATURED_DATA = {
  id: "neermahal",
  title: "Neermahal — The Water Palace",
  subtitle: "Northeast India's Only Lake Palace",
  location: "Melaghar, Rudrasagar Lake, Sepahijala District",
  ruler: "Maharaja Bir Bikram Kishore Manikya Bahadur",
  period: "1930 — 1938 AD",
  architecture: "Fusion of Mughal & Hindu Architectural Styles",
  lakeName: "Rudrasagar Lake (RAMSAR Wetland)",
  image: IMAGES.neermahal,
  shortDesc: "Situated right in the center of the 5.3 sq km Rudrasagar Lake, Neermahal ('Water Palace') is a magnificent royal summer residence built as a blend of Hindu and Islamic architectural mastery.",
  fullDesc: "Commissioned by Maharaja Bir Bikram Kishore Manikya Bahadur in 1930 and completed in 1938 by the British firm Martin & Burn, Neermahal stands as the only water palace in Northeast India and one of only two lake palaces in the entire nation. Constructed using red brick, sandstone, and marble, the palace floats serenely amidst lotus blooms and migratory birds.",
  significance: "Neermahal served as the royal summer retreat for the Manikya dynasty. It reflects visionary 20th-century royal planning, combining traditional Hindu arches and domes with Mughal-style minarets, motorboat inner moats, and an open-air theatre for cultural evening performances.",
  architecturalCharacter: [
    "Divided into two main zones: 'Andar Mahal' (Royal Living Quarters for the King & Queen) and the Open-Air Cultural Pavilion.",
    "Features 24 opulent rooms, grand balconies, inner courtyards, and twin motorboat docking gates leading directly inside the palace moats.",
    "Equipped with traditional royal natural cooling systems using lake breezes and water reflection channels.",
    "Surrounded by Rudrasagar Lake, a RAMSAR designated wetland of international ecological importance."
  ],
  svgPattern: "lake-palace"
};

export const HERITAGE_DESTINATIONS = [
  {
    id: "neermahal-card",
    title: "Neermahal Palace",
    location: "Melaghar, Rudrasagar Lake",
    category: "Royal Water Palace",
    image: IMAGES.neermahal,
    shortDesc: "Northeast India's solitary lake palace, built in the middle of Rudrasagar Lake with 24 rooms and twin royal moats.",
    significance: "Commissioned in 1930 by Maharaja Bir Bikram Kishore Manikya, showcasing a rare fusion of Mughal and Hindu royal architecture.",
    imagePlaceholder: "🏰",
    details: {
      period: "1930–1938 AD",
      builtBy: "Maharaja Bir Bikram Kishore Manikya Bahadur",
      architecturalStyle: "Mughal & Hindu Royal Fusion",
      highlights: [
        "Situated in the center of Rudrasagar Lake (RAMSAR Site)",
        "24 royal chambers, open-air cultural theatre, and motorboat gates",
        "Hosted grand royal summer water sports and evening music recitals"
      ],
      fullStory: "Neermahal stands as a crowning jewel of Tripura's princely architecture. Surrounded on all sides by the tranquil waters of Rudrasagar Lake, the palace was designed as a summer sanctuary where the Manikya monarchs entertained distinguished guests. Accessible exclusively by motorboat or traditional timber boats, its twin domes and minarets glow brilliantly during sunrise and sunset."
    }
  },
  {
    id: "ujjayanta-card",
    title: "Ujjayanta Palace",
    location: "Agartala, West Tripura",
    category: "Royal Palace & State Museum",
    image: IMAGES.ujjayantaPalace,
    shortDesc: "A breathtaking neoclassical royal palace surrounded by Mughal-style gardens and twin fountains, now housing the Tripura State Museum.",
    significance: "Built between 1899–1901 by Maharaja Radha Kishore Manikya; named by Nobel laureate Rabindranath Tagore.",
    imagePlaceholder: "🏛️",
    details: {
      period: "1899–1901 AD",
      builtBy: "Maharaja Radha Kishore Manikya",
      architecturalStyle: "Neoclassical & British Colonial Hybrid",
      highlights: [
        "Spans 800 acres with twin water fountains and Italianate garden parterres",
        "Houses the Tripura State Museum featuring 22 gallery halls of artifacts",
        "Named 'Ujjayanta' by Rabindranath Tagore during his royal visits"
      ],
      fullStory: "Ujjayanta Palace served as the seat of the Manikya kings until Tripura's merger with India. Designed by Sir Alexander Martin and built at a cost of 10 lakh rupees after the devastating 1897 earthquake destroyed the old palace, Ujjayanta features three high domes, carved wooden ceilings, and grand marble halls. Today, it stands as the premier museum of Northeast Indian art, ethnography, and royal heirlooms."
    }
  },
  {
    id: "tripurasundari-card",
    title: "Tripura Sundari Temple",
    location: "Udaipur (Matabari), Gomati District",
    category: "Sacred Pilgrimage Site",
    image: IMAGES.tripuraSundariTemple,
    shortDesc: "One of the 51 revered Shakti Peethas in Hindu tradition, perched atop a tortoise-shaped hillock near Kalyan Sagar lake.",
    significance: "Established in 1501 AD by Maharaja Dhanya Manikya; a 500-year-old sanctuary of spiritual heritage.",
    imagePlaceholder: "🛕",
    details: {
      period: "1501 AD",
      builtBy: "Maharaja Dhanya Manikya",
      architecturalStyle: "Traditional Bengali 'Ek-Ratna' Temple Style",
      highlights: [
        "Recognized as one of the 51 sacred Shakti Peethas (Soroshi / Tripura Sundari)",
        "Built on a hillock resembling a tortoise ('Kurma Pitha')",
        "Adjacent to Kalyan Sagar lake, home to ancient sacred tortoises"
      ],
      fullStory: "Popularly known as Matabari, Tripura Sundari Temple is revered across South Asia. According to legend, the right foot of Goddess Sati fell here during the cosmic dance of Lord Shiva. Built in 1501 AD by King Dhanya Manikya following a divine dream, the square sanctum crowned by a single pinnacle ('Ek-Ratna') reflects timeless indigenous temple craft. Annual Diwali melas here draw over two lakh devotees."
    }
  },
  {
    id: "unakoti-card",
    title: "Unakoti Rock Sculptures",
    location: "Kailashahar, Unakoti District",
    category: "Ancient Archaeological Reliefs",
    image: IMAGES.unakoti,
    shortDesc: "A colossal Shaivite pilgrimage site featuring 8th–9th century bas-relief rock-cut carvings of Lord Shiva sculpted into forest hillslopes.",
    significance: "Northeast India's largest open-air rock art heritage, depicting 'Unakoti' (one less than a crore / 10 million).",
    imagePlaceholder: "🗿",
    details: {
      period: "8th–9th Century AD",
      builtBy: "Ancient Sculptors & Shaivite Masters",
      architecturalStyle: "Rock-Cut Bas-Relief Sculpture",
      highlights: [
        "Central 30-foot carving of Lord Shiva ('Unakotiswara Kal Bhairava')",
        "Depicts Ganga descending through Shiva's matted locks alongside Ganesha and Durga",
        "Set amid lush mountain waterfalls and forest valley trails"
      ],
      fullStory: "Unakoti, meaning 'one less than a crore' in Bengali, is an awe-inspiring archaeological wonder hidden within forested hills. Legend holds that Lord Shiva stayed here for a night with 99,99,999 deities en route to Kashi. The gigantic rock relief of Kal Bhairava, with its 10-foot head-dress, represents a peak of early medieval Indian rock art and is currently nominated for UNESCO World Heritage status."
    }
  },
  {
    id: "pilak-card",
    title: "Pilak Archaeological Site",
    location: "Jolakaibari, South Tripura",
    category: "Ancient Buddhist & Hindu Heritage",
    image: IMAGES.pilak,
    shortDesc: "An ancient 8th–12th century archaeological site revealing terraced stupas, terracotta plaques, and stone sculptures of Avalokiteshvara and Vishnu.",
    significance: "Demonstrates early peaceful co-existence of Buddhist and Hindu traditions along historical trade routes.",
    imagePlaceholder: "☸️",
    details: {
      period: "8th–12th Century AD",
      builtBy: "Early Regional Dynasties & Monastic Orders",
      architecturalStyle: "Buddhist Stupa & Terracotta Plaque Architecture",
      highlights: [
        "Massive stone idols of Lord Buddha, Avalokiteshvara, and Surya",
        "Excavated brick stupa mounds and decorative terracotta sealings",
        "Historical link between ancient Bengal, Arakan, and Southeast Asia"
      ],
      fullStory: "Spanning a cluster of green hillocks around Jolakaibari, Pilak is an archaeological treasure trove yielding Buddhist stupas, sandstone images of Avalokiteshvara, and Hindu deities dating from the 8th to 12th centuries. The site reveals that ancient Tripura was a major crossroads of international Buddhist learning and maritime trade connecting the Indian subcontinent with Myanmar and Southeast Asia."
    }
  }
];
