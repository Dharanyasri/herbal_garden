import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuizSystem } from '@/components/QuizSystem';
import { Brain, Trophy, Target, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const difficultyInfo = {
    beginner: {
      description: 'Basic plant identification and common uses',
      questions: '10 questions',
      timeEstimate: '5-10 minutes',
      focus: 'Common medicinal plants and their primary uses'
    },
    intermediate: {
      description: 'Scientific names and detailed medicinal properties',
      questions: '15 questions',
      timeEstimate: '10-15 minutes',
      focus: 'Plant families, preparation methods, and contraindications'
    },
    advanced: {
      description: 'Complex formulations and traditional systems',
      questions: '20 questions',
      timeEstimate: '15-20 minutes',
      focus: 'Traditional recipes, regional variations, and advanced pharmacology'
    }
  };

  const categories = [
    { id: 'all', name: 'All Plants', description: 'Mixed questions from all plant categories' },
    { id: 'digestive', name: 'Digestive Health', description: 'Plants for stomach, liver, and digestive issues' },
    { id: 'respiratory', name: 'Respiratory Care', description: 'Plants for cough, cold, and breathing problems' },
    { id: 'immunity', name: 'Immune System', description: 'Plants that boost immunity and fight infections' },
    { id: 'skincare', name: 'Skin & Beauty', description: 'Plants for skin health and cosmetic uses' }
  ];

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto py-8">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setQuizStarted(false)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Setup
            </Button>
          </div>
          <QuizSystem difficulty={selectedDifficulty} category={selectedCategory} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Garden
          </Link>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Plant Knowledge Quiz</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of medicinal plants and traditional healing practices
          </p>
        </div>

        {/* Quiz Setup */}
        <div className="space-y-6">
          {/* Difficulty Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Select Difficulty Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {Object.entries(difficultyInfo).map(([level, info]) => (
                  <Card
                    key={level}
                    className={`cursor-pointer transition-all ${
                      selectedDifficulty === level ? 'ring-2 ring-primary' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedDifficulty(level as any)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg capitalize">{level}</CardTitle>
                        <Badge 
                          variant={level === 'beginner' ? 'default' : level === 'intermediate' ? 'secondary' : 'destructive'}
                        >
                          {info.questions}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Time:</strong> {info.timeEstimate}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        <strong>Focus:</strong> {info.focus}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Choose Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <Card
                    key={category.id}
                    className={`cursor-pointer transition-all ${
                      selectedCategory === category.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz Summary & Start */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Quiz Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="font-semibold text-lg capitalize">{selectedDifficulty}</div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">Category</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="font-semibold text-lg">
                    {difficultyInfo[selectedDifficulty].timeEstimate}
                  </div>
                  <div className="text-sm text-muted-foreground">Estimated Time</div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={() => setQuizStarted(true)}
                  className="px-8 py-3"
                >
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;