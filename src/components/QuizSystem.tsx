import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { plants } from '@/data/plants';

interface QuizQuestion {
  id: string;
  type: 'identification' | 'uses' | 'scientific' | 'system';
  question: string;
  image?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuizSystemProps {
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
}

export const QuizSystem = ({ difficulty = 'beginner', category }: QuizSystemProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [difficulty, category]);

  const generateQuestions = () => {
    const shuffledPlants = [...plants].sort(() => Math.random() - 0.5);
    const selectedPlants = shuffledPlants.slice(0, 10);
    
    const newQuestions: QuizQuestion[] = selectedPlants.map((plant, index) => {
      const questionTypes = ['identification', 'uses', 'scientific', 'system'];
      const questionType = questionTypes[index % questionTypes.length] as QuizQuestion['type'];
      
      switch (questionType) {
        case 'identification':
          const wrongOptionsIdent = shuffledPlants
            .filter(p => p.id !== plant.id)
            .slice(0, 3)
            .map(p => p.name);
          return {
            id: `q${index}`,
            type: questionType,
            question: 'Identify this medicinal plant:',
            image: plant.image,
            options: [plant.name, ...wrongOptionsIdent].sort(() => Math.random() - 0.5),
            correctAnswer: plant.name,
            explanation: `${plant.name} (${plant.scientificName}) is known for: ${plant.medicinalUses.slice(0, 2).join(', ')}`
          };
          
        case 'uses':
          const wrongUses = shuffledPlants
            .filter(p => p.id !== plant.id)
            .flatMap(p => p.medicinalUses)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
          return {
            id: `q${index}`,
            type: questionType,
            question: `What is ${plant.name} primarily used for?`,
            options: [plant.medicinalUses[0], ...wrongUses].sort(() => Math.random() - 0.5),
            correctAnswer: plant.medicinalUses[0],
            explanation: `${plant.name} is traditionally used for: ${plant.medicinalUses.join(', ')}`
          };
          
        case 'scientific':
          const wrongScientific = shuffledPlants
            .filter(p => p.id !== plant.id)
            .slice(0, 3)
            .map(p => p.scientificName);
          return {
            id: `q${index}`,
            type: questionType,
            question: `What is the scientific name of ${plant.name}?`,
            options: [plant.scientificName, ...wrongScientific].sort(() => Math.random() - 0.5),
            correctAnswer: plant.scientificName,
            explanation: `The scientific name of ${plant.name} is ${plant.scientificName}`
          };
          
        default:
          const wrongOptionsDefault = shuffledPlants
            .filter(p => p.id !== plant.id)
            .slice(0, 3)
            .map(p => p.name);
          return {
            id: `q${index}`,
            type: 'identification',
            question: 'Identify this plant:',
            image: plant.image,
            options: [plant.name, ...wrongOptionsDefault].sort(() => Math.random() - 0.5),
            correctAnswer: plant.name,
            explanation: plant.description
          };
      }
    });
    
    setQuestions(newQuestions);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer) return;
    setSelectedAnswer(answer);
    setShowAnswer(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuizComplete(false);
    setScore(0);
    generateQuestions();
  };

  if (questions.length === 0) {
    return <div className="flex items-center justify-center h-64">Loading quiz...</div>;
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-primary">{score}/{questions.length}</div>
          <div className="text-xl">You scored {percentage}%</div>
          <div className="space-y-2">
            {percentage >= 80 && <Badge variant="default" className="bg-green-500">Excellent!</Badge>}
            {percentage >= 60 && percentage < 80 && <Badge variant="default" className="bg-blue-500">Good Job!</Badge>}
            {percentage < 60 && <Badge variant="outline">Keep Learning!</Badge>}
          </div>
          <Button onClick={restartQuiz} className="mt-4">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <span className="font-medium">Plant Knowledge Quiz</span>
        </div>
        <Badge variant="outline">{currentQuestion + 1} of {questions.length}</Badge>
      </div>
      
      <Progress value={progress} className="h-2" />
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {question.image && (
            <div className="flex justify-center">
              <img 
                src={question.image} 
                alt="Plant to identify" 
                className="w-48 h-48 object-cover rounded-lg border"
              />
            </div>
          )}
          
          <div className="grid gap-2">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.correctAnswer;
              const isWrong = showAnswer && isSelected && !isCorrect;
              
              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className={`justify-start text-left h-auto p-4 ${
                    showAnswer && isCorrect ? 'bg-green-100 border-green-500 text-green-800' : ''
                  } ${
                    isWrong ? 'bg-red-100 border-red-500 text-red-800' : ''
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showAnswer}
                >
                  <div className="flex items-center gap-2">
                    {showAnswer && isCorrect && <CheckCircle className="h-4 w-4" />}
                    {isWrong && <XCircle className="h-4 w-4" />}
                    <span>{option}</span>
                  </div>
                </Button>
              );
            })}
          </div>
          
          {showAnswer && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          )}
          
          {showAnswer && (
            <Button onClick={nextQuestion} className="w-full">
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </CardContent>
      </Card>
      
      <div className="text-center text-sm text-muted-foreground">
        Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
      </div>
    </div>
  );
}; 