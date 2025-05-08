
// Mock pest data for demonstration purposes

export interface Pest {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  description: string;
  harmful: boolean;
  host_plants: string[];
  life_cycle: string;
  symptoms: string[];
  management: string[];
  image_url?: string;
}

export interface AnalysisResult {
  pest: Pest;
  confidence: number;
  timestamp: string;
  harmful: boolean;
  recommended_pesticides: string[];
}

export const pests: Pest[] = [
  {
    id: "p001",
    name: "Rice Stem Borer",
    scientificName: "Scirpophaga incertulas",
    category: "Lepidoptera",
    description: "The rice stem borer is a moth pest whose larvae bore into rice stems, causing 'deadhearts' (dead central shoots) during the vegetative stage and 'whiteheads' (empty panicles) during the reproductive stage.",
    harmful: true,
    host_plants: ["Rice", "Wheat", "Maize", "Sugarcane"],
    life_cycle: "Egg - Larva - Pupa - Adult (complete metamorphosis)",
    symptoms: [
      "Deadhearts (withering of central shoots)",
      "Whiteheads (empty whitish panicles)",
      "Holes in stems",
      "Stunted growth"
    ],
    management: [
      "Early planting and harvesting",
      "Removal of stubble after harvest",
      "Use of resistant varieties",
      "Biological control with parasitoids",
      "Chemical control with approved pesticides"
    ],
    image_url: "/lovable-uploads/cec63412-7f03-4bb7-8e4e-89906029a99a.png"
  },
  {
    id: "p002",
    name: "Brown Planthopper",
    scientificName: "Nilaparvata lugens",
    category: "Hemiptera",
    description: "The brown planthopper is a major rice pest that sucks the sap from the rice plant, leading to yellowing of leaves and wilting, a condition known as 'hopper burn'.",
    harmful: true,
    host_plants: ["Rice"],
    life_cycle: "Egg - Nymph - Adult (incomplete metamorphosis)",
    symptoms: [
      "Hopper burn (complete drying of plants)",
      "Stunting",
      "Reduced tillering",
      "Honeydew secretion and sooty mold growth"
    ],
    management: [
      "Use of resistant varieties",
      "Balanced fertilizer application",
      "Alternate wetting and drying",
      "Conservation of natural enemies",
      "Judicious use of insecticides"
    ]
  },
  {
    id: "p003",
    name: "Aphid",
    scientificName: "Various species",
    category: "Hemiptera",
    description: "Aphids are small sap-sucking insects that can cause damage by feeding on plant sap and transmitting plant viruses. They often form large colonies on new growth and can produce honeydew that leads to sooty mold.",
    harmful: true,
    host_plants: ["Various crops", "Vegetables", "Fruits", "Ornamentals"],
    life_cycle: "Egg - Nymph - Adult (incomplete metamorphosis)",
    symptoms: [
      "Curling or yellowing of leaves",
      "Stunted growth",
      "Honeydew and sooty mold",
      "Virus transmission"
    ],
    management: [
      "Biological control with predators and parasitoids",
      "Insecticidal soaps",
      "Neem-based products",
      "Chemical control as a last resort"
    ]
  },
  {
    id: "p004",
    name: "Lady Beetle",
    scientificName: "Coccinella septempunctata",
    category: "Coleoptera",
    description: "Lady beetles are beneficial insects that feed on aphids, scale insects, and other soft-bodied pests. They are important natural enemies in agriculture.",
    harmful: false,
    host_plants: ["Various crops", "Gardens"],
    life_cycle: "Egg - Larva - Pupa - Adult (complete metamorphosis)",
    symptoms: [
      "No damage to plants",
      "Reduction in pest populations"
    ],
    management: [
      "Conservation by avoiding unnecessary pesticide use",
      "Provision of habitat and food sources"
    ]
  },
  {
    id: "p005",
    name: "Fall Armyworm",
    scientificName: "Spodoptera frugiperda",
    category: "Lepidoptera",
    description: "The fall armyworm is an invasive pest that can cause significant damage to crops. The larvae feed on leaves, stems, and reproductive parts of more than 80 plant species.",
    harmful: true,
    host_plants: ["Maize", "Rice", "Sorghum", "Cotton", "Vegetables"],
    life_cycle: "Egg - Larva - Pupa - Adult (complete metamorphosis)",
    symptoms: [
      "Skeletonized leaves",
      "Whorl damage with frass",
      "Ear damage in maize",
      "Window paning of leaves"
    ],
    management: [
      "Early planting",
      "Crop rotation",
      "Use of resistant varieties",
      "Biological control",
      "Selective pesticides when necessary"
    ]
  }
];

// Mock analysis history
export const mockAnalysisHistory: AnalysisResult[] = [
  {
    pest: pests[0],
    confidence: 94.7,
    timestamp: "2025-05-01T10:23:45Z",
    harmful: true,
    recommended_pesticides: ["Chlorantraniliprole", "Fipronil", "Cartap hydrochloride"]
  },
  {
    pest: pests[2],
    confidence: 87.3,
    timestamp: "2025-04-28T15:12:30Z",
    harmful: true,
    recommended_pesticides: ["Imidacloprid", "Thiamethoxam", "Acetamiprid"]
  },
  {
    pest: pests[3],
    confidence: 92.1,
    timestamp: "2025-04-26T09:45:22Z",
    harmful: false,
    recommended_pesticides: []
  },
  {
    pest: pests[4],
    confidence: 89.5,
    timestamp: "2025-04-22T11:34:19Z",
    harmful: true,
    recommended_pesticides: ["Spinetoram", "Emamectin benzoate", "Chlorantraniliprole"]
  }
];
