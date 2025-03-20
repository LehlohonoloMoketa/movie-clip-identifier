
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, Clock, Film, ArrowLeft, ExternalLink, PlayCircle, Music, Users } from 'lucide-react';
import { toast } from 'sonner';
import { Movie } from '@/types/movieTypes';
import SceneDetails from './SceneDetails';
import CastMemberCard from './CastMemberCard';
import SoundtrackList from './SoundtrackList';
import SocialShare from './SocialShare';

interface MovieResultProps {
  movie: Movie;
}

const MovieResult = ({ movie }: MovieResultProps) => {
  const [activeTab, setActiveTab] = useState<'streaming' | 'scenes' | 'cast' | 'soundtrack' | 'similar'>('streaming');

  return (
    <div className="animate-fade-in">
      <div 
        className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center mb-8 overflow-hidden"
        style={{ 
          backgroundImage: `url(${movie.backdrop})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to upload
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 md:w-40 lg:w-48 aspect-[2/3] rounded-lg overflow-hidden shadow-lg flex-shrink-0 bg-gray-100">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {movie.title} <span className="text-white/70">({movie.year})</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 mb-6">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-1 fill-yellow-400" />
                  <span className="text-white font-medium">{movie.rating.toFixed(1)}</span>
                </div>
                
                <div className="text-white/70">
                  {movie.genre.join(' • ')}
                </div>
                
                <div className="flex items-center text-white/70">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>120 min</span>
                </div>
                
                <div className="flex items-center text-white/70">
                  <Film className="h-4 w-4 mr-1" />
                  <span>{movie.director}</span>
                </div>
              </div>
              
              <p className="text-white/80 text-sm md:text-base mb-6 max-w-2xl">
                {movie.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <SocialShare title={`Check out ${movie.title} (${movie.year})`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        {/* Tabs Navigation */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-4 mb-6 scrollbar-hide border-b border-border">
          <button
            onClick={() => setActiveTab('streaming')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap ${
              activeTab === 'streaming'
                ? 'bg-accent/10 text-accent'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Where to Watch
          </button>
          
          {movie.scenes && movie.scenes.length > 0 && (
            <button
              onClick={() => setActiveTab('scenes')}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap ${
                activeTab === 'scenes'
                  ? 'bg-accent/10 text-accent'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Scenes
            </button>
          )}
          
          {movie.cast && movie.cast.length > 0 && (
            <button
              onClick={() => setActiveTab('cast')}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap ${
                activeTab === 'cast'
                  ? 'bg-accent/10 text-accent'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Cast
            </button>
          )}
          
          {movie.soundtrack && movie.soundtrack.length > 0 && (
            <button
              onClick={() => setActiveTab('soundtrack')}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap ${
                activeTab === 'soundtrack'
                  ? 'bg-accent/10 text-accent'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Soundtrack
            </button>
          )}
          
          <button
            onClick={() => setActiveTab('similar')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg whitespace-nowrap ${
              activeTab === 'similar'
                ? 'bg-accent/10 text-accent'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            Similar Movies
          </button>
        </div>
        
        {/* Streaming Options Tab */}
        {activeTab === 'streaming' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <PlayCircle className="h-6 w-6 mr-2 text-accent" />
              Where to Watch
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {movie.streamingOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="bg-accent/10 rounded-full p-2 mr-3">
                      <PlayCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{option.name}</p>
                      {option.price && (
                        <p className="text-sm text-muted-foreground">Rent from {option.price}</p>
                      )}
                    </div>
                  </div>
                  
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}
        
        {/* Scenes Tab */}
        {activeTab === 'scenes' && movie.scenes && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Film className="h-6 w-6 mr-2 text-accent" />
              Notable Scenes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {movie.scenes.map((scene) => (
                <SceneDetails key={scene.id} scene={scene} />
              ))}
            </div>
          </div>
        )}
        
        {/* Cast Tab */}
        {activeTab === 'cast' && movie.cast && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-accent" />
              Cast Members
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movie.cast.map((castMember) => (
                <CastMemberCard key={castMember.id} castMember={castMember} />
              ))}
            </div>
          </div>
        )}
        
        {/* Soundtrack Tab */}
        {activeTab === 'soundtrack' && movie.soundtrack && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Music className="h-6 w-6 mr-2 text-accent" />
              Soundtrack
            </h2>
            
            <SoundtrackList soundtrack={movie.soundtrack} />
          </div>
        )}
        
        {/* Similar Movies Tab */}
        {activeTab === 'similar' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Film className="h-6 w-6 mr-2 text-accent" />
              Similar Movies
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {movie.similarMovies.map((similar) => (
                <div key={similar.id} className="group">
                  <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 mb-2 transition-transform duration-300 group-hover:shadow-lg group-hover:scale-105">
                    <img 
                      src={similar.poster} 
                      alt={similar.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-medium text-sm truncate">{similar.title}</h3>
                  <p className="text-xs text-muted-foreground">{similar.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieResult;
