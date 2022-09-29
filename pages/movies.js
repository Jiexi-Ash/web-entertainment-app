import MainLayout from "components/UI/MainLayout";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "redux/reducers/showsSlice";

import SearchIcon from "public/assets/icon-search.svg";
import connectDB from "db/connectDB";
import { getMovies } from "db/services/shows.services";
import { toJSON } from "toJSON";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";
import Movies from "components/Movies/Movies";

function MoviesPage({ shows }) {
  // inputref
  const inputRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [title, setTitle] = useState("Movies");
  const [value, setValue] = useState("");
  // const [movies, setMovies] = useState(shows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(shows));
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const inputValue = inputRef.current.value.toLowerCase();

  //   if (inputValue.length > 0) {
  //     setIsFilter(true);
  //     const filteredMovies = movies.filter((movie) => {
  //       return movie.title.toLowerCase().includes(inputValue);
  //     });

  //     setMovies(filteredMovies);

  //     setTitle(`Found ${filteredMovies.length} results for "${inputValue}"`);
  //   }

  //   if (inputValue === "") {
  //     setMovies(shows);
  //     setTitle("Movies");
  //   }
  // };

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        <Movies />
      </div>
    </MainLayout>
  );
}

export default MoviesPage;

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
