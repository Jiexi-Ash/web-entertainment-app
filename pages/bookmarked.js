import React from "react";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";
import MainLayout from "components/UI/MainLayout";
import Bookmarked from "components/Shows/Bookmarked";
import connectDB from "db/connectDB";
import { getBookmarkedShows } from "db/services/shows.services";
import { toJSON } from "toJSON";
import SearchIcon from "public/assets/icon-search.svg";

function BookmarkedShows({ bookmarkedShows }) {
  
  return (
    <MainLayout>
      <div className="w-full md:max-w-[400px]">
        <form>
          <div className="relative flex items-center space-x-2">
            <SearchIcon className="absolute top-3 left-0 ml-2 text-white md:top-5 md:left-0 " />
            <input
              type="text"
              placeholder="Search for movies or Tv Series"
              className="w-full z-30 pl-12 pr-4 py-5 text-sm text-white border-none  bg-transparent rounded-md focus:outline-none focus:ring-0 md:placeholder:text-2xl md:text-2xl"
            />
          </div>
        </form>
      </div>
      <div className="mt-6 mx-6 mb-9">
        <Bookmarked shows={bookmarkedShows} />
      </div>
    </MainLayout>
  );
}

export default BookmarkedShows;

export const getStaticProps = async () => {
  try {
    await connectDB();
    const bookmarkedShows = await getBookmarkedShows();

    return {
      props: {
        bookmarkedShows: toJSON(bookmarkedShows),
      },
    };
  } catch (error) {}
};
