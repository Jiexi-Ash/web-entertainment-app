import React from "react";
import BookmarkIconFull from "public/assets/icon-bookmark-full.svg";
import BookmarkIconEmpty from "public/assets/icon-bookmark-empty.svg";
import MovieIcon from "public/assets/icon-category-movie.svg";
import Image from "next/image";
import Show from "./Show";

function ShowsContainer({ shows = [], title }) {
  return (
    <div>
      <h1 className="text-[20px] text-white tracking-tighter md:text-[32px]">
        {title}
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-6  md:grid-cols-3 md:gap-[29px] lg:grid-cols-4 lg:gap-10 xl:grid-cols-6">
        {shows && shows.map((show) => <Show key={show._id} show={show} />)}
      </div>
    </div>
  );
}

export default ShowsContainer;
