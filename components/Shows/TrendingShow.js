import { useState } from "react";
import Image from "next/image";

import BookmarkIcon from "public/assets/icon-bookmark-empty.svg";
import PlayIcon from "public/assets/icon-play.svg";
import BookmarkIconFull from "public/assets/icon-bookmark-full.svg";
import BookmarkIconEmpty from "public/assets/icon-bookmark-empty.svg";
import MovieIcon from "public/assets/icon-category-movie.svg";
import TvIcon from "public/assets/icon-category-tv.svg";
import axios from "axios";

function TrendingShow({ show = {} }) {
  const [trendingShow, setTrendingShow] = useState(show);
  

  const thumbnail = trendingShow.thumbnail.trending.small;

  const isMovie = trendingShow.category === "Movie";
  const isTv = trendingShow.category === "TV Series";

  const handleBookmark = async (showID) => {
    const show = await axios.patch("/api/shows/bookmark", {
      showID,
    });

    if (show.data) {
      setTrendingShow(show.data);
    }
  };

  return (
    <div className="relative flex-shrink-0  w-full h-[140px] group max-w-[240px] mr-4 md:max-w-[470px] md:h-[230px]  rounded-md">
      <div class="hidden absolute z-30  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 group-hover:block ">
        <div className="flex space-x-2 items-center  w-[117px] h-[48px] rounded-full bg-white/25 p-2">
          <PlayIcon className="w-8 h-8 text-white" />
          <span className="text-[18px] text-white font-medium">Play</span>
        </div>
      </div>
      <div className="block relative w-full h-full md:hidden lg:hidden">
        <Image
          src={thumbnail}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          alt="trending-show"
        />
      </div>

      <div className="hidden relative w-full h-full md:block">
        <Image
          src={trendingShow.thumbnail.trending.large}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          alt="trending-show"
        />
      </div>

      <div
        className="absolute top-2 right-2 w-11  h-11 mx-auto bg-darkBlue/50 rounded-full cursor-pointer"
        onClick={() => handleBookmark(trendingShow._id)}
      >
        {trendingShow.isBookmarked && (
          <BookmarkIconFull className="w-11 h-11 m-4 text-white" />
        )}

        {!trendingShow.isBookmarked && (
          <BookmarkIconEmpty className="w-11 h-11 m-4 text-transparent" />
        )}
      </div>

      <div className="absolute bottom-4 left-4">
        <div className="flex space-x-2 items-center">
          <span className="text-xs text-white/75 md:text-[16px]">
            {trendingShow.year}
          </span>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex space-x-2 items-center">
            {isMovie && <MovieIcon className="w-3 h-3 text-white/75" />}
            {isTv && <TvIcon className="w-3 h-3 text-white/75" />}
            <span className="text-xs text-white/75 md:text-[16px]">
              {trendingShow.category}
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
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
