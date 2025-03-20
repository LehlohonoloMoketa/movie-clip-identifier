
import { Movie } from '@/types/movieTypes';
import { mockMovies } from '@/data/mockMovies';

export const getRandomMovie = (): Movie => {
  const randomIndex = Math.floor(Math.random() * mockMovies.length);
  return mockMovies[randomIndex];
};
