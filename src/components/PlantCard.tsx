import { useState, useEffect } from "react";
import { Plant } from "@/data/plants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Leaf, Heart, Plus } from "lucide-react";

interface PlantCardProps {
  plant: Plant;
  onClick: () => void;
  onAddToComparison?: (plant: Plant) => void;
}

export const PlantCard = ({ plant, onClick, onAddToComparison }: PlantCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('plant-favorites') || '[]');
    setIsFavorite(favorites.includes(plant.id));
  }, [plant.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('plant-favorites') || '[]');
    const newFavorites = isFavorite 
      ? favorites.filter((id: string) => id !== plant.id)
      : [...favorites, plant.id];
    
    localStorage.setItem('plant-favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleAddToComparison = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToComparison?.(plant);
  };

  return (
    <Card className="herb-card cursor-pointer overflow-hidden group relative" onClick={onClick}>
      {/* Action Buttons */}
      <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant={isFavorite ? "default" : "secondary"}
          className={`h-8 w-8 p-0 ${isFavorite ? 'bg-red-500 hover:bg-red-600' : ''}`}
          onClick={toggleFavorite}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current text-white' : ''}`} />
        </Button>
        {onAddToComparison && (
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0"
            onClick={handleAddToComparison}
          >
            <Plus className="w-4 h-4" />
          </Button>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
          {plant.image ? (
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-botanical flex items-center justify-center">
              <Leaf className="w-16 h-16 text-herb-primary opacity-50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs flex items-center gap-1 bg-white/80 backdrop-blur-sm">
            <MapPin className="w-3 h-3" />
            {plant.region}
          </Badge>
        </div>
        
        <CardTitle className="text-xl text-herb-primary group-hover:text-herb-secondary transition-colors">
          {plant.name}
        </CardTitle>
        <p className="text-sm italic text-muted-foreground">{plant.scientificName}</p>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-foreground mb-4 line-clamp-3">
          {plant.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-2">AYUSH Systems</h4>
            <div className="flex flex-wrap gap-1">
              {plant.ayushSystems.map((system) => (
                <Badge key={system} variant="secondary" className="text-xs">
                  {system}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-2">Key Benefits</h4>
            <div className="space-y-1">
              {plant.medicinalUses.slice(0, 3).map((use, index) => (
                <p key={index} className="text-xs text-muted-foreground">• {use}</p>
              ))}
              {plant.medicinalUses.length > 3 && (
                <p className="text-xs text-herb-primary">+{plant.medicinalUses.length - 3} more benefits</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};