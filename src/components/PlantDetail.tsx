import { useState } from "react";
import { Plant } from "@/data/plants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plant3D } from "@/components/Plant3D";
import { 
  Leaf, 
  MapPin, 
  Heart, 
  AlertTriangle, 
  Droplets, 
  Sun, 
  Mountain,
  ArrowLeft,
  Box,
  Image as ImageIcon
} from "lucide-react";

interface PlantDetailProps {
  plant: Plant;
  onBack: () => void;
}

export const PlantDetail = ({ plant, onBack }: PlantDetailProps) => {
  const [activeView, setActiveView] = useState<"image" | "3d">("3d");
  return (
    <div className="animate-fade-in">
      <Button 
        onClick={onBack}
        variant="outline" 
        className="mb-6 border-herb-primary/30 text-herb-primary hover:bg-herb-light"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Garden
      </Button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Plant Visualization and Basic Info */}
        <div className="lg:col-span-1">
          <Card className="herb-card">
            {/* View Toggle */}
            <div className="p-4 pb-0">
              <Tabs value={activeView} onValueChange={(value) => setActiveView(value as "image" | "3d")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="3d" className="flex items-center gap-2">
                    <Box className="w-4 h-4" />
                    3D View
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Traditional
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="3d" className="mt-4">
                  <Plant3D plant={plant} />
                </TabsContent>
                
                <TabsContent value="image" className="mt-4">
                  <div className="aspect-square bg-herb-light relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-botanical opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="w-24 h-24 text-herb-primary floating-animation" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl text-herb-primary">{plant.name}</CardTitle>
              <p className="text-lg text-muted-foreground italic">{plant.scientificName}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                {plant.region}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-herb-secondary mb-2">Common Names</h4>
                  <div className="flex flex-wrap gap-1">
                    {plant.commonNames.map((name) => (
                      <Badge key={name} variant="secondary" className="text-xs">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-herb-secondary mb-2">AYUSH Systems</h4>
                  <div className="flex flex-wrap gap-1">
                    {plant.ayushSystems.map((system) => (
                      <Badge key={system} className="bg-herb-primary text-primary-foreground">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card className="herb-card">
            <CardHeader>
              <CardTitle className="text-herb-primary">About This Plant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{plant.description}</p>
            </CardContent>
          </Card>

          {/* Medicinal Uses */}
          <Card className="herb-card">
            <CardHeader>
              <CardTitle className="flex items-center text-herb-primary">
                <Heart className="w-5 h-5 mr-2" />
                Medicinal Uses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-2">
                {plant.medicinalUses.map((use) => (
                  <div key={use} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-herb-primary rounded-full mr-3 flex-shrink-0" />
                    {use}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Parts Used and Preparation */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="herb-card">
              <CardHeader>
                <CardTitle className="text-herb-primary">Parts Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {plant.parts.map((part) => (
                    <Badge key={part} variant="outline" className="border-herb-primary/30 text-herb-primary">
                      {part}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="herb-card">
              <CardHeader>
                <CardTitle className="text-herb-primary">Preparation Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {plant.preparation.map((method) => (
                    <div key={method} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-herb-accent rounded-full mr-3 flex-shrink-0" />
                      {method}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growing Conditions */}
          <Card className="herb-card">
            <CardHeader>
              <CardTitle className="text-herb-primary">Growing Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-herb-light/30 rounded-lg">
                  <Sun className="w-8 h-8 mx-auto mb-2 text-herb-primary" />
                  <h4 className="font-medium text-herb-secondary mb-1">Climate</h4>
                  <p className="text-sm text-muted-foreground">{plant.growingConditions.climate}</p>
                </div>
                <div className="text-center p-4 bg-herb-light/30 rounded-lg">
                  <Mountain className="w-8 h-8 mx-auto mb-2 text-herb-primary" />
                  <h4 className="font-medium text-herb-secondary mb-1">Soil</h4>
                  <p className="text-sm text-muted-foreground">{plant.growingConditions.soil}</p>
                </div>
                <div className="text-center p-4 bg-herb-light/30 rounded-lg">
                  <Droplets className="w-8 h-8 mx-auto mb-2 text-herb-primary" />
                  <h4 className="font-medium text-herb-secondary mb-1">Water</h4>
                  <p className="text-sm text-muted-foreground">{plant.growingConditions.water}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Precautions */}
          <Card className="herb-card border-amber-200 bg-amber-50/30">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Precautions & Contraindications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {plant.precautions.map((precaution) => (
                  <div key={precaution} className="flex items-center text-sm text-amber-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                    {precaution}
                  </div>
                ))}
              </div>
              <p className="text-xs text-amber-600 mt-4 italic">
                Always consult with a qualified healthcare practitioner before using any medicinal plant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};