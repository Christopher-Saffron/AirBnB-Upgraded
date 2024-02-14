import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import Account from "@/models/Account";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      await dbConnect();
      console.log(user.user);
      const existingUser = await Account.findOne({ email: user.user.email });
      if (existingUser) {
        return Promise.resolve(true);
      } else {
        const newUser = await new Account({ email: user.user.email });
        newUser.save();
        return Promise.resolve(true);
      }
    },
  },
};
export default NextAuth(authOptions);
