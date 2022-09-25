import React from "react";
import Image from "next/image";
import BookmarkIcon from "public/assets/icon-bookmark-empty.svg";
import MovieIcon from "public/assets/icon-category-movie.svg";

function TrendingShow({ trendingShow = {} }) {
  const thumbnail = trendingShow.thumbnail.trending.small;
  return (
    <div className="relative flex-shrink-0  w-full h-[140px] max-w-[240px] mr-4 md:max-w-[470px] md:h-[230px]  rounded-md">
      <Image
        src={thumbnail}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        alt="trending-show"
      />
      <div className="absolute top-2 right-2 w-11  h-11 mx-auto bg-darkBlue/50 rounded-full">
        <BookmarkIcon className="w-11 h-11 m-4  text-transparent" />
      </div>

      <div className="absolute bottom-4 left-4">
        <div className="flex space-x-2 items-center">
          <span className="text-xs text-white/75 md:text-[16px]">
            {trendingShow.year}
          </span>
          <div className="w-1 h-1 bg-red-500 rounded-full bg-white/50"></div>
          <div className="flex space-x-2 items-center">
            <MovieIcon className="w-3 h-3 text-white/75" />
            <span className="text-xs text-white/75 md:text-[16px]">
              {trendingShow.category}
            </span>
          </div>
          <div className="w-1 h-1 bg-red-500 rounded-full bg-white/50"></div>
          <span className="text-xs  text-white/75 md:text-[16px]">
            {trendingShow.rating}
          </span>
        </div>

        <p className="text-[15px] text-white font-medium md:text-2xl">
          {trendingShow.title}
        </p>
      </div>
    </div>
  );
}

export default TrendingShow;
