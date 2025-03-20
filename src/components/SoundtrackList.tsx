
import { Music, ExternalLink } from 'lucide-react';
import { SoundtrackItem } from '@/utils/movieData';

interface SoundtrackListProps {
  soundtrack: SoundtrackItem[];
}

const SoundtrackList = ({ soundtrack }: SoundtrackListProps) => {
  return (
    <div className="space-y-2">
      {soundtrack.map((track, index) => (
        <div 
          key={index}
          className="flex items-center justify-between p-3 rounded-lg glass-panel"
        >
          <div className="flex items-center">
            <div className="bg-accent/10 rounded-full p-2 mr-3">
              <Music className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="font-medium text-sm">{track.title}</p>
              <p className="text-xs text-muted-foreground">{track.artist}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-xs text-muted-foreground">{track.timeframe}</span>
            
            {track.spotifyUrl && (
              <a 
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent/10 transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoundtrackList;
