import Show from "db/Models/ShowModel";

export const getShows = async () => {
  try {
    const shows = await Show.find({});

    return shows;
  } catch (error) {
    throw error;
  }
};
