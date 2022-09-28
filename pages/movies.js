import MainLayout from "components/UI/MainLayout";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "public/assets/icon-search.svg";
import connectDB from "db/connectDB";
import { getMovies } from "db/services/shows.services";
import { toJSON } from "toJSON";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";

function Movies({ shows }) {
  // inputref
  const inputRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [title, setTitle] = useState("Movies");
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState(shows);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.toLowerCase();

    if (inputValue.length > 0) {
      setIsFilter(true);
      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(inputValue);
      });

      setMovies(filteredMovies);
    
      setTitle(`Found ${filteredMovies.length} results for "${inputValue}"`);
    }

    if (inputValue === "") {
      setMovies(shows);
      setTitle("Movies");
    }
  };

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        <div className="w-full md:max-w-[400px]">
          <form onSubmit={handleSearch}>
            <div className="relative flex items-center">
              <SearchIcon className="absolute top-3 left-0  text-white md:top-5 md:left-0 " />
              <input
                type="text"
                placeholder="Search for movies or Tv Series"
                className="w-full z-30 pl-12 pr-4 py-5 text-sm text-white border-none  bg-transparent rounded-md caret-primaryRed focus:outline-none focus:ring-0 md:placeholder:text-2xl md:text-2xl"
                ref={inputRef}
              />
            </div>
          </form>
        </div>
        <ShowsContainer shows={movies} title={title} />
      </div>
    </MainLayout>
  );
}

export default Movies;

export const getStaticProps = async () => {
  try {
    await connectDB();
    const shows = await getMovies();

    return {
      props: {
        shows: toJSON(shows),
      },
    };
  } catch (error) {}
};
