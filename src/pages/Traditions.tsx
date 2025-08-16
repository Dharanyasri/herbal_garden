import { RegionalTraditions } from '@/components/RegionalTraditions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Users, BookOpen, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Traditions = () => {
  const ayushSystems = [
    {
      id: 'ayurveda',
      name: 'Ayurveda',
      origin: 'India (5000+ years)',
      description: 'Holistic healing system focusing on balance of mind, body, and spirit',
      keyPrinciples: ['Tridosha theory', 'Panchamahabhutas', 'Prakriti assessment'],
      plantCount: '8000+'
    },
    {
      id: 'yoga',
      name: 'Yoga & Naturopathy',
      origin: 'India (Ancient)',
      description: 'Natural healing through lifestyle, diet, and therapeutic practices',
      keyPrinciples: ['Natural healing', 'Disease prevention', 'Lifestyle medicine'],
      plantCount: '2000+'
    },
    {
      id: 'unani',
      name: 'Unani Medicine',
      origin: 'Greece/Arabia (1000+ years)',
      description: 'System based on Greek medicine, developed in the Islamic world',
      keyPrinciples: ['Four humors theory', 'Temperament', 'Natural healing'],
      plantCount: '3000+'
    },
    {
      id: 'siddha',
      name: 'Siddha Medicine',
      origin: 'Tamil Nadu (5000+ years)',
      description: 'Ancient Tamil system using minerals, metals, and plants',
      keyPrinciples: ['Spiritual transformation', 'Alchemy', 'Energy healing'],
      plantCount: '4000+'
    },
    {
      id: 'homeopathy',
      name: 'Homeopathy',
      origin: 'Germany (200+ years)',
      description: 'Healing through highly diluted natural substances',
      keyPrinciples: ['Like cures like', 'Minimum dose', 'Individualization'],
      plantCount: '1500+'
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
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Traditional Medicine Systems</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the rich heritage of AYUSH systems and their regional plant medicine traditions
            </p>
          </div>
        </div>

        {/* AYUSH Systems Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            AYUSH Systems Overview
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ayushSystems.map((system) => (
              <Card key={system.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{system.name}</CardTitle>
                    <Badge variant="outline">{system.plantCount} plants</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {system.origin}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {system.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Principles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {system.keyPrinciples.map((principle, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {principle}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Traditions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Users className="h-6 w-6" />
            Regional Medicine Traditions
          </h2>
          <RegionalTraditions />
        </div>

        {/* Cultural Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="h-5 w-5" />
              Cultural Impact & Modern Relevance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Cultural Integration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Traditional knowledge passed through generations</li>
                  <li>• Integration with religious and spiritual practices</li>
                  <li>• Local healing traditions and folklore</li>
                  <li>• Community-based healthcare systems</li>
                  <li>• Seasonal festivals celebrating medicinal plants</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Modern Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scientific validation of traditional remedies</li>
                  <li>• Integration with conventional medicine</li>
                  <li>• Standardization of herbal formulations</li>
                  <li>• Educational institutions and research centers</li>
                  <li>• Global wellness and pharmaceutical applications</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Preservation Efforts</h4>
              <p className="text-green-700 text-sm">
                Government initiatives, research institutions, and cultural organizations work together to 
                document, preserve, and promote traditional medicine knowledge while ensuring sustainable 
                practices and ethical harvesting of medicinal plants.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Traditions;