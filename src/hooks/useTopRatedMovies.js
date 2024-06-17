import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
  
      // adding movies to the movies slice 
      dispatch(addTopRatedMovies(json.results))
  
    };
  
    //   only make one api call on inital render
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies