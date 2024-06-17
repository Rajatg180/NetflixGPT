import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {/* if showGptSerach is true then we will show showGptSearch Component else mainContiner and secondarycontiner */}
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
