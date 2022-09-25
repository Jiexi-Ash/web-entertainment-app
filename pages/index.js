import { useState, useEffect } from "react";
import MainLayout from "components/UI/MainLayout";
import { getShows } from "db/services/shows.services";
import connectDB from "db/connectDB";
import { toJSON } from "toJSON";
import Shows from "components/Shows/Shows";

export default function Home({ shows }) {
  console.log(shows);

  return (
    <MainLayout>
      <div className="mt-6 mx-6">
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
