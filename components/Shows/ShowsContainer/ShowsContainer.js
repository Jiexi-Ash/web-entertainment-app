import { useEffect, useRef } from "react";
import Show from "./Show";
import axios from "axios";
import autoAnimate from "@formkit/auto-animate";

function ShowsContainer({ shows = [], title }) {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleBookmark = async (showID) => {
    const show = await axios.patch("/api/shows/bookmark", {
      showID: showID,
    });

    return show.data;
  };

  return (
    <div>
      <h1 className="text-[20px] text-white tracking-tighter md:text-[32px]">
        {title}
      </h1>

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
              type="toggle"
            />
          ))}
      </div>
    </div>
  );
}

export default ShowsContainer;
