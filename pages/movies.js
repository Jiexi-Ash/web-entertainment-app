import MainLayout from "components/UI/MainLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "redux/reducers/showsSlice";
import { getMovies } from "db/services/shows.services";
import connectDB from "db/connectDB";
import { toJSON } from "toJSON";
import Movies from "components/Movies/Movies";

function MoviesPage({ shows, error }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMovies(shows));
  }, []);

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        {!error && <Movies />}
        {error && <p className="text-center">{error}</p>}
      </div>
    </MainLayout>
  );
}

export default MoviesPage;

export const getStaticProps = async () => {
  try {
    await connectDB();
    const shows = await getMovies();

    return {
      props: {
        shows: toJSON(shows),
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Something went wrong",
        shows: [],
      },
    };
  }
};
