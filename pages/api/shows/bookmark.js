import nc from "next-connect";
import checkAuth from "db/middleware/checkAuth";
import connectDB from "db/connectDB";
import { bookmarkShow } from "db/services/shows.services";

export default nc({
  onError(error, req, res) {
    res.status(501).json({ error: "Sorry something went wrong." });
  },
})
  .use(checkAuth)
  .patch(async (req, res) => {
    try {
      await connectDB();

      const show = await bookmarkShow(req.body.showID);

      res.status(200).json(show);
    } catch (error) {
      res.status(500).json({ error: "Sorry something went wrong." });
    }
  });
