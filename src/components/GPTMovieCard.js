import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const GPTMovieCard = ({ posterPath, title, year, type, imdbID }) => {
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
        alt={title}
        src={posterPath}
        className="w-full h-auto"
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-90 px-5 py-5">
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          <p className="text-white text-sm">Year: {year}</p>
          <p className="text-white text-sm">Type: {type}</p>
          <p className="text-white text-sm">IMDB ID: {imdbID}</p>
        </div>
      )}
    </div>
  );
};

export default GPTMovieCard;
