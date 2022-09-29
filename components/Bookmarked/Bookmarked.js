import Search from "components/Search";
import Show from "components/Shows/ShowsContainer/Show";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Bookmarked({ handleFilter }) {
  const [isFilter, setIsFilter] = useState(false);
  const [title, setTitle] = useState("Bookmarked shows");
  const [bookmarked, setBookmarked] = useState([]);
  const getBookmarkedShows = useSelector(
    (state) => state.shows?.bookmarkedShows
  );

  const tvSeries =
    bookmarked && bookmarked.filter((show) => show.category === "TV Series");

  const movies =
    bookmarked && bookmarked.filter((show) => show.category === "Movie");
  useEffect(() => {
    if (getBookmarkedShows) {
      setBookmarked(getBookmarkedShows);
    }
  }, []);

  const handleSearch = (value) => {
    const filteredShows = bookmarked.filter((show) => {
      return show.title.toLowerCase().includes(value.toLowerCase());
    });

    setBookmarked(filteredShows);
    setTitle(`found ${filteredShows.length} results for "${value}"`);
    setIsFilter(true);

    if (value === "") {
      setIsFilter(false);
      setBookmarked(getBookmarkedShows);
      setTitle("Bookmarked shows");
    }
  };

  return (
    <>
      <Search
        placeholder="Search for bookmarked shows"
        handleSearch={handleSearch}
      />
      {!isFilter && (
        <>
          <div className="mb-12">
            <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
              Bookmarked Movies
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
              {/* map all tv series */}
              {movies &&
                movies.map((show) => <Show key={show._id} show={show} />)}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="mb-12">
              <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
                TV Shows
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
                {tvSeries &&
                  tvSeries.map((show) => <Show key={show._id} show={show} />)}
              </div>
            </div>
          </div>
        </>
      )}
      {isFilter && (
        <div className="flex flex-col space-y-4">
          <div className="mb-12">
            <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
              {title}
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
              {bookmarked &&
                bookmarked.map((show) => <Show key={show._id} show={show} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Bookmarked;
