import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstant";

const SecondaryConatiner = () => {

  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);
  
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList
            title={lang[langKey].nowPlaying}
            movies={movies.nowPlayingMovies}
          ></MovieList>
          <MovieList
            title={lang[langKey].popular}
            movies={movies.popularMovies}
          ></MovieList>
          <MovieList
            title={lang[langKey].upComingMovies}
            movies={movies.upcomingMovies}
          ></MovieList>
          <MovieList
            title={lang[langKey].topRated}
            movies={movies.topRatedMovies}
          ></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondaryConatiner;
