import { useState } from "react";
import Image from "next/image";
import TrendingShow from "./TrendingShow";
import axios from "axios";

function Trending({ shows = [] }) {
  return (
    <div className="px-2 py-4  ">
      <h1 className="text-[20px] text-white text-left tracking-tighter md:text-[32px]">
        Trending
      </h1>

      <div className="w-full flex mt-[16px] max-w-[1000px] md:max-w-[2500px]  overflow-x-auto scrollbar-none">
        {shows &&
          shows.map((trendingShow) => (
            <TrendingShow key={trendingShow._id} show={trendingShow} />
          ))}
      </div>
    </div>
  );
}

export default Trending;
