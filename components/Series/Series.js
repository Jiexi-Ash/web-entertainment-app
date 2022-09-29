import Search from "components/Search";
import ShowsContainer from "components/Shows/ShowsContainer/ShowsContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Series() {
  const [title, setTitle] = useState("Tv Series");
  const [tvShows, setTvShows] = useState([]);
  const series = useSelector((state) => state.shows?.series);

  useEffect(() => {
    if (series) {
      setTvShows(series);
    }
  }, []);

  const handleSearch = (value) => {
    const filteredSeries = series.filter((series) => {
      return series.title.toLowerCase().includes(value.toLowerCase());
    });

    setTvShows(filteredSeries);
    setTitle(`found ${filteredSeries.length} results`);

    if (value === "") {
      setTvShows(series);
      setTitle("Tv Series");
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} placeholder="Search for Tv series" />
      {tvShows && <ShowsContainer shows={tvShows} title={title} />}{" "}
    </>
  );
}

export default Series;
