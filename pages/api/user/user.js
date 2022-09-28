import nc from "next-connect";
import { findUserByEmail } from "db/services/user.services";
import connectDB from "db/connectDB";
import checkAuth from "db/middleware/checkAuth";

const handler = nc({
  onError(error, req, res) {
    res.status(500).json({
      message: error.message,
    });
  },
})
  .use(checkAuth)
  .get(async (req, res) => {
    try {
     
      await connectDB();
      const user = await findUserByEmail(req.session.user.email, {
        password: 0,
      });

     

      res.status(200).json({
        message: "User found",
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  });

export default handler;
