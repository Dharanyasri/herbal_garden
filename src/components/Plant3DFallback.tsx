import { Leaf, AlertCircle } from 'lucide-react';
import { Plant } from '@/data/plants';
import { Card, CardContent } from '@/components/ui/card';

interface Plant3DFallbackProps {
  plant: Plant;
  error?: string;
}

export const Plant3DFallback = ({ plant, error }: Plant3DFallbackProps) => {
  return (
    <Card className="w-full h-96 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-xl overflow-hidden shadow-2xl border border-green-200">
      <CardContent className="h-full flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-4">
          {error ? (
            <>
              <div className="relative">
                <AlertCircle className="w-20 h-20 mx-auto text-red-400" />
                <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-50"></div>
              </div>
              <h3 className="text-xl font-bold text-red-600">3D Model Unavailable</h3>
              <p className="text-sm text-red-500 max-w-xs leading-relaxed">
                {error}
              </p>
              <div className="mt-4 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs text-red-600">Try refreshing the page or switching to photo view</p>
              </div>
            </>
          ) : (
            <>
              <div className="relative">
                <Leaf className="w-28 h-28 mx-auto text-emerald-500 opacity-80 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-3 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="absolute inset-0 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-emerald-700">Loading Realistic 3D Model</h3>
              <p className="text-sm text-emerald-600 leading-relaxed">
                Preparing detailed botanical visualization for <span className="font-semibold">{plant.name}</span>
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-3 rounded-xl text-sm backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full animate-pulse ${error ? 'bg-red-400' : 'bg-emerald-400'}`}></div>
            <span className="font-medium">{error ? "3D Unavailable" : "Loading 3D Model..."}</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-emerald-700 font-semibold border border-emerald-200">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌿</span>
            {plant.name}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};