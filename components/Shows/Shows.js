import React from "react";
import ShowsContainer from "./ShowsContainer/ShowsContainer";
import Trending from "./Trending";

function Shows({ shows = [], title, isFiltering }) {
  const trendingShows =
    shows && shows.filter((show) => show.isTrending === true);
 

  const recommendedShows = !isFiltering
    ? shows && shows.filter((show) => show.isTrending === false)
    : shows;

 

  return (
    <div>
      {!isFiltering && <Trending shows={trendingShows} />}

      <ShowsContainer shows={recommendedShows} title={title} />
    </div>
  );
}

export default Shows;
