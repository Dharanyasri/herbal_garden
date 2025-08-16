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
  },
  {
    id: "ginger",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    commonNames: ["Adrak", "Shunti", "Common Ginger"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Aromatic rhizome renowned for its digestive and anti-inflammatory properties, widely used in cooking and medicine.",
    medicinalUses: [
      "Nausea and motion sickness",
      "Digestive disorders",
      "Anti-inflammatory",
      "Respiratory congestion",
      "Menstrual pain relief",
      "Immune system boost"
    ],
    parts: ["Rhizome", "Fresh root"],
    preparation: ["Fresh juice", "Dried powder", "Tea", "Oil extract"],
    precautions: ["May interact with blood thinners", "Avoid high doses during pregnancy", "Can cause heartburn"],
    image: "/api/placeholder/400/300",
    region: "Southeast Asia, India",
    growingConditions: {
      climate: "Warm, humid tropical climate",
      soil: "Rich, well-drained loamy soil",
      water: "Regular watering, good drainage"
    }
  },
  {
    id: "cardamom",
    name: "Cardamom",
    scientificName: "Elettaria cardamomum",
    commonNames: ["Elaichi", "Queen of Spices", "Green Cardamom"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Aromatic spice pod known as the 'Queen of Spices' for its distinctive flavor and digestive properties.",
    medicinalUses: [
      "Digestive health",
      "Bad breath treatment",
      "Respiratory conditions",
      "Blood pressure regulation",
      "Antioxidant properties",
      "Mood enhancement"
    ],
    parts: ["Seeds", "Pods"],
    preparation: ["Whole pods", "Ground seeds", "Tea", "Essential oil"],
    precautions: ["Generally safe", "May lower blood pressure", "Use in moderation"],
    image: "/api/placeholder/400/300",
    region: "Western Ghats, India",
    growingConditions: {
      climate: "Cool, humid mountain climate",
      soil: "Rich, well-drained forest soil",
      water: "High humidity, consistent moisture"
    }
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    scientificName: "Cinnamomum verum",
    commonNames: ["Dalchini", "True Cinnamon", "Ceylon Cinnamon"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Sweet and warming bark spice with powerful antioxidant and blood sugar regulating properties.",
    medicinalUses: [
      "Blood sugar regulation",
      "Digestive health",
      "Anti-inflammatory",
      "Antimicrobial properties",
      "Heart health",
      "Cognitive function"
    ],
    parts: ["Inner bark", "Leaves"],
    preparation: ["Bark powder", "Essential oil", "Tea", "Bark strips"],
    precautions: ["May interact with diabetes medications", "Avoid high doses", "Can cause liver issues in excess"],
    image: "/api/placeholder/400/300",
    region: "Sri Lanka, Southern India",
    growingConditions: {
      climate: "Tropical monsoon climate",
      soil: "Sandy loam, well-drained",
      water: "Regular rainfall, good drainage"
    }
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    scientificName: "Trigonella foenum-graecum",
    commonNames: ["Methi", "Greek Hay", "Bird's Foot"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Bitter-sweet herb with seeds used for digestive health and lactation support.",
    medicinalUses: [
      "Blood sugar control",
      "Lactation support",
      "Digestive health",
      "Cholesterol management",
      "Hair growth",
      "Appetite stimulation"
    ],
    parts: ["Seeds", "Leaves"],
    preparation: ["Seed powder", "Soaked seeds", "Leaf curry", "Sprouted seeds"],
    precautions: ["May cause hypoglycemia", "Avoid during pregnancy", "Can cause allergic reactions"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean, Middle East",
    growingConditions: {
      climate: "Cool, dry climate",
      soil: "Well-drained, fertile soil",
      water: "Moderate water requirements"
    }
  },
  {
    id: "licorice",
    name: "Licorice",
    scientificName: "Glycyrrhiza glabra",
    commonNames: ["Mulethi", "Sweet Root", "Yashtimadhu"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Sweet-tasting root with powerful anti-inflammatory and respiratory healing properties.",
    medicinalUses: [
      "Respiratory conditions",
      "Digestive ulcers",
      "Adrenal support",
      "Skin conditions",
      "Liver protection",
      "Hormonal balance"
    ],
    parts: ["Roots", "Rhizome"],
    preparation: ["Root powder", "Decoction", "Extract", "Chewing sticks"],
    precautions: ["May raise blood pressure", "Avoid long-term use", "Can affect potassium levels"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean, Central Asia",
    growingConditions: {
      climate: "Temperate to subtropical",
      soil: "Deep, sandy loam",
      water: "Moderate to low water needs"
    }
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    commonNames: ["Ghritkumari", "Miracle Plant", "Medicine Plant"],
    ayushSystems: ["Ayurveda", "Unani", "Siddha"],
    description: "Succulent plant with gel-filled leaves renowned for skin healing and digestive benefits.",
    medicinalUses: [
      "Skin healing and burns",
      "Digestive health",
      "Wound healing",
      "Anti-inflammatory",
      "Constipation relief",
      "Immune support"
    ],
    parts: ["Gel", "Latex", "Whole leaf"],
    preparation: ["Fresh gel", "Juice", "Dried extract", "Topical application"],
    precautions: ["Latex can be toxic", "May cause diarrhea", "Avoid during pregnancy"],
    image: "/api/placeholder/400/300",
    region: "Arabian Peninsula, Africa",
    growingConditions: {
      climate: "Arid to semi-arid",
      soil: "Sandy, well-drained soil",
      water: "Low water requirements"
    }
  },
  {
    id: "ginseng",
    name: "Ginseng",
    scientificName: "Panax ginseng",
    commonNames: ["Asian Ginseng", "Korean Ginseng", "True Ginseng"],
    ayushSystems: ["Ayurveda"],
    description: "Adaptogenic root highly valued for energy enhancement and cognitive support.",
    medicinalUses: [
      "Energy and stamina",
      "Cognitive enhancement",
      "Immune system boost",
      "Stress adaptation",
      "Blood sugar regulation",
      "Sexual health"
    ],
    parts: ["Roots"],
    preparation: ["Dried root", "Extract", "Tea", "Capsules"],
    precautions: ["May cause insomnia", "Can interact with blood thinners", "Avoid with high blood pressure"],
    image: "/api/placeholder/400/300",
    region: "Northeast Asia",
    growingConditions: {
      climate: "Cool temperate climate",
      soil: "Well-drained, humus-rich soil",
      water: "Moderate, consistent moisture"
    }
  },
  {
    id: "ginkgo",
    name: "Ginkgo",
    scientificName: "Ginkgo biloba",
    commonNames: ["Maidenhair Tree", "Living Fossil"],
    ayushSystems: ["Ayurveda"],
    description: "Ancient tree species with leaves used for cognitive enhancement and circulation improvement.",
    medicinalUses: [
      "Memory enhancement",
      "Circulation improvement",
      "Cognitive function",
      "Eye health",
      "Tinnitus relief",
      "Antioxidant properties"
    ],
    parts: ["Leaves"],
    preparation: ["Leaf extract", "Dried leaves", "Standardized extract", "Tea"],
    precautions: ["May increase bleeding risk", "Can cause headaches", "Avoid with seizure disorders"],
    image: "/api/placeholder/400/300",
    region: "China",
    growingConditions: {
      climate: "Temperate climate",
      soil: "Well-drained, adaptable",
      water: "Moderate water needs"
    }
  },
  {
    id: "echinacea",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    commonNames: ["Purple Coneflower", "American Coneflower"],
    ayushSystems: ["Ayurveda"],
    description: "Purple flowering herb renowned for immune system support and infection prevention.",
    medicinalUses: [
      "Immune system boost",
      "Cold and flu prevention",
      "Wound healing",
      "Anti-inflammatory",
      "Respiratory infections",
      "Skin conditions"
    ],
    parts: ["Roots", "Leaves", "Flowers"],
    preparation: ["Root extract", "Tea", "Tincture", "Capsules"],
    precautions: ["May cause allergic reactions", "Avoid with autoimmune conditions", "Can interact with immunosuppressants"],
    image: "/api/placeholder/400/300",
    region: "North America",
    growingConditions: {
      climate: "Temperate climate",
      soil: "Well-drained, sandy soil",
      water: "Drought tolerant, moderate water"
    }
  },
  {
    id: "lavender",
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    commonNames: ["English Lavender", "True Lavender"],
    ayushSystems: ["Ayurveda"],
    description: "Aromatic purple flowering herb famous for its calming and relaxing properties.",
    medicinalUses: [
      "Anxiety and stress relief",
      "Sleep improvement",
      "Skin healing",
      "Headache relief",
      "Antimicrobial properties",
      "Digestive comfort"
    ],
    parts: ["Flowers", "Essential oil"],
    preparation: ["Essential oil", "Dried flowers", "Tea", "Aromatherapy"],
    precautions: ["Generally safe", "May cause skin irritation", "Avoid ingesting large amounts"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean",
    growingConditions: {
      climate: "Mediterranean climate",
      soil: "Well-drained, alkaline soil",
      water: "Low to moderate water needs"
    }
  },
  {
    id: "chamomile",
    name: "Chamomile",
    scientificName: "Matricaria chamomilla",
    commonNames: ["German Chamomile", "Wild Chamomile"],
    ayushSystems: ["Ayurveda"],
    description: "Gentle flowering herb with daisy-like flowers, renowned for its calming and digestive properties.",
    medicinalUses: [
      "Sleep and relaxation",
      "Digestive disorders",
      "Skin inflammation",
      "Anxiety relief",
      "Menstrual pain",
      "Eye irritation"
    ],
    parts: ["Flowers"],
    preparation: ["Tea", "Essential oil", "Dried flowers", "Topical preparations"],
    precautions: ["May cause allergic reactions", "Avoid with ragweed allergy", "Generally very safe"],
    image: "/api/placeholder/400/300",
    region: "Europe, Asia",
    growingConditions: {
      climate: "Temperate climate",
      soil: "Well-drained, light soil",
      water: "Moderate water requirements"
    }
  },
  {
    id: "peppermint",
    name: "Peppermint",
    scientificName: "Mentha piperita",
    commonNames: ["Pudina", "English Mint"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Refreshing aromatic herb with cooling properties, excellent for digestive and respiratory health.",
    medicinalUses: [
      "Digestive disorders",
      "IBS symptoms",
      "Respiratory congestion",
      "Headache relief",
      "Nausea",
      "Muscle pain"
    ],
    parts: ["Leaves", "Essential oil"],
    preparation: ["Fresh leaves", "Tea", "Essential oil", "Dried leaves"],
    precautions: ["May worsen GERD", "Can interfere with iron absorption", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Europe, North America",
    growingConditions: {
      climate: "Temperate climate",
      soil: "Moist, well-drained soil",
      water: "High water requirements"
    }
  },
  {
    id: "holy-basil",
    name: "Holy Basil",
    scientificName: "Ocimum sanctum",
    commonNames: ["Krishna Tulsi", "Sacred Basil", "Tulsi"],
    ayushSystems: ["Ayurveda"],
    description: "Sacred variety of basil with darker leaves, revered for its adaptogenic and spiritual properties.",
    medicinalUses: [
      "Stress adaptation",
      "Respiratory health",
      "Blood sugar regulation",
      "Immune support",
      "Liver protection",
      "Mental clarity"
    ],
    parts: ["Leaves", "Seeds", "Whole plant"],
    preparation: ["Fresh leaves", "Tea", "Extract", "Essential oil"],
    precautions: ["May lower blood sugar", "Can interact with medications", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Indian subcontinent",
    growingConditions: {
      climate: "Tropical and subtropical",
      soil: "Well-drained, fertile soil",
      water: "Moderate watering"
    }
  },
  {
    id: "fennel",
    name: "Fennel",
    scientificName: "Foeniculum vulgare",
    commonNames: ["Saunf", "Sweet Fennel", "Florence Fennel"],
    ayushSystems: ["Ayurveda", "Unani"],
    description: "Aromatic herb with licorice-like flavor, excellent for digestive health and women's wellness.",
    medicinalUses: [
      "Digestive disorders",
      "Lactation support",
      "Menstrual irregularities",
      "Eye health",
      "Respiratory conditions",
      "Colic in infants"
    ],
    parts: ["Seeds", "Leaves", "Bulb"],
    preparation: ["Seed tea", "Fresh bulb", "Essential oil", "Chewing seeds"],
    precautions: ["May interact with blood thinners", "Estrogenic effects", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean",
    growingConditions: {
      climate: "Mediterranean to temperate",
      soil: "Well-drained, fertile soil",
      water: "Moderate water requirements"
    }
  },
  {
    id: "rosemary",
    name: "Rosemary",
    scientificName: "Rosmarinus officinalis",
    commonNames: ["Dew of the Sea", "Garden Rosemary"],
    ayushSystems: ["Ayurveda"],
    description: "Fragrant evergreen herb with needle-like leaves, renowned for memory enhancement and circulation.",
    medicinalUses: [
      "Memory enhancement",
      "Circulation improvement",
      "Hair growth",
      "Antioxidant properties",
      "Digestive health",
      "Mental fatigue"
    ],
    parts: ["Leaves", "Essential oil"],
    preparation: ["Fresh leaves", "Essential oil", "Tea", "Dried herb"],
    precautions: ["May interact with blood thinners", "Can cause allergic reactions", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean",
    growingConditions: {
      climate: "Mediterranean climate",
      soil: "Well-drained, sandy soil",
      water: "Low water requirements"
    }
  },
  {
    id: "oregano",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    commonNames: ["Wild Marjoram", "Mountain Mint"],
    ayushSystems: ["Ayurveda"],
    description: "Aromatic culinary herb with powerful antimicrobial and antioxidant properties.",
    medicinalUses: [
      "Antimicrobial properties",
      "Respiratory infections",
      "Digestive health",
      "Antioxidant support",
      "Skin conditions",
      "Immune system boost"
    ],
    parts: ["Leaves", "Essential oil"],
    preparation: ["Fresh leaves", "Essential oil", "Tea", "Dried herb"],
    precautions: ["May interact with blood thinners", "Can cause stomach upset", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean, Europe",
    growingConditions: {
      climate: "Mediterranean to temperate",
      soil: "Well-drained, alkaline soil",
      water: "Low to moderate water needs"
    }
  },
  {
    id: "thyme",
    name: "Thyme",
    scientificName: "Thymus vulgaris",
    commonNames: ["Garden Thyme", "Common Thyme"],
    ayushSystems: ["Ayurveda"],
    description: "Small aromatic herb with tiny leaves, excellent for respiratory health and antimicrobial action.",
    medicinalUses: [
      "Respiratory infections",
      "Cough and bronchitis",
      "Antimicrobial action",
      "Digestive health",
      "Skin infections",
      "Immune support"
    ],
    parts: ["Leaves", "Essential oil"],
    preparation: ["Fresh leaves", "Essential oil", "Tea", "Dried herb"],
    precautions: ["May interact with blood thinners", "Can cause allergic reactions", "Generally safe"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean",
    growingConditions: {
      climate: "Mediterranean climate",
      soil: "Well-drained, sandy soil",
      water: "Low water requirements"
    }
  },
  {
    id: "sage",
    name: "Sage",
    scientificName: "Salvia officinalis",
    commonNames: ["Garden Sage", "Common Sage"],
    ayushSystems: ["Ayurveda"],
    description: "Silvery-green aromatic herb with traditional uses for memory, wisdom, and women's health.",
    medicinalUses: [
      "Memory enhancement",
      "Menopausal symptoms",
      "Digestive health",
      "Antimicrobial properties",
      "Throat infections",
      "Excessive sweating"
    ],
    parts: ["Leaves"],
    preparation: ["Fresh leaves", "Tea", "Essential oil", "Dried herb"],
    precautions: ["May interact with diabetes medications", "Avoid during pregnancy", "Generally safe in culinary amounts"],
    image: "/api/placeholder/400/300",
    region: "Mediterranean",
    growingConditions: {
      climate: "Mediterranean climate",
      soil: "Well-drained, sandy soil",
      water: "Low water requirements"
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