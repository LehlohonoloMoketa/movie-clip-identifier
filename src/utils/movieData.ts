
// This file is now just re-exporting from our refactored structure
// This maintains backward compatibility with existing imports
export type { Movie, MovieScene, SoundtrackItem, CastMember } from '@/types/movieTypes';
export { mockMovies as randomMovies } from '@/data/mockMovies';
export { getRandomMovie } from '@/utils/movieUtils';
