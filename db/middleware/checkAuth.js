import { getSession } from "next-auth/react";

const checkAuth = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  req.session = session;
  next();
};

export default checkAuth;
