import React from "react";
import BookmarkIconFull from "public/assets/icon-bookmark-full.svg";
import BookmarkIconEmpty from "public/assets/icon-bookmark-empty.svg";
import MovieIcon from "public/assets/icon-category-movie.svg";
import TvIcon from "public/assets/icon-category-tv.svg";
import Image from "next/image";

function RecommendedShow({ show = {} }) {
  const isMovie = show.category === "Movie";
  const isTv = show.category === "TV Series";
  console.log(isMovie);
  return (
    <div className="w-full">
      <div className="relative  max-w-[164px] h-[110px] md:max-w-[220px] md:h-[192px] lg:max-w-[280px] lg:h-[174px] transition-all duration-200">
        <Image
          src={show.thumbnail.regular.small}
          layout="fill"
          className="object-cover rounded-[8px]"
          alt="recommended-show"
        />

        <div className="absolute top-2 right-2 w-8 z-30  h-8 mx-auto bg-darkBlue/50 rounded-full">
          {show.isBookmarked ? (
            <BookmarkIconFull className="w-8 h-8 m-2.5 text-white" />
          ) : (
            <BookmarkIconEmpty className="w-8 h-8 m-2.5  text-transparent" />
          )}
        </div>
      </div>

      <div className="mt-2">
        <div className="flex space-x-2 items-center">
          <span className="text-xs text-white/75 md:text-[13px]">
            {show.year}
          </span>
          <div className="w-1 h-1  rounded-full bg-white/50"></div>
          <div className="flex space-x-2 items-center">
            {isMovie && <MovieIcon className="w-3 h-3 text-white/75" />}
            {isTv && <TvIcon className="w-3 h-3 text-white/75" />}

            <span className="text-xs text-white/75 md:text-[13px]">
              {show.category}
            </span>
          </div>
          <div className="w-1 h-1  rounded-full bg-white/50"></div>
          <span className="text-xs  text-white/75 md:text-[13px]">
            {show.rating}
          </span>
        </div>

        <p className="text-[15px] text-white font-medium mt-1 md:text-[18px]">
          {show.title}
        </p>
      </div>
    </div>
  );
}

export default RecommendedShow;
