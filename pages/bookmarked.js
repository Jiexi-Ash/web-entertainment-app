import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "components/UI/MainLayout";
import Bookmarked from "components/Bookmarked/Bookmarked";
import connectDB from "db/connectDB";
import { getBookmarkedShows } from "db/services/shows.services";
import { setBookmarked } from "redux/reducers/showsSlice";
import { toJSON } from "toJSON";

function BookmarkedShows({ bookmarkedShows, error }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBookmarked(bookmarkedShows));
  }, []);

  return (
    <MainLayout>
      <div className="mt-6 mx-6 mb-9">
        {!error && <Bookmarked />}
        {error && <p className="text-center">{error}</p>}
      </div>
    </MainLayout>
  );
}

export default BookmarkedShows;

export const getStaticProps = async () => {
  try {
    await connectDB();
    const bookmarkedShows = await getBookmarkedShows();

    return {
      props: {
        bookmarkedShows: toJSON(bookmarkedShows),
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Something went wrong",
        bookmarkedShows: [],
      },
    };
  }
};
