import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addGptMovies } from "../utils/moviesSlice";


const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();
  
  const searchText = useRef(null);

  const handGptSearchClick = async ()=>{

    const searchtext = searchText.current.value
    
    const searchUrl = `https://www.omdbapi.com/?apikey=d4547e3c&s=${searchtext}`;
    try {
      let { data, status } = await axios.get(searchUrl);
      if (status === 200 && data.Response === "True" && data?.Search) {
        console.log(data.Search);
        dispatch(addGptMovies(data?.Search));
      } else throw data;
    } catch (error) {
      console.error(error);
      dispatch(addGptMovies("No movies found provide movie name"));
    }
    
  }

  return (
    <div className="flex justify-center items-center pt-[10%] ">
      <form
        className="flex w-full max-w-lg bg-white rounded-lg shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-red-600 shadow-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-r-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-lg"
          onClick={handGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
