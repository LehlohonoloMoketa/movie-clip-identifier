
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieResult from '@/components/MovieResult';
import { getRandomMovie, Movie } from '@/utils/movieData';
import { AlertCircle } from 'lucide-react';

const Result = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would use the uploaded clip ID to fetch actual result
    // For now, we'll simulate by getting a random movie from our mock data
    // with a slight delay to simulate processing
    const timer = setTimeout(() => {
      const identifiedMovie = getRandomMovie();
      setMovie(identifiedMovie);
      setIsLoading(false);
    }, 1000);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800 font-medium">Demo Result</p>
              <p className="text-xs text-blue-700 mt-1">
                This is a randomly selected movie from our demo database. A real implementation would use 
                computer vision AI to analyze your clip against a database of millions of movies and TV shows.
              </p>
            </div>
          </div>
        </div>
        <MovieResult movie={movie} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Result;
