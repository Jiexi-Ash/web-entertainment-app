import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";
import { getShows } from "db/services/shows.services";
import connectDB from "db/connectDB";
import { toJSON } from "toJSON";
import Shows from "components/Shows/Shows";
import SearchIcon from "public/assets/icon-search.svg";

export default function Home({ shows }) {
  console.log(shows);

  return (
    <MainLayout>
      <div className="mt-6 mx-6">
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

        <Shows shows={shows} />
      </div>
    </MainLayout>
  );
}

// getStaticProps
export async function getStaticProps() {
  try {
    await connectDB();
    const shows = await getShows();

    return {
      props: {
        shows: toJSON(shows),
      },
    };
  } catch (error) {}
}
