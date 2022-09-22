import User from "db/Models/UserModel";

export const findUserByEmail = async (email, select) => {
  const user = await User.findOne({ email }).select(select);
  return user;
};

export const userExist = async (email) => {
  const user = await findUserByEmail(email);
  return user ? true : false;
};
