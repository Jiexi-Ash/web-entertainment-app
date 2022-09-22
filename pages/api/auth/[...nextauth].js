import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { findUserByEmail } from "db/services/user.services";
import { comparePassword } from "db/utils/tools";
import connectDB from "db/connectDB";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialProvider({
      async authorize(credentials) {
        await connectDB();

        const user = await findUserByEmail(credentials.email, {});

        if (!user) {
          throw new Error("User does not exist");
        }

        const isPasswordCorrect = await comparePassword(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return {
          email: user.email,
        };
      },
    }),
  ],
});
