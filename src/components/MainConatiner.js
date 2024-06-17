import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainConatiner = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // initially the store will be zero 
  // earlly return 
  if(!movies){
    return ;
  }
  
  // getting the first movie which we have stored in redux store 
  const mainMovie = movies[9];


  const {original_title,overview,id}=mainMovie;


  return <div className="-mt-28">
    <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
  </div>;

};

export default MainConatiner;
