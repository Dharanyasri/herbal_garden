import { Plant } from "@/data/plants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, MapPin } from "lucide-react";

interface PlantCardProps {
  plant: Plant;
  onClick: () => void;
}

export const PlantCard = ({ plant, onClick }: PlantCardProps) => {
  return (
    <Card 
      className="herb-card cursor-pointer group overflow-hidden h-full"
      onClick={onClick}
    >
      <div className="aspect-video bg-herb-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-botanical opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Leaf className="w-16 h-16 text-herb-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-herb-primary/10 text-herb-primary border-herb-primary/20">
            <MapPin className="w-3 h-3 mr-1" />
            {plant.region}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold text-herb-primary group-hover:text-herb-secondary transition-colors">
            {plant.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground italic">
            {plant.scientificName}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {plant.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-medium text-herb-secondary mb-2">AYUSH Systems</h4>
            <div className="flex flex-wrap gap-1">
              {plant.ayushSystems.slice(0, 2).map((system) => (
                <Badge key={system} variant="outline" className="text-xs border-herb-primary/30 text-herb-primary">
                  {system}
                </Badge>
              ))}
              {plant.ayushSystems.length > 2 && (
                <Badge variant="outline" className="text-xs border-herb-primary/30 text-herb-primary">
                  +{plant.ayushSystems.length - 2}
                </Badge>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-herb-secondary mb-2">Primary Uses</h4>
            <div className="text-xs text-muted-foreground">
              {plant.medicinalUses.slice(0, 3).join(", ")}
              {plant.medicinalUses.length > 3 && "..."}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};