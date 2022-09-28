import { useState, useRef } from "react";
import MainLayout from "components/UI/MainLayout";
import { getShows } from "db/services/shows.services";
import connectDB from "db/connectDB";
import { toJSON } from "toJSON";
import Shows from "components/Shows/Shows";
import SearchIcon from "public/assets/icon-search.svg";

export default function Home({ shows }) {
  const inputRef = useRef(null);
  const [title, setTitle] = useState("Recommended Shows");
  const [isFiltering, setIsFiltering] = useState(false);
  const [allShows, setAllShows] = useState(shows);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.toLowerCase();

    if (inputValue.length > 0) {
      setIsFiltering(true);
      const filteredShows = shows.filter((show) => {
        return show.title.toLowerCase().includes(inputValue);
      });

      setAllShows(filteredShows);
    
      setTitle(`Found ${filteredShows.length} results for "${inputValue}"`);
    }

    if (inputValue === "") {
      setIsFiltering(false);
      setAllShows(shows);
      setTitle("Recommended Shows");
    }
  };

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        <div className="w-full md:max-w-[400px]">
          <form onSubmit={handleSearch}>
            <div className="relative flex items-center">
              <SearchIcon className="absolute top-3 left-0 text-white md:top-5 md:left-0 " />
              <input
                type="text"
                placeholder="Search for movies or Tv Series"
                className="w-full z-30 pl-12 pr-4 py-5 text-sm text-white border-none  bg-transparent rounded-md caret-primaryRed focus:outline-none focus:ring-0 md:placeholder:text-2xl md:text-2xl"
                ref={inputRef}
              />
            </div>
          </form>
        </div>

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
