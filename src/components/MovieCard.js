// MovieCard.jsx
import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import { useState } from 'react';

const MovieCard = ({ posterPath, votes, releaseDate, movieTilte }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-48 pr-4 overflow-hidden rounded-lg shadow-lg transition duration-200 transform hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto"
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-90 px-5 py-5">
          <h3 className="text-white font-bold text-xl mb-2">{movieTilte}</h3>
          <p className="text-white text-sm">{releaseDate}</p>
          <p className="text-white text-sm mb-1">{votes}⬆</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;



