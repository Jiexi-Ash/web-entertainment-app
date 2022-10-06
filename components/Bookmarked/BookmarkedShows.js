import { useEffect, useState, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

import Show from "components/Shows/ShowsContainer/Show";

function BookmarkedShows({ shows = [], handleBookmark, title }) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="mb-12">
        <h2 className="text-[20px] text-white tracking-tighter md:text-[32px]">
          {title}
        </h2>
        <div
          ref={parent}
          className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6"
        >
          {shows &&
            shows.map((show) => (
              <Show
                key={show._id}
                show={show}
                handleBookmark={handleBookmark}
                type="remove"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BookmarkedShows;
