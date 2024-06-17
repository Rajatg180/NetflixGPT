import React from "react";
import { useSelector } from "react-redux";
import GPTMovieCard from "./GPTMovieCard";

const GPTMovieSuggestions = () => {
  const movies = useSelector((store) => store.movies.gptMovies);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 p-10 bg-transparent">
        {movies === "No movies found provide movie name" ? (
          <h1 className="text-2xl font-bold text-white mt-10 flex justify-center items-center">No movies found provide valid movie name</h1>
        ) : (
          movies?.map((movie) => (
            <GPTMovieCard
              key={movie.imdbID}
              posterPath={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              type={movie.Type}
              imdbID={movie.imdbID}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;


