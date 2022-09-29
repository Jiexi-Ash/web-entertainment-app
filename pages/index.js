import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "components/UI/MainLayout";
import { getShows } from "db/services/shows.services";
import connectDB from "db/connectDB";
import { toJSON } from "toJSON";
import Shows from "components/Shows/Shows";
import SearchIcon from "public/assets/icon-search.svg";
import { setShows } from "redux/reducers/showsSlice";
import Search from "components/Search";

export default function Home({ shows }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [title, setTitle] = useState("Recommended Shows");
  const [isFiltering, setIsFiltering] = useState(false);
  const [allShows, setAllShows] = useState(shows);

  useEffect(() => {
    dispatch(setShows(shows));
  }, []);

  const handleSearch = (value) => {
    if (value.length > 0) {
      setIsFiltering(true);
      const filteredShows = shows.filter((show) => {
        return show.title.toLowerCase().includes(value);
      });

      setAllShows(filteredShows);

      setTitle(`Found ${filteredShows.length} results for "${value}"`);
    }

    if (value === "") {
      setIsFiltering(false);
      setAllShows(shows);
      setTitle("Recommended Shows");
    }
  };

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        <Search handleSearch={handleSearch} />

        <Shows shows={allShows} title={title} isFiltering={isFiltering} />
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    await connectDB();
    const shows = await getShows();

    return {
      props: {
        shows: toJSON(shows),
      },
    };
  } catch (error) {}
}
