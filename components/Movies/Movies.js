import Search from "components/Search";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Movies() {
  const [title, setTitle] = useState("Movies");
  const [movies, setMovies] = useState([]);
  const getMovies = useSelector((state) => state.shows?.movies);

  useEffect(() => {
    if (getMovies) {
      setMovies(getMovies);
    }
  }, []);

  const handleSearch = (value) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(value.toLowerCase());
    });

    setMovies(filteredMovies);
    setTitle(`found ${filteredMovies.length} results`);

    if (value === "") {
      setMovies(getMovies);
      setTitle("Movies");
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} placeholder="Search for movies" />
      {movies && <ShowsContainer shows={movies} title={title} />}{" "}
    </>
  );
}

export default Movies;
