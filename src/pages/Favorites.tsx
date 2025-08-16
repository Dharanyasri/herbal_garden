import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import { Link } from 'react-router-dom';
import { Plant, plants } from '@/data/plants';
import { PlantCard } from '@/components/PlantCard';
import { PlantDetail } from '@/components/PlantDetail';

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('plant-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const favoriteePlants = plants.filter(plant => favorites.includes(plant.id));

  const removeFromFavorites = (plantId: string) => {
    const updatedFavorites = favorites.filter(id => id !== plantId);
    setFavorites(updatedFavorites);
    localStorage.setItem('plant-favorites', JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('plant-favorites');
  };

  if (selectedPlant) {
    return (
      <PlantDetail
        plant={selectedPlant}
        onBack={() => setSelectedPlant(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-herb-light/30 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Garden
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-herb-primary flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
                My Favorite Plants
              </h1>
              <p className="text-muted-foreground mt-2">
                Your personally curated collection of medicinal plants
              </p>
            </div>
          </div>
          
          {favorites.length > 0 && (
            <Button 
              variant="outline" 
              onClick={clearAllFavorites}
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>

        {/* Stats Card */}
        <Card className="mb-8 bg-gradient-card border-herb-primary/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-herb-primary">{favorites.length}</div>
                <div className="text-sm text-muted-foreground">Favorite Plants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-herb-secondary">
                  {new Set(favoriteePlants.flatMap(p => p.ayushSystems)).size}
                </div>
                <div className="text-sm text-muted-foreground">AYUSH Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-herb-accent">
                  {new Set(favoriteePlants.flatMap(p => p.medicinalUses)).size}
                </div>
                <div className="text-sm text-muted-foreground">Total Benefits</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Favorites Grid */}
        {favorites.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring plants and add them to your favorites by clicking the heart icon
              </p>
              <Link to="/">
                <Button className="bg-herb-primary hover:bg-herb-secondary">
                  Explore Plants
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteePlants.map((plant) => (
              <div key={plant.id} className="relative group">
                <PlantCard
                  plant={plant}
                  onClick={() => setSelectedPlant(plant)}
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromFavorites(plant.id);
                  }}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;