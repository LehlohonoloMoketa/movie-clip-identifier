
import { useState } from 'react';
import { MapPin, Info, Navigation } from 'lucide-react';
import { MovieScene } from '@/utils/movieData';

interface SceneDetailsProps {
  scene: MovieScene;
}

const SceneDetails = ({ scene }: SceneDetailsProps) => {
  const [showTrivia, setShowTrivia] = useState(false);

  const handleMapClick = () => {
    if (scene.location?.coordinates) {
      const { lat, lng } = scene.location.coordinates;
      window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
    }
  };

  return (
    <div className="glass-panel rounded-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-md">
      <div className="relative">
        {scene.image && (
          <div className="aspect-video w-full">
            <img 
              src={scene.image} 
              alt={scene.description} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {scene.timeframe}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium mb-2">{scene.description}</h3>
        
        {scene.location && (
          <div className="flex items-center text-sm mb-3 text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{scene.location.name}</span>
            {scene.location.coordinates && (
              <button 
                onClick={handleMapClick}
                className="ml-2 text-accent hover:underline flex items-center"
              >
                <Navigation className="h-3 w-3 mr-1" />
                <span className="text-xs">View on map</span>
              </button>
            )}
          </div>
        )}
        
        {scene.trivia && scene.trivia.length > 0 && (
          <div>
            <button
              className="text-sm flex items-center text-accent hover:underline mb-2"
              onClick={() => setShowTrivia(!showTrivia)}
            >
              <Info className="h-4 w-4 mr-1" />
              {showTrivia ? 'Hide trivia' : 'Show trivia'}
            </button>
            
            {showTrivia && (
              <ul className="text-sm space-y-2 bg-accent/5 p-3 rounded-md">
                {scene.trivia.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SceneDetails;
