import connectDB from "db/connectDB";
import User from "db/Models/UserModel";
import { userExist } from "db/services/user.services";
import { hashPassword } from "db/utils/tools";

const signup = async (req, res) => {
 
  if (req.method === "POST") {
    try {
      await connectDB();

      const { email, password } = req.body;

      if (await userExist(email)) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }
      const hashedPassword = await hashPassword(password);

      const newUser = new User({
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({
        message: "User created",
        user: {
          email: newUser.email,
          profileImageUrl: newUser.profileImageUrl,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
};

export default signup;
