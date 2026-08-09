// 15 Verified Educational Questions for the Tripura State Fair Interactive Quiz

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the capital city of the state of Tripura?",
    options: ["Udaipur", "Agartala", "Kailashahar", "Dharmanagar"],
    correctAnswer: 1,
    explanation: "Agartala is the capital and administrative hub of Tripura, famous for Ujjayanta Palace and royal heritage gardens."
  },
  {
    id: 2,
    question: "Which iconic royal palace is situated right in the center of Rudrasagar Lake?",
    options: ["Ujjayanta Palace", "Neermahal Palace", "Kunjaban Palace", "Malancha Nivas"],
    correctAnswer: 1,
    explanation: "Neermahal ('Water Palace') in Rudrasagar Lake is Northeast India's only lake palace, commissioned in 1930 by Maharaja Bir Bikram Kishore Manikya."
  },
  {
    id: 3,
    question: "In which year did Tripura attain full statehood as the 21st state of India?",
    options: ["1947", "1949", "1972", "1987"],
    correctAnswer: 2,
    explanation: "Tripura attained full statehood on 21 January 1972 under the North-Eastern Areas (Reorganisation) Act 1971."
  },
  {
    id: 4,
    question: "Which 500-year-old sacred temple in Udaipur is recognized as one of the 51 Shakti Peethas?",
    options: ["Fourteen Gods Temple", "Tripura Sundari Temple (Matabari)", "Bhubaneswari Temple", "Kasba Kali Temple"],
    correctAnswer: 1,
    explanation: "Tripura Sundari Temple (popularly called Matabari) was constructed in 1501 AD by Maharaja Dhanya Manikya on a tortoise-shaped hillock."
  },
  {
    id: 5,
    question: "Which native Sino-Tibetan language of the indigenous Tipra community is an official state language of Tripura?",
    options: ["Kokborok", "Assamese", "Manipuri", "Khasi"],
    correctAnswer: 0,
    explanation: "Kokborok is the ancestral language of the Tipra people, officially recognized alongside Bengali and English."
  },
  {
    id: 6,
    question: "What is the official State Animal of Tripura?",
    options: ["Indian Elephant", "Clouded Leopard", "Phayre's Leaf Monkey", "Indian Gaur"],
    correctAnswer: 2,
    explanation: "Phayre's Leaf Monkey, distinguished by its white spectacle eye rings, is the official State Animal of Tripura."
  },
  {
    id: 7,
    question: "Which colossal archaeological site in Kailashahar features 8th–9th century rock-cut bas-relief carvings of Lord Shiva?",
    options: ["Pilak", "Unakoti", "Boxanagar", "Devtamura"],
    correctAnswer: 1,
    explanation: "Unakoti, meaning 'one less than a crore', is famous for its 30-foot central rock relief of Lord Shiva Kal Bhairava."
  },
  {
    id: 8,
    question: "How many emerald green islands dot the 41 sq km expanse of Dumboor Lake?",
    options: ["12", "24", "48", "60"],
    correctAnswer: 2,
    explanation: "Dumboor Lake features 48 green islands and serves as the origin point of the Gomati River."
  },
  {
    id: 9,
    question: "Which famous Nobel laureate author visited Tripura seven times as an honored guest of the Manikya kings?",
    options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Bankim Chandra Chattopadhyay", "Sarojini Naidu"],
    correctAnswer: 0,
    explanation: "Rabindranath Tagore shared a deep friendship with the Manikya monarchs and named Ujjayanta Palace during his visits."
  },
  {
    id: 10,
    question: "What is the official State Fruit of Tripura, awarded a Geographical Indication (GI) tag?",
    options: ["Khasia Mandarin", "Queen Pineapple", "Tripura Mango", "Wild Jackfruit"],
    correctAnswer: 1,
    explanation: "The Queen Pineapple is famous for its intense sweetness and pleasant aroma, serving as Tripura's official GI-tagged state fruit."
  },
  {
    id: 11,
    question: "Which famous acrobatic folk dance of the Reang (Bru) community is performed while balancing on earthen pitchers?",
    options: ["Garia Dance", "Hojagiri Dance", "Lebang Dance", "Bizhu Dance"],
    correctAnswer: 1,
    explanation: "Hojagiri is the celebrated folk dance of the Reang community, featuring impressive physical balance atop earthen pitchers."
  },
  {
    id: 12,
    question: "What percentage of Tripura's total geographic area is covered by lush tropical forests?",
    options: ["Over 20%", "Over 40%", "Over 60%", "Over 90%"],
    correctAnswer: 2,
    explanation: "Over 60% of Tripura's total land area (6,294 sq km) is covered by dense evergreen and deciduous forests."
  },
  {
    id: 13,
    question: "Which ancient landmark 7-day royal festival in Old Agartala involves the cleansing of fourteen chief deities?",
    options: ["Garia Puja", "Kharchi Puja", "Ker Puja", "Pous Sankranti"],
    correctAnswer: 1,
    explanation: "Kharchi Puja is celebrated at the Fourteen Gods Temple in Old Agartala to purify the earth and bless citizens."
  },
  {
    id: 14,
    question: "What is the name of the traditional, oil-free alkaline Tripuri stew prepared with tender bamboo shoots and green papaya?",
    options: ["Chakhwi", "Mosdeng", "Gudok", "Mui Borok"],
    correctAnswer: 0,
    explanation: "Chakhwi is a traditional oil-free stew prepared using tender bamboo shoots ('Muya'), green papaya, and natural plant ash alkali ('Khar')."
  },
  {
    id: 15,
    question: "Which wildlife sanctuary in South Tripura is the primary reserve for the endangered Indian Gaur (wild bison)?",
    options: ["Sepahijala Wildlife Sanctuary", "Trishna Wildlife Sanctuary", "Rowa Wildlife Sanctuary", "Gumti Wildlife Sanctuary"],
    correctAnswer: 1,
    explanation: "Trishna Wildlife Sanctuary covers 163 sq km of primary forest and serves as the main habitat for the Indian Gaur in Northeast India."
  }
];

export const getResultBadge = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage >= 85) {
    return {
      title: "Excellent!",
      subtitle: "Master of Tripura Heritage & Geography",
      badgeClass: "badge-excellent",
      icon: "🏆",
      message: "Outstanding job! You demonstrated exemplary knowledge of Tripura's royal history, landmarks, nature reserves, and culture."
    };
  } else if (percentage >= 65) {
    return {
      title: "Very Good!",
      subtitle: "Tripura Explorer",
      badgeClass: "badge-very-good",
      icon: "🌟",
      message: "Great performance! You have a solid grasp of Tripura's history, food traditions, and architectural marvels."
    };
  } else if (percentage >= 40) {
    return {
      title: "Good!",
      subtitle: "Promising Scholar",
      badgeClass: "badge-good",
      icon: "👍",
      message: "Good effort! You know several key facts about Tripura state. Review our exhibition sections to boost your score!"
    };
  } else {
    return {
      title: "Keep Exploring!",
      subtitle: "Future Historian",
      badgeClass: "badge-exploring",
      icon: "📚",
      message: "Don't worry! Explore our Discover, Heritage, and Nature sections to learn fascinating details about Tripura and try again."
    };
  }
};
