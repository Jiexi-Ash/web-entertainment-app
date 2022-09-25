import React from "react";
import Trending from "./Trending";

function Shows({ shows = [] }) {
  const trendingShows =
    shows && shows.filter((show) => show.isTrending === true);

  return (
    <div>
      <Trending trendingShows={trendingShows} />
    </div>
  );
}

export default Shows;
