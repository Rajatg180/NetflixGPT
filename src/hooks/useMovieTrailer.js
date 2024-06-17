import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    
  const dispatch = useDispatch();
  
  // video trailer api call
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    // get the only trailer from the video
    const filterData = json.results.filter((video) => video.type === "Trailer");

    // It will return may trailer so we will take only first
    // if our obj do not have triler then we will take the first video whatever it is
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // store the trailer to the redux store
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMovieVideo();
  }, []);

}

export default useMovieTrailer;