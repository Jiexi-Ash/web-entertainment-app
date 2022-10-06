import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "components/UI/MainLayout";
import connectDB from "db/connectDB";
import { getTvSeries } from "db/services/shows.services";
import { toJSON } from "toJSON";
import { setSeries } from "redux/reducers/showsSlice";
import Series from "components/Series/Series";

function TVSeries({ tvSeries, error }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSeries(tvSeries));
  }, []);

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        {!error && <Series />}
        {error && <p className="text-center">{error}</p>}
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
  } catch (error) {
    return {
      props: {
        error: "Something went wrong",
        tvSeries: [],
      },
    };
  }
};
