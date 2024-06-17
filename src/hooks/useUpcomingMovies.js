import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
  
      // adding movies to the movies slice 
      dispatch(addUpcomingMovies(json.results))
  
    };
  
    //   only make one api call on inital render
    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies