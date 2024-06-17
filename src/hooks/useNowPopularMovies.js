import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const useNowPopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
  
      // adding movies to the movies slice 
      dispatch(addPopularMovies(json.results))
  
    };
  
    //   only make one api call on inital render
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default useNowPopularMovies