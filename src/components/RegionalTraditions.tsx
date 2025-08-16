import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Book, Users, Star, Calendar, Leaf } from 'lucide-react';

interface Tradition {
  id: string;
  name: string;
  region: string;
  system: string;
  description: string;
  history: string;
  keyPlants: string[];
  practices: string[];
  seasonalUse: {
    season: string;
    plants: string[];
    purpose: string;
  }[];
  culturalSignificance: string;
  modernAdaptation: string;
}

interface RegionalTraditionsProps {
  selectedRegion?: string;
}

export const RegionalTraditions = ({ selectedRegion }: RegionalTraditionsProps) => {
  const [selectedTradition, setSelectedTradition] = useState<string>('ayurveda');

  const traditions: Tradition[] = [
    {
      id: 'ayurveda',
      name: 'Ayurveda',
      region: 'Indian Subcontinent',
      system: 'Ayurveda',
      description: 'The ancient Indian system of medicine that emphasizes balance between mind, body, and spirit through natural remedies.',
      history: 'Originating over 5,000 years ago in India, Ayurveda is one of the world\'s oldest medical systems. The foundational texts, Charaka Samhita and Sushruta Samhita, describe comprehensive approaches to health using plant-based medicines.',
      keyPlants: ['Tulsi', 'Turmeric', 'Neem', 'Ashwagandha', 'Brahmi'],
      practices: [
        'Panchakarma detoxification',
        'Pulse diagnosis (Nadi Pariksha)',
        'Constitutional assessment (Prakriti)',
        'Seasonal regimens (Ritucharya)',
        'Daily routines (Dinacharya)'
      ],
      seasonalUse: [
        {
          season: 'Spring (Vasant)',
          plants: ['Neem', 'Turmeric'],
          purpose: 'Detoxification and liver cleansing'
        },
        {
          season: 'Summer (Grishma)',
          plants: ['Tulsi', 'Brahmi'],
          purpose: 'Cooling and stress relief'
        },
        {
          season: 'Monsoon (Varsha)',
          plants: ['Turmeric', 'Ashwagandha'],
          purpose: 'Immunity and digestive health'
        },
        {
          season: 'Winter (Shishir)',
          plants: ['Ashwagandha', 'Turmeric'],
          purpose: 'Strength building and warmth'
        }
      ],
      culturalSignificance: 'Ayurveda is deeply integrated into Indian culture, with families passing down traditional recipes and remedies through generations. Many Hindu festivals and rituals incorporate medicinal plants.',
      modernAdaptation: 'Modern Ayurveda combines traditional wisdom with scientific research, leading to standardized herbal formulations and integration with conventional medicine.'
    },
    {
      id: 'siddha',
      name: 'Siddha Medicine',
      region: 'Tamil Nadu, South India',
      system: 'Siddha',
      description: 'Ancient Tamil system of medicine that uses minerals, metals, and plants for healing, developed by the Siddhars (spiritual scientists).',
      history: 'Developed by 18 Siddhars in Tamil Nadu, this system is over 5,000 years old. It emphasizes the transformation of the human body through alchemical processes and spiritual practices.',
      keyPlants: ['Tulsi', 'Neem', 'Turmeric', 'Brahmi'],
      practices: [
        'Pulse examination (Naadi)',
        'Urine examination (Neerkuri)',
        'Yoga and meditation',
        'Alchemical preparations',
        'Seasonal therapy'
      ],
      seasonalUse: [
        {
          season: 'Kaar (Monsoon)',
          plants: ['Neem', 'Turmeric'],
          purpose: 'Preventing infections and boosting immunity'
        },
        {
          season: 'Koothir (Winter)',
          plants: ['Ashwagandha', 'Brahmi'],
          purpose: 'Strengthening and mental clarity'
        }
      ],
      culturalSignificance: 'Siddha medicine is integral to Tamil culture, with many temples housing medicinal gardens and traditional healers (Vaidyars) serving communities.',
      modernAdaptation: 'Government medical colleges in Tamil Nadu teach Siddha medicine, and research institutions work on validating traditional formulations.'
    },
    {
      id: 'unani',
      name: 'Unani Medicine',
      region: 'Middle East, Indian Subcontinent',
      system: 'Unani',
      description: 'Traditional system based on Greek medicine, developed in the medieval Islamic world and practiced extensively in India.',
      history: 'Brought to India by Arab and Persian scholars, Unani medicine is based on the works of Greek physicians like Hippocrates and Galen, further developed by Islamic scholars.',
      keyPlants: ['Tulsi', 'Neem', 'Turmeric'],
      practices: [
        'Temperament assessment (Mizaj)',
        'Pulse diagnosis',
        'Cupping therapy (Hijama)',
        'Dietary therapy',
        'Lifestyle counseling'
      ],
      seasonalUse: [
        {
          season: 'Spring',
          plants: ['Neem', 'Tulsi'],
          purpose: 'Blood purification and liver detox'
        },
        {
          season: 'Summer',
          plants: ['Tulsi'],
          purpose: 'Cooling and hydration'
        }
      ],
      culturalSignificance: 'Popular among Muslim communities in India, with many families maintaining traditional Unani practices and remedies.',
      modernAdaptation: 'Unani medicine is recognized by the Indian government, with dedicated colleges and research institutions promoting evidence-based practice.'
    }
  ];

  const selectedTrad = traditions.find(t => t.id === selectedTradition) || traditions[0];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {traditions.map((tradition) => (
          <Card 
            key={tradition.id}
            className={`cursor-pointer transition-all ${
              selectedTradition === tradition.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedTradition(tradition.id)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{tradition.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {tradition.region}
              </div>
              <Badge variant="outline">{tradition.system}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {tradition.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            {selectedTrad.name}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {selectedTrad.region}
            </div>
            <Badge variant="outline">{selectedTrad.system}</Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="plants">Key Plants</TabsTrigger>
              <TabsTrigger value="practices">Practices</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal Use</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">System Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTrad.description}
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Cultural Significance
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedTrad.culturalSignificance}
                  </p>
                </Card>
                
                <Card className="p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Modern Adaptation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedTrad.modernAdaptation}
                  </p>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Historical Background
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedTrad.history}
                </p>
              </Card>
            </TabsContent>
            
            <TabsContent value="plants" className="space-y-4">
              <h3 className="font-semibold">Key Medicinal Plants</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {selectedTrad.keyPlants.map((plant, index) => (
                  <Card key={index} className="p-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <span className="font-medium">{plant}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="practices" className="space-y-4">
              <h3 className="font-semibold">Traditional Practices</h3>
              <div className="space-y-2">
                {selectedTrad.practices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="seasonal" className="space-y-4">
              <h3 className="font-semibold">Seasonal Usage Patterns</h3>
              <div className="grid gap-4">
                {selectedTrad.seasonalUse.map((seasonal, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">{seasonal.season}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Purpose:</strong> {seasonal.purpose}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {seasonal.plants.map((plant, plantIndex) => (
                        <Badge key={plantIndex} variant="outline" className="text-xs">
                          {plant}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};