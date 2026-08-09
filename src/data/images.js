// Centralized Image Asset Directory for Tripura State Fair
// Maps every landmark, heritage site, nature reserve, cultural topic, and dish to real local files in public/images/

export const IMAGES = {
  // HERITAGE DESTINATIONS
  neermahal: "/images/neermahal.jpg",
  ujjayantaPalace: "/images/ujjayanta-palace.jpg",
  tripuraSundariTemple: "/images/tripura-sundari-temple.jpg",
  unakoti: "/images/unakoti.jpg",
  pilak: "/images/pilak.jpg",

  // NATURE & WILDLIFE DESTINATIONS
  jampuiHills: "/images/jampuri-hills.jpg",
  rudrasagarLake: "/images/rudrasagar.jpg",
  dumboorLake: "/images/dumboor-lake.jpg",
  sepahijalaSanctuary: "/images/sepahijala.jpg",
  trishnaSanctuary: "/images/trishna.jpg",
  phayresMonkey: "/images/sepahijala.jpg",
  cloudedLeopard: "/images/sepahijala.jpg",
  indianGaur: "/images/trishna.jpg",
  greenPigeon: "/images/jampuri-hills.jpg",

  // CULTURE & TRADITIONS
  kokborok: "/images/kokborok-1.jpg",
  indigenousCommunities: "/images/culture.jpg",
  traditionalClothing: "/images/handwoven-traditional-cloth-of-Tripura.jpg",
  bambooCaneCrafts: "/images/bamboo-craft.jpg",
  handloom: "/images/handloom.jpg",
  traditionalArt: "/images/bamboo-hanging.jpg",
  music: "/images/music.jpg",
  dance: "/images/dance.jpg",

  // FESTIVALS
  kharchiPuja: "/images/kharchi-puja.jpg",
  gariaPuja: "/images/GariaPujaFestivalBabaGaria.jpg",
  kerPuja: "/images/Ker-Puja.jpg",
  durgaPuja: "/images/durga-puja.jpg",
  generalFestival: "/images/festival.jpg",

  // DISHES & FOOD
  muiBorok: "/images/Mui Borok.jpg",
  chakhwi: "/images/Chakhwi.jpg",
  gudok: "/images/Gudok.jpg",
  mosdengSerma: "/images/Mosdeng Serma.jpg",
  muyaAwandru: "/images/Muya Awandru.jpg",
  kosoiBwtwi: "/images/Kosoi Bwtwi.jpg",
  panchPhoronTarkari: "/images/Panch Phoron Tarkari.jpg",
  generalFood: "/images/food.jpg",

  // VECTOR MAP
  tripuraMap: "/images/Tripura_Map.svg"
};

// Safe Image Fallback Resolver
export function getLocalImagePath(key, defaultFallback = "/images/culture.jpg") {
  return IMAGES[key] || defaultFallback;
}
