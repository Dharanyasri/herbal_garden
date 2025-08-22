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

// Import plant images
import tulsiImg from "@/assets/Tulsi.png";
import neemImg from "@/assets/neem.jpg";
import turmericImg from "@/assets/Turmeric.png";
import ashwagandhaImg from "@/assets/Ashwagandha.jpg";
import brahmiImg from "@/assets/Brahmi.jpg";
import aloeveraImg from "@/assets/aloevera.jpg";
import amlaImg from "@/assets/amla.jpg";
import cardamomImg from "@/assets/cardamom.jpg";
import chamomileImg from "@/assets/Chamomile.webp";
import cinnamonImg from "@/assets/Cinnamon.jpg";
import echinaceaImg from "@/assets/Echinacea.jpg";
import fennelImg from "@/assets/Fennel.webp";
import fenugreekImg from "@/assets/fenugreek.jpg";
import gingerImg from "@/assets/ginger.jpg";
import ginkgoImg from "@/assets/Ginkgo.jpg";
import ginsengImg from "@/assets/Ginseng.jpg";
import holybasilImg from "@/assets/Holybasil.jpg";
import lavenderImg from "@/assets/Lavender.jpg";
import licoriceImg from "@/assets/Licorice.jpg";
import oreganoImg from "@/assets/Oregano.jpg";
import peppermintImg from "@/assets/Peppermint.jpg";
import rosemaryImg from "@/assets/Rosemary.webp";
import sageImg from "@/assets/Sage.jpg";
import thymeImg from "@/assets/Thyme.jpg";

interface PlantDetailProps {
  plant: Plant;
  onBack: () => void;
}

export const PlantDetail = ({ plant, onBack }: PlantDetailProps) => {
  const [activeView, setActiveView] = useState<"image" | "3d">("3d");
  
  // Get plant image based on ID
  const getPlantImage = (plantId: string) => {
    switch (plantId) {
      case 'tulsi': return tulsiImg;
      case 'neem': return neemImg;
      case 'turmeric': return turmericImg;
      case 'ashwagandha': return ashwagandhaImg;
      case 'brahmi': return brahmiImg;
      case 'aloe-vera': return aloeveraImg;
      case 'amla': return amlaImg;
      case 'cardamom': return cardamomImg;
      case 'chamomile': return chamomileImg;
      case 'cinnamon': return cinnamonImg;
      case 'echinacea': return echinaceaImg;
      case 'fennel': return fennelImg;
      case 'fenugreek': return fenugreekImg;
      case 'ginger': return gingerImg;
      case 'ginkgo': return ginkgoImg;
      case 'ginseng': return ginsengImg;
      case 'holy-basil': return holybasilImg;
      case 'lavender': return lavenderImg;
      case 'licorice': return licoriceImg;
      case 'oregano': return oreganoImg;
      case 'peppermint': return peppermintImg;
      case 'rosemary': return rosemaryImg;
      case 'sage': return sageImg;
      case 'thyme': return thymeImg;
      

      default: return null;
    }
  };

  const plantImage = getPlantImage(plant.id);
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
          <Card className="herb-card overflow-hidden">
            {/* Enhanced Header */}
            <div className="relative bg-gradient-botanical p-6 pb-4">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {plant.ayushSystems[0]}
                  </Badge>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {plant.region}
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">{plant.name}</h1>
                <p className="text-white/90 italic text-lg">{plant.scientificName}</p>
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="p-6 pb-4">
              <Tabs value={activeView} onValueChange={(value) => setActiveView(value as "image" | "3d")}>
                <TabsList className="grid w-full grid-cols-2 bg-herb-light/50">
                  <TabsTrigger value="3d" className="flex items-center gap-2 data-[state=active]:bg-herb-primary data-[state=active]:text-white">
                    <Box className="w-4 h-4" />
                    3D Interactive
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex items-center gap-2 data-[state=active]:bg-herb-primary data-[state=active]:text-white">
                    <ImageIcon className="w-4 h-4" />
                    Photo View
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="3d" className="mt-6">
                  <div className="space-y-4">
                    <Plant3D plant={plant} />
                    <div className="text-center space-y-2">
                      <p className="text-sm text-herb-secondary font-medium">
                        🌿 Interactive 3D Model
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Drag to rotate • Scroll to zoom • Auto-rotating display
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="image" className="mt-6">
                  <div className="aspect-square bg-gradient-to-br from-herb-light to-herb-accent/20 relative overflow-hidden rounded-xl shadow-inner">
                    {plantImage ? (
                      <>
                        <img 
                          src={plantImage} 
                          alt={`${plant.name} - ${plant.scientificName}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                            <h3 className="text-white font-bold text-xl mb-1">
                              {plant.name}
                            </h3>
                            <p className="text-white/90 text-sm italic">
                              {plant.scientificName}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-botanical opacity-60" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <Leaf className="w-24 h-24 text-herb-primary floating-animation mb-4" />
                          <p className="text-herb-secondary font-medium">Coming Soon</p>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-herb-light/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-herb-primary">{plant.commonNames.length}</div>
                  <div className="text-sm text-muted-foreground">Common Names</div>
                </div>
                <div className="bg-herb-light/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-herb-primary">{plant.ayushSystems.length}</div>
                  <div className="text-sm text-muted-foreground">AYUSH Systems</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-herb-secondary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-herb-primary rounded-full mr-2"></div>
                    Common Names
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plant.commonNames.map((name) => (
                      <Badge key={name} variant="secondary" className="text-xs bg-herb-light/50 text-herb-secondary border-herb-primary/20">
                        {name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-herb-secondary mb-3 flex items-center">
                    <div className="w-2 h-2 bg-herb-accent rounded-full mr-2"></div>
                    Traditional Systems
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plant.ayushSystems.map((system) => (
                      <Badge key={system} className="bg-herb-primary text-white shadow-sm hover:shadow-md transition-shadow">
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
            <div className="text-center space-y-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🌿</span>
                <p className="text-lg text-emerald-700 font-semibold">
                  Realistic 3D Plant Model
                </p>
              </div>
              <p className="text-sm text-emerald-600">
                Scientifically accurate • Interactive exploration • Detailed botanical features
              </p>
              <div className="flex justify-center gap-4 text-xs text-emerald-500">
                <span>🖱️ Drag to rotate</span>
                <span>🔍 Scroll to zoom</span>
                <span>⚡ Auto-rotating</span>
              </div>
            </div>
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