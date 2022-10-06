import Search from "components/Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkedShows } from "redux/reducers/showsSlice";
import axios from "axios";
import BookmarkedShows from "./BookmarkedShows";

function Bookmarked() {
  const dispatch = useDispatch();

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
  }, [getBookmarkedShows]);

  const handleSearch = (value) => {
    const filteredShows = bookmarked.filter((show) => {
      return show.title.toLowerCase().includes(value.toLowerCase());
    });

    setBookmarked(filteredShows);
    setTitle(`found ${filteredShows.length} results for "${value}"`);
    setIsFilter(true);

    if (value === "") {
      setIsFilter(false);
      dispatch(bookmarkedShows());
      setBookmarked(getBookmarkedShows);

      setTitle("Bookmarked shows");
    }
  };

  const handleBookmark = async (showID) => {
    await axios.patch("/api/shows/bookmark", {
      showID: showID,
    });

    const filteredShows = bookmarked.filter((show) => {
      return show._id !== showID;
    });

    setBookmarked(filteredShows);
  };

  return (
    <>
      <Search
        placeholder="Search for bookmarked shows"
        handleSearch={handleSearch}
      />
      {!isFilter && (
        <>
          <BookmarkedShows
            shows={movies}
            title="Bookmarked Movies"
            handleBookmark={handleBookmark}
          />
          <BookmarkedShows
            shows={tvSeries}
            handleBookmark={handleBookmark}
            title="TV shows"
          />
        </>
      )}
      {isFilter && (
        <BookmarkedShows
          shows={bookmarked}
          title={title}
          handleBookmark={handleBookmark}
        />
      )}
    </>
  );
}

export default Bookmarked;
