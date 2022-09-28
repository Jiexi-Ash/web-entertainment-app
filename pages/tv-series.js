import { useState } from "react";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";
import MainLayout from "components/UI/MainLayout";
import connectDB from "db/connectDB";
import { getTvSeries } from "db/services/shows.services";
import { toJSON } from "toJSON";
import SearchIcon from "public/assets/icon-search.svg";

function TVSeries({ tvSeries }) {
  const [value, setValue] = useState("");
  const [series, setSeries] = useState(tvSeries);

  const handleSearch = (e) => {
    setValue(e.target.value.toLowerCase());

    const filteredSeries = tvSeries.filter((series) => {
      return series.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setSeries(filteredSeries);

    if (value === "") {
      setSeries(tvSeries);
    }
  };

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        <div className="w-full md:max-w-[400px]">
          <form>
            <div className="relative flex items-center ">
              <SearchIcon className="absolute top-3 left-0  text-white md:top-5 md:left-0 " />
              <input
                type="text"
                placeholder="Search for Tv Series"
                className="w-full z-30 pl-12 pr-4 py-5  text-sm text-white border-none  bg-transparent rounded-md caret-primaryRed focus:outline-none focus:ring-0 md:placeholder:text-2xl md:text-2xl"
                value={value}
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
        <ShowsContainer shows={series} title="TV Series" />
      </div>
    </MainLayout>
  );
}

export default TVSeries;

export const getStaticProps = async () => {
  try {
    await connectDB();
    const tvSeries = await getTvSeries();

    return {
      props: {
        tvSeries: toJSON(tvSeries),
      },
    };
  } catch (error) {}
};
