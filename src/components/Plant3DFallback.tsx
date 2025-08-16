import { Leaf, AlertCircle } from 'lucide-react';
import { Plant } from '@/data/plants';
import { Card, CardContent } from '@/components/ui/card';

interface Plant3DFallbackProps {
  plant: Plant;
  error?: string;
}

export const Plant3DFallback = ({ plant, error }: Plant3DFallbackProps) => {
  return (
    <Card className="w-full h-96 bg-gradient-botanical rounded-lg overflow-hidden shadow-lg">
      <CardContent className="h-full flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-4">
          {error ? (
            <>
              <AlertCircle className="w-16 h-16 mx-auto text-destructive/70" />
              <h3 className="text-lg font-semibold text-destructive">3D View Unavailable</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {error}
              </p>
            </>
          ) : (
            <>
              <div className="relative">
                <Leaf className="w-24 h-24 mx-auto text-herb-primary opacity-70 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-herb-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-herb-primary">Loading 3D Model</h3>
              <p className="text-sm text-muted-foreground">
                Preparing interactive view for {plant.name}...
              </p>
            </>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            {error ? "3D Unavailable" : "Loading..."}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};