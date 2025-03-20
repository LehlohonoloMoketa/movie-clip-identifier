
export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  genre: string[];
  description: string;
  poster: string;
  backdrop: string;
  rating: number;
  streamingOptions: {
    name: string;
    url: string;
    price?: string; // optional for purchase options
  }[];
  similarMovies: {
    id: string;
    title: string;
    year: number;
    poster: string;
  }[];
  scenes?: MovieScene[];
  soundtrack?: SoundtrackItem[];
  cast?: CastMember[];
}

export interface MovieScene {
  id: string;
  timeframe: string; // e.g., "01:24:15"
  description: string;
  image?: string;
  location?: {
    name: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  trivia?: string[];
}

export interface SoundtrackItem {
  title: string;
  artist: string;
  timeframe: string; // e.g., "01:05:23"
  spotifyUrl?: string;
}

export interface CastMember {
  id: string;
  name: string;
  character: string;
  profile: string;
  scenes?: string[]; // IDs of scenes they appear in
  otherMovies?: {
    id: string;
    title: string;
    year: number;
    poster: string;
  }[];
}
