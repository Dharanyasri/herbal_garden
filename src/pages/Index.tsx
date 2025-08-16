import { useState, useMemo } from "react";
import { PlantCard } from "@/components/PlantCard";
import { PlantDetail } from "@/components/PlantDetail";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { plants, Plant } from "@/data/plants";
import { Leaf, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const Index = () => {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("All Systems");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [comparisonList, setComparisonList] = useState<Plant[]>([]);

  const addToComparison = (plant: Plant) => {
    if (comparisonList.length < 3 && !comparisonList.find(p => p.id === plant.id)) {
      setComparisonList([...comparisonList, plant]);
    }
  };

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = 
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.commonNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        plant.medicinalUses.some(use => use.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSystem = 
        selectedSystem === "All Systems" || 
        plant.ayushSystems.includes(selectedSystem);
      
      return matchesSearch && matchesSystem;
    });
  }, [searchTerm, selectedSystem]);

  if (selectedPlant) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <PlantDetail 
            plant={selectedPlant} 
            onBack={() => setSelectedPlant(null)} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-75" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Leaf className="w-16 h-16 text-white floating-animation" />
              <Sparkles className="w-6 h-6 text-white/80 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Virtual Herbal Garden
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 animate-slide-up">
            Explore the Healing Power of AYUSH Medicinal Plants
          </p>
          
          <div className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-slide-up">
            <p>
              Discover the ancient wisdom of Ayurveda, Yoga & Naturopathy, Unani, 
              Siddha, and Homeopathy through our interactive collection of medicinal plants.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="text-sm">Scroll to explore</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-herb-primary mb-4">
              Medicinal Plant Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each plant in our garden has been carefully documented with its traditional uses, 
              preparation methods, and safety information across different AYUSH systems.
            </p>
          </div>

          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedSystem={selectedSystem}
            onSystemChange={setSelectedSystem}
          />

          {filteredPlants.length === 0 ? (
            <div className="text-center py-16">
              <Leaf className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No plants found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlants.map((plant, index) => (
                <div
                  key={plant.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PlantCard
                    plant={plant}
                    onClick={() => setSelectedPlant(plant)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
