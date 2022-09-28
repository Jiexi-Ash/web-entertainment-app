import { useState } from "react";
import BookmarkedShow from "./BookmarkedShow";
import axios from "axios";

function Bookmarked({ shows = [] }) {
  const [bookmarkedShows, setBookmarkedShows] = useState(shows);
  
  const bookmarkedMovies =
    bookmarkedShows &&
    bookmarkedShows.filter(
      (show) => show.isBookmarked === true && show.category === "Movie"
    );



  const bookmarkedTvSeries =
    bookmarkedShows &&
    bookmarkedShows.filter(
      (show) => show.isBookmarked === true && show.category === "TV Series"
    );

  const handleBookmark = async (showID) => {
    const show = await axios.patch("/api/shows/bookmark", {
      showID,
    });

    if (show.data) {
      const filteredShows = bookmarkedShows.filter(
        (show) => show._id !== showID
      );

      setBookmarkedShows(filteredShows);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="mb-12">
        <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
          Bookmarked Movies
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
          {bookmarkedMovies &&
            bookmarkedMovies.map((bookmarkedMovie) => (
              <BookmarkedShow
                key={bookmarkedMovie._id}
                show={bookmarkedMovie}
                handleBookmark={handleBookmark}
              />
            ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
          Bookmarked Tv Series
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
          {bookmarkedTvSeries &&
            bookmarkedTvSeries.map((bookmarkedTvSeries) => (
              <BookmarkedShow
                key={bookmarkedTvSeries._id}
                show={bookmarkedTvSeries}
                handleBookmark={handleBookmark}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Bookmarked;
