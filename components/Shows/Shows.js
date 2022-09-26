import React from "react";
import RecommendedShows from "./RecommendedShows/RecommendedShows";
import Trending from "./Trending";

function Shows({ shows = [] }) {
  const trendingShows =
    shows && shows.filter((show) => show.isTrending === true);

  const recommendedShows =
    shows && shows.filter((show) => show.isTrending === false);

  console.log(recommendedShows);

  return (
    <div>
      <Trending trendingShows={trendingShows} />

      <RecommendedShows recommendedShows={recommendedShows} />
    </div>
  );
}

export default Shows;
