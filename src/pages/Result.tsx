
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MovieResult from '@/components/MovieResult';
import { getRandomMovie, Movie } from '@/utils/movieData';

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
        <MovieResult movie={movie} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Result;
