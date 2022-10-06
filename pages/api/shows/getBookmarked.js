import nc from "next-connect";
import checkAuth from "db/middleware/checkAuth";
import connectDB from "db/connectDB";
import { getBookmarkedShows } from "db/services/shows.services";

export default nc({
  onError(error, req, res) {
    res.status(501).json({ error: "Sorry something went wrong." });
  },
})
  .use(checkAuth)
  .get(async (req, res) => {
    try {
      await connectDB();

      const shows = await getBookmarkedShows();

      res.status(200).json(shows);
    } catch (error) {
      res.status(500).json({ error: "Sorry something went wrong." });
    }
  });
