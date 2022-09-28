import BookmarkIconFull from "public/assets/icon-bookmark-full.svg";
import BookmarkIconEmpty from "public/assets/icon-bookmark-empty.svg";
import MovieIcon from "public/assets/icon-category-movie.svg";
import PlayIcon from "public/assets/icon-play.svg";
import TvIcon from "public/assets/icon-category-tv.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

function BookmarkedShow({ show = {}, handleBookmark }) {
  const isMovie = show.category === "Movie";
  const isTv = show.category === "TV Series";
  return (
    <div className="w-full cursor-pointer">
      <div className="relative  max-w-[164px] h-[110px] group md:max-w-[220px] md:h-[192px] lg:max-w-[280px] lg:h-[174px] transition-all duration-200 ">
        <div class="hidden absolute z-30  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 group-hover:block ">
          <div className="flex space-x-2 items-center  w-[117px] h-[48px] rounded-full bg-white/25 p-2">
            <PlayIcon className="w-8 h-8 text-white" />
            <span className="text-[18px] text-white font-medium">Play</span>
          </div>
        </div>
        <div className="relative block w-full h-full md:hidden lg:hidden ">
          <Image
            src={show.thumbnail.regular.small}
            layout="fill"
            className="object-cover rounded-[8px]"
            alt="recommended-show"
          />
        </div>
        <div className="relative hidden w-full h-full md:block lg:hidden">
          <Image
            src={show.thumbnail.regular.medium}
            layout="fill"
            className="object-cover rounded-[8px]"
            alt="recommended-show"
          />
        </div>

        <div className="relative hidden w-full h-full md:hidden lg:block">
          <Image
            src={show.thumbnail.regular.large}
            layout="fill"
            className="object-cover rounded-[8px]"
            alt="recommended-show"
          />
        </div>

        <div
          className="absolute top-2 right-2 w-8 z-30  h-8 mx-auto bg-darkBlue/50 rounded-full"
          onClick={() => handleBookmark(show._id)}
        >
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

export default BookmarkedShow;
