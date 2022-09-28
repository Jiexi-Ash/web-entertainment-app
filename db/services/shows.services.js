import Show from "db/Models/ShowModel";

export const getShows = async () => {
  try {
    const shows = await Show.find({});

    return shows;
  } catch (error) {
    throw error;
  }
};

export const getMovies = async () => {
  try {
    const shows = await Show.find({ category: "Movie" });

    return shows;
  } catch (e) {}
};

export const getTvSeries = async () => {
  try {
    const shows = await Show.find({ category: "TV Series" });

    return shows;
  } catch (e) {}
};

export const getBookmarkedShows = async () => {
  try {
    const shows = await Show.find({ isBookmarked: true });

    return shows;
  } catch (error) {}
};

export const bookmarkShow = async (showId) => {
  
  try {
    const show = await Show.findById(showId);
    

    show.isBookmarked = !show.isBookmarked;

    await show.save();
    

    return show;
  } catch (error) {}
};
