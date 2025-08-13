export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  commonNames: string[];
  ayushSystems: string[];
  description: string;
  medicinalUses: string[];
  parts: string[];
  preparation: string[];
  precautions: string[];
  image: string;
  region: string;
  growingConditions: {
    climate: string;
    soil: string;
    water: string;
  };
}

export const plants: Plant[] = [
  {
    id: "tulsi",
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    commonNames: ["Holy Basil", "Sacred Basil", "Tulasi"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Sacred plant in Hinduism, known as the 'Queen of Herbs' for its powerful medicinal properties and spiritual significance.",
    medicinalUses: [
      "Respiratory disorders",
      "Stress and anxiety",
      "Immune system support",
      "Digestive issues",
      "Skin conditions",
      "Fever reduction"
    ],
    parts: ["Leaves", "Seeds", "Roots"],
    preparation: ["Fresh juice", "Dried powder", "Tea/Decoction", "Essential oil"],
    precautions: ["May lower blood sugar", "Avoid during pregnancy", "Can interact with blood thinners"],
    image: "/api/placeholder/400/300",
    region: "Indian subcontinent",
    growingConditions: {
      climate: "Tropical and subtropical",
      soil: "Well-drained, fertile soil",
      water: "Moderate watering"
    }
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    commonNames: ["Indian Winter Cherry", "Poison Gooseberry", "Asgandh"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Adaptogenic herb known for its stress-reducing properties and ability to enhance physical and mental strength.",
    medicinalUses: [
      "Stress and anxiety relief",
      "Improves stamina and strength",
      "Sleep disorders",
      "Arthritis and joint pain",
      "Immune system boost",
      "Cognitive function enhancement"
    ],
    parts: ["Roots", "Leaves", "Berries"],
    preparation: ["Root powder", "Capsules", "Milk decoction", "Herbal tea"],
    precautions: ["Avoid during pregnancy", "May interact with thyroid medications", "Can cause drowsiness"],
    image: "/api/placeholder/400/300",
    region: "India, Middle East, Africa",
    growingConditions: {
      climate: "Dry subtropical regions",
      soil: "Sandy, well-drained soil",
      water: "Low to moderate water requirements"
    }
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    commonNames: ["Haldi", "Indian Saffron", "Golden Spice"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Golden-colored rhizome renowned for its anti-inflammatory and antioxidant properties, widely used in cooking and medicine.",
    medicinalUses: [
      "Anti-inflammatory",
      "Wound healing",
      "Digestive health",
      "Liver protection",
      "Skin conditions",
      "Joint pain relief"
    ],
    parts: ["Rhizome"],
    preparation: ["Fresh paste", "Dried powder", "Milk decoction", "Oil extract"],
    precautions: ["May increase bleeding risk", "Can worsen gallstones", "Avoid high doses during pregnancy"],
    image: "/api/placeholder/400/300",
    region: "Southeast Asia",
    growingConditions: {
      climate: "Warm, humid tropical climate",
      soil: "Rich, well-drained loamy soil",
      water: "High water requirements"
    }
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    commonNames: ["Indian Lilac", "Margosa Tree", "Nimba"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Versatile medicinal tree known as 'Village Pharmacy' for its wide range of therapeutic applications.",
    medicinalUses: [
      "Skin disorders",
      "Antibacterial and antifungal",
      "Dental health",
      "Blood purification",
      "Diabetes management",
      "Immune system support"
    ],
    parts: ["Leaves", "Bark", "Seeds", "Oil"],
    preparation: ["Leaf paste", "Neem oil", "Bark decoction", "Leaf powder"],
    precautions: ["Can be toxic in large doses", "Avoid during pregnancy", "May lower fertility"],
    image: "/api/placeholder/400/300",
    region: "Indian subcontinent",
    growingConditions: {
      climate: "Tropical and semi-arid regions",
      soil: "Various soil types, drought tolerant",
      water: "Low water requirements"
    }
  },
  {
    id: "brahmi",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    commonNames: ["Water Hyssop", "Herb of Grace", "Indian Pennywort"],
    ayushSystems: ["Ayurveda"],
    description: "Brain tonic herb highly valued for enhancing memory, cognitive function, and mental clarity.",
    medicinalUses: [
      "Memory enhancement",
      "Cognitive function improvement",
      "Anxiety reduction",
      "Epilepsy management",
      "ADHD support",
      "Stress relief"
    ],
    parts: ["Whole plant", "Leaves"],
    preparation: ["Fresh juice", "Dried powder", "Capsules", "Herbal tea"],
    precautions: ["May cause digestive upset", "Can interact with thyroid medications", "Use under guidance"],
    image: "/api/placeholder/400/300",
    region: "Wetlands of India, Australia, Europe",
    growingConditions: {
      climate: "Tropical and subtropical wetlands",
      soil: "Moist, muddy soil",
      water: "High water requirements, aquatic plant"
    }
  },
  {
    id: "amla",
    name: "Amla",
    scientificName: "Phyllanthus emblica",
    commonNames: ["Indian Gooseberry", "Amalaki", "Emblic"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Vitamin C-rich fruit considered one of the most potent rejuvenative herbs in Ayurveda.",
    medicinalUses: [
      "High vitamin C content",
      "Hair and skin health",
      "Digestive health",
      "Liver function support",
      "Cholesterol management",
      "Anti-aging properties"
    ],
    parts: ["Fruit", "Seeds", "Leaves"],
    preparation: ["Fresh juice", "Dried powder", "Pickles", "Oil infusion"],
    precautions: ["May cause acidity in some people", "Can interact with blood thinners", "Excessive use may cause diarrhea"],
    image: "/api/placeholder/400/300",
    region: "Indian subcontinent, Southeast Asia",
    growingConditions: {
      climate: "Tropical and subtropical",
      soil: "Well-drained, sandy loam",
      water: "Moderate water requirements"
    }
  }
];

export const ayushSystems = [
  "All Systems",
  "Ayurveda",
  "Yoga & Naturopathy", 
  "Unani",
  "Siddha",
  "Homeopathy"
];