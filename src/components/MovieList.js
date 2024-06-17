import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  console.log(movies);

  return (
    <div className="px-6">
    <h1 className="text-3xl py-6 text-red-600 font-bold">{title}</h1>
    <div className="flex overflow-x-scroll ">
      <div className="flex">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} movieTilte={movie.original_title} releaseDate={movie.release_date} votes={movie.vote_count}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;



