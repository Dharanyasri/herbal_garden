import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Minus } from "lucide-react";
import { Plant } from "@/data/plants";

interface PlantComparisonProps {
  plants: Plant[];
}

export const PlantComparison = ({ plants }: PlantComparisonProps) => {
  const [comparisonList, setComparisonList] = useState<Plant[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const addToComparison = (plant: Plant) => {
    if (comparisonList.length < 3 && !comparisonList.find(p => p.id === plant.id)) {
      setComparisonList([...comparisonList, plant]);
    }
  };

  const removeFromComparison = (plantId: string) => {
    setComparisonList(comparisonList.filter(p => p.id !== plantId));
  };

  const clearComparison = () => {
    setComparisonList([]);
    setShowComparison(false);
  };

  if (comparisonList.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showComparison ? (
        <Card className="bg-herb-primary text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {comparisonList.slice(0, 3).map((plant) => (
                  <div
                    key={plant.id}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-medium"
                  >
                    {plant.name.charAt(0)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">Compare Plants</p>
                <p className="text-xs opacity-80">{comparisonList.length} selected</p>
              </div>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setShowComparison(true)}
              >
                Compare
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={clearComparison}
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-[800px] max-h-[600px] overflow-auto shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Plant Comparison</CardTitle>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowComparison(false)}
              >
                Minimize
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={clearComparison}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonList.map((plant) => (
                <div key={plant.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-herb-primary">{plant.name}</h3>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromComparison(plant.id)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Scientific Name</p>
                      <p className="italic">{plant.scientificName}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-muted-foreground">Region</p>
                      <p>{plant.region}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-muted-foreground">AYUSH Systems</p>
                      <div className="flex flex-wrap gap-1">
                        {plant.ayushSystems.map((system) => (
                          <Badge key={system} variant="secondary" className="text-xs">
                            {system}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-muted-foreground">Main Uses</p>
                      <div className="space-y-1">
                        {plant.medicinalUses.slice(0, 3).map((use, index) => (
                          <p key={index} className="text-xs">• {use}</p>
                        ))}
                        {plant.medicinalUses.length > 3 && (
                          <p className="text-xs text-muted-foreground">
                            +{plant.medicinalUses.length - 3} more...
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-muted-foreground">Climate</p>
                      <p className="text-xs">{plant.growingConditions.climate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {comparisonList.length < 3 && (
              <div className="mt-4 p-4 bg-muted rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Add up to {3 - comparisonList.length} more plants to compare
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// Export function to add plants to comparison from other components
export const useComparison = () => {
  return {
    addToComparison: (plant: Plant) => {
      // This would be implemented with a context provider in a real app
      console.log('Add to comparison:', plant.name);
    }
  };
};