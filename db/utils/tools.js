import bcryptjs from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);
  return hashPassword;
};

export const comparePassword = async (password, hashPassword) => {
  const isMatch = await bcryptjs.compare(password, hashPassword);
  return isMatch;
};
