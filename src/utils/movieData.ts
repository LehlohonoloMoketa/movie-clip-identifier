
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
}

export const randomMovies: Movie[] = [
  {
    id: "m1",
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    genre: ["Sci-Fi", "Action", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    rating: 8.8,
    streamingOptions: [
      {
        name: "Netflix",
        url: "https://www.netflix.com/title/70131314",
      },
      {
        name: "Amazon Prime",
        url: "https://www.amazon.com/Inception-Leonardo-DiCaprio/dp/B0047WJ11G",
        price: "$3.99"
      },
      {
        name: "Apple TV",
        url: "https://tv.apple.com/us/movie/inception/umc.cmc.5z6uicize1bp2mt2zcfmcvpzq",
        price: "$3.99"
      }
    ],
    similarMovies: [
      {
        id: "m2",
        title: "Interstellar",
        year: 2014,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },
      {
        id: "m3",
        title: "The Matrix",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      },
      {
        id: "m4",
        title: "Tenet",
        year: 2020,
        poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      }
    ]
  },
  {
    id: "m2",
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    genre: ["Drama", "Crime"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    rating: 9.3,
    streamingOptions: [
      {
        name: "HBO Max",
        url: "https://www.hbomax.com/feature/urn:hbo:feature:GXJvF4gPXmsPDwwEAAAM4",
      },
      {
        name: "Amazon Prime",
        url: "https://www.amazon.com/Shawshank-Redemption-Tim-Robbins/dp/B001OQCV2E",
        price: "$3.99"
      }
    ],
    similarMovies: [
      {
        id: "m5",
        title: "The Green Mile",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      },
      {
        id: "m6",
        title: "The Godfather",
        year: 1972,
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      },
      {
        id: "m7",
        title: "Forrest Gump",
        year: 1994,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      }
    ]
  },
  {
    id: "m3",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    genre: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GlG6ZeDs.jpg",
    rating: 8.9,
    streamingOptions: [
      {
        name: "Netflix",
        url: "https://www.netflix.com/title/880640",
      },
      {
        name: "Hulu",
        url: "https://www.hulu.com/movie/pulp-fiction-11030cae-fbe9-406e-9f18-5bfde9a0a072",
      }
    ],
    similarMovies: [
      {
        id: "m8",
        title: "Reservoir Dogs",
        year: 1992,
        poster: "https://image.tmdb.org/t/p/w500/AjTtJNumZyUDz33VtMlF1K8JPsE.jpg",
      },
      {
        id: "m9",
        title: "Fight Club",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      },
      {
        id: "m10",
        title: "The Departed",
        year: 2006,
        poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq2XRMmJmGFR.jpg",
      }
    ]
  }
];

export const getRandomMovie = (): Movie => {
  const randomIndex = Math.floor(Math.random() * randomMovies.length);
  return randomMovies[randomIndex];
};
