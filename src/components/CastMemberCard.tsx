
import { useState } from 'react';
import { CastMember } from '@/utils/movieData';
import { Film } from 'lucide-react';

interface CastMemberCardProps {
  castMember: CastMember;
}

const CastMemberCard = ({ castMember }: CastMemberCardProps) => {
  const [showFilmography, setShowFilmography] = useState(false);

  return (
    <div className="group rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-md">
      <div className="flex items-center p-3 space-x-3">
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
          <img 
            src={castMember.profile} 
            alt={castMember.name} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium">{castMember.name}</h4>
          <p className="text-sm text-muted-foreground">as {castMember.character}</p>
        </div>
      </div>
      
      {castMember.otherMovies && castMember.otherMovies.length > 0 && (
        <div className="border-t border-border">
          <button
            onClick={() => setShowFilmography(!showFilmography)}
            className="w-full px-3 py-2 text-sm flex items-center justify-between hover:bg-accent/5 transition-colors"
          >
            <span className="flex items-center">
              <Film className="h-4 w-4 mr-1" />
              Filmography
            </span>
            <span className="text-xs text-muted-foreground">
              {showFilmography ? 'Hide' : 'Show'}
            </span>
          </button>
          
          {showFilmography && (
            <div className="p-3 pt-0">
              <div className="grid grid-cols-3 gap-2">
                {castMember.otherMovies.map((movie) => (
                  <div key={movie.id} className="text-center">
                    <div className="aspect-[2/3] rounded overflow-hidden mb-1">
                      <img 
                        src={movie.poster} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs font-medium truncate">{movie.title}</p>
                    <p className="text-xs text-muted-foreground">{movie.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CastMemberCard;
