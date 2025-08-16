import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Leaf, Shield, Zap, Sun } from "lucide-react";
import { Plant } from "@/data/plants";

interface PlantCategoriesProps {
  plants: Plant[];
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const categories = [
  {
    id: "all",
    name: "All Plants",
    icon: Leaf,
    color: "bg-herb-primary",
    description: "View all medicinal plants"
  },
  {
    id: "respiratory",
    name: "Respiratory Health",
    icon: Wind,
    color: "bg-blue-500",
    description: "Plants for breathing and lung health",
    keywords: ["respiratory", "cough", "bronchitis", "breathing", "lung"]
  },
  {
    id: "digestive",
    name: "Digestive Support",
    icon: Heart,
    color: "bg-orange-500",
    description: "Plants for stomach and digestive wellness",
    keywords: ["digestive", "stomach", "nausea", "digestion", "gastric"]
  },
  {
    id: "cognitive",
    name: "Brain & Memory",
    icon: Brain,
    color: "bg-purple-500",
    description: "Plants for mental clarity and memory",
    keywords: ["memory", "cognitive", "brain", "mental", "clarity", "focus"]
  },
  {
    id: "immune",
    name: "Immune Support",
    icon: Shield,
    color: "bg-green-500",
    description: "Plants for immunity and protection",
    keywords: ["immune", "immunity", "protection", "defense", "infections"]
  },
  {
    id: "energy",
    name: "Energy & Vitality",
    icon: Zap,
    color: "bg-yellow-500",
    description: "Plants for energy and stamina",
    keywords: ["energy", "stamina", "vitality", "strength", "fatigue", "endurance"]
  },
  {
    id: "stress",
    name: "Stress & Anxiety",
    icon: Sun,
    color: "bg-indigo-500",
    description: "Plants for relaxation and stress relief",
    keywords: ["stress", "anxiety", "relaxation", "calm", "sleep", "mood"]
  }
];

// Import Wind icon separately to avoid issues
import { Wind } from "lucide-react";

export const PlantCategories = ({ plants, onCategorySelect, selectedCategory }: PlantCategoriesProps) => {
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return plants.length;
    
    const category = categories.find(cat => cat.id === categoryId);
    if (!category?.keywords) return 0;
    
    return plants.filter(plant => 
      plant.medicinalUses.some(use => 
        category.keywords!.some(keyword => 
          use.toLowerCase().includes(keyword.toLowerCase())
        )
      ) ||
      plant.description.toLowerCase().includes(category.keywords!.join('|'))
    ).length;
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-herb-primary mb-4">Browse by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const count = getCategoryCount(category.id);
          const isSelected = selectedCategory === category.id;
          
          return (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-herb-primary bg-herb-light' : 'hover:bg-herb-light/50'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-sm mb-1">{category.name}</h4>
                <Badge variant="secondary" className="text-xs">
                  {count} plants
                </Badge>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};