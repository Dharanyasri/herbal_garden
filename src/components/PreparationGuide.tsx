import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, AlertTriangle, ChefHat, Droplet, Flame, Leaf } from 'lucide-react';
import { Plant } from '@/data/plants';

interface PreparationMethod {
  id: string;
  name: string;
  type: 'decoction' | 'infusion' | 'powder' | 'oil' | 'paste' | 'juice';
  difficulty: 'easy' | 'medium' | 'hard';
  time: string;
  servings: string;
  ingredients: {
    item: string;
    amount: string;
    preparation?: string;
  }[];
  steps: {
    id: number;
    instruction: string;
    tip?: string;
    warning?: string;
    image?: string;
  }[];
  benefits: string[];
  precautions: string[];
  storage: string;
  shelfLife: string;
}

interface PreparationGuideProps {
  plant: Plant;
}

export const PreparationGuide = ({ plant }: PreparationGuideProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState(0);

  // Enhanced preparation methods based on the plant
  const preparationMethods: PreparationMethod[] = [
    {
      id: 'tea',
      name: `${plant.name} Tea (Infusion)`,
      type: 'infusion',
      difficulty: 'easy',
      time: '15 minutes',
      servings: '2 cups',
      ingredients: [
        { item: `Fresh ${plant.name} leaves`, amount: '10-15 leaves', preparation: 'washed and chopped' },
        { item: 'Water', amount: '2 cups' },
        { item: 'Honey', amount: '1 tsp (optional)', preparation: 'for taste' }
      ],
      steps: [
        {
          id: 1,
          instruction: 'Wash the fresh leaves thoroughly under running water.',
          tip: 'Use lukewarm water to remove any dust or impurities.'
        },
        {
          id: 2,
          instruction: 'Boil 2 cups of water in a clean pot.',
          tip: 'Use filtered water for best taste.'
        },
        {
          id: 3,
          instruction: 'Add the washed leaves to the boiling water.',
          warning: 'Reduce heat to medium to prevent overcooking.'
        },
        {
          id: 4,
          instruction: 'Simmer for 10-12 minutes until the water changes color.',
          tip: 'The water should take on a greenish tint and aromatic smell.'
        },
        {
          id: 5,
          instruction: 'Strain the tea and add honey if desired.',
          tip: 'Serve warm for maximum benefits.'
        }
      ],
      benefits: plant.medicinalUses.slice(0, 3),
      precautions: [
        'Do not exceed 2 cups per day',
        'Consult a healthcare provider if pregnant',
        'Avoid if allergic to the plant family'
      ],
      storage: 'Consume immediately, do not store',
      shelfLife: 'Best consumed fresh'
    },
    {
      id: 'powder',
      name: `${plant.name} Powder`,
      type: 'powder',
      difficulty: 'medium',
      time: '3-5 days (including drying)',
      servings: '50-60 doses',
      ingredients: [
        { item: `Fresh ${plant.name} leaves`, amount: '200g', preparation: 'clean and healthy' }
      ],
      steps: [
        {
          id: 1,
          instruction: 'Select healthy, pest-free leaves in the morning.',
          tip: 'Morning harvesting ensures maximum potency.'
        },
        {
          id: 2,
          instruction: 'Wash leaves thoroughly and pat dry with clean cloth.',
          warning: 'Ensure leaves are completely dry before proceeding.'
        },
        {
          id: 3,
          instruction: 'Spread leaves on a clean cloth in shade for 3-4 days.',
          tip: 'Avoid direct sunlight to preserve nutrients.'
        },
        {
          id: 4,
          instruction: 'Once completely dry, grind into fine powder using a clean grinder.',
          tip: 'Grind in small batches for uniform consistency.'
        },
        {
          id: 5,
          instruction: 'Sieve the powder and store in airtight container.',
          tip: 'Label with date of preparation.'
        }
      ],
      benefits: ['Longer shelf life', 'Easy to consume', 'Concentrated nutrients'],
      precautions: [
        'Dosage: 1/2 to 1 teaspoon with water',
        'Take with meals to avoid stomach upset',
        'Start with smaller doses'
      ],
      storage: 'Store in airtight container in cool, dry place',
      shelfLife: '6-12 months if stored properly'
    }
  ];

  const currentMethod = preparationMethods[selectedMethod];
  const stepProgress = ((currentStep + 1) / currentMethod.steps.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'infusion': return <Droplet className="h-4 w-4" />;
      case 'decoction': return <Flame className="h-4 w-4" />;
      case 'powder': return <Leaf className="h-4 w-4" />;
      default: return <ChefHat className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {preparationMethods.map((method, index) => (
          <Card 
            key={method.id}
            className={`cursor-pointer transition-all ${
              selectedMethod === index ? 'ring-2 ring-primary' : 'hover:shadow-md'
            }`}
            onClick={() => {
              setSelectedMethod(index);
              setCurrentStep(0);
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getTypeIcon(method.type)}
                  {method.name}
                </CardTitle>
                <Badge className={getDifficultyColor(method.difficulty)}>
                  {method.difficulty}
                </Badge>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {method.time}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {method.servings}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getTypeIcon(currentMethod.type)}
            {currentMethod.name}
          </CardTitle>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {currentMethod.time}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {currentMethod.servings}
            </div>
            <Badge className={getDifficultyColor(currentMethod.difficulty)}>
              {currentMethod.difficulty}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="ingredients" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ingredients" className="space-y-4">
              <h3 className="font-semibold">Required Ingredients:</h3>
              <div className="space-y-2">
                {currentMethod.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{ingredient.item}</span>
                      {ingredient.preparation && (
                        <span className="text-sm text-muted-foreground ml-2">
                          ({ingredient.preparation})
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-primary">{ingredient.amount}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="steps" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Step-by-Step Instructions:</h3>
                <span className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {currentMethod.steps.length}
                </span>
              </div>
              
              <Progress value={stepProgress} className="h-2" />
              
              <Card className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {currentMethod.steps[currentStep].id}
                    </div>
                    <h4 className="font-medium">Step {currentMethod.steps[currentStep].id}</h4>
                  </div>
                  
                  <p className="text-foreground leading-relaxed">
                    {currentMethod.steps[currentStep].instruction}
                  </p>
                  
                  {currentMethod.steps[currentStep].tip && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-800 text-sm">
                        <strong>💡 Tip:</strong> {currentMethod.steps[currentStep].tip}
                      </p>
                    </div>
                  )}
                  
                  {currentMethod.steps[currentStep].warning && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-amber-800 text-sm flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        <strong>Warning:</strong> {currentMethod.steps[currentStep].warning}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                <Button 
                  onClick={() => setCurrentStep(Math.min(currentMethod.steps.length - 1, currentStep + 1))}
                  disabled={currentStep === currentMethod.steps.length - 1}
                  className="flex-1"
                >
                  Next Step
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="space-y-4">
              <h3 className="font-semibold">Health Benefits:</h3>
              <div className="grid gap-2">
                {currentMethod.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-800">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="font-semibold mt-6">Precautions:</h3>
              <div className="grid gap-2">
                {currentMethod.precautions.map((precaution, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-amber-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-800 text-sm">{precaution}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="storage" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Storage Instructions:</h3>
                  <p className="text-muted-foreground">{currentMethod.storage}</p>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Shelf Life:</h3>
                  <p className="text-muted-foreground">{currentMethod.shelfLife}</p>
                </Card>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Storage Tips:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Keep away from direct sunlight and heat</li>
                  <li>• Use clean, dry utensils when handling</li>
                  <li>• Label containers with preparation date</li>
                  <li>• Check for signs of spoilage before use</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};