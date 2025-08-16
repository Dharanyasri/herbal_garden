import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PreparationGuide } from '@/components/PreparationGuide';
import { plants } from '@/data/plants';
import { ArrowLeft, ChefHat, Clock, Users, AlertTriangle, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Preparations = () => {
  const [selectedPlant, setSelectedPlant] = useState(plants[0]);
  const [selectedPreparationType, setSelectedPreparationType] = useState<string>('all');

  const preparationTypes = [
    { id: 'all', name: 'All Methods', icon: <ChefHat className="h-4 w-4" /> },
    { id: 'tea', name: 'Teas & Infusions', icon: <span>🫖</span> },
    { id: 'decoction', name: 'Decoctions', icon: <span>🔥</span> },
    { id: 'powder', name: 'Powders', icon: <span>🥄</span> },
    { id: 'oil', name: 'Oils & Extracts', icon: <span>🫗</span> },
    { id: 'paste', name: 'Pastes & Poultices', icon: <span>🧴</span> }
  ];

  const safetyGuidelines = [
    {
      category: 'General Safety',
      points: [
        'Always consult healthcare providers before starting any herbal treatment',
        'Start with small doses to test for allergic reactions',
        'Use clean utensils and containers for preparation',
        'Follow recommended dosages and preparation methods'
      ]
    },
    {
      category: 'Quality Control',
      points: [
        'Use fresh, high-quality plant materials',
        'Ensure proper identification of plants',
        'Check for contamination or adulteration',
        'Store prepared medicines in appropriate conditions'
      ]
    },
    {
      category: 'Special Considerations',
      points: [
        'Pregnant and breastfeeding women should exercise extra caution',
        'Children may require adjusted dosages',
        'Consider drug interactions with conventional medicines',
        'Monitor for side effects and discontinue if necessary'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Garden
          </Link>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Traditional Preparation Methods</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn step-by-step traditional methods for preparing medicinal plant remedies
            </p>
          </div>
        </div>

        {/* Plant Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              Select Plant for Preparation Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Select value={selectedPlant.id} onValueChange={(value) => {
                  const plant = plants.find(p => p.id === value);
                  if (plant) setSelectedPlant(plant);
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a medicinal plant" />
                  </SelectTrigger>
                  <SelectContent>
                    {plants.map((plant) => (
                      <SelectItem key={plant.id} value={plant.id}>
                        <div className="flex items-center gap-2">
                          <span>{plant.name}</span>
                          <span className="text-xs text-muted-foreground">
                            ({plant.scientificName})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedPreparationType} onValueChange={setSelectedPreparationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by preparation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {preparationTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        <div className="flex items-center gap-2">
                          {type.icon}
                          <span>{type.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Selected Plant Info */}
            <div className="mt-4 flex items-center gap-4 p-4 bg-muted rounded-lg">
              <img 
                src={selectedPlant.image} 
                alt={selectedPlant.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{selectedPlant.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedPlant.scientificName}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedPlant.medicinalUses.slice(0, 3).map((use, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preparation Guide */}
        <div className="mb-8">
          <PreparationGuide plant={selectedPlant} />
        </div>

        {/* Safety Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Safety Guidelines & Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {safetyGuidelines.map((guideline, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-amber-800">{guideline.category}</h3>
                  <ul className="space-y-2">
                    {guideline.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">Important Disclaimer</h4>
                  <p className="text-amber-700 text-sm">
                    The information provided is for educational purposes only and should not replace 
                    professional medical advice. Always consult qualified healthcare practitioners 
                    before using medicinal plants, especially for treating serious health conditions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Preparations;