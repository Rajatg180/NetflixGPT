
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = ()=>{

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    // adding movies to the movies slice 
    dispatch(addNowPlayingMovies(json.results))

  };

  //   only make one api call on inital render
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;