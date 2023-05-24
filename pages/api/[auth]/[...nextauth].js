import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  auth: {
    // Specify your event handlers
    // The createUser event is triggered when a new user is successfully created
    // You can define a custom event handler function to create a document in your MongoDB database
    async createUser(user) {
      // Connect to your MongoDB database
      // const { db } = await connectDatabase();
      
      // // Create a new document in your MongoDB collection
      // await db.collection('users').insertOne({
      //   name: user.name,
      //   email: user.email,
      //   createdAt: new Date(),
      //   // Add additional properties as needed
      // });

      console.log('AAAAAAAAAAAAAAAAAAAA')
    },
  },
}
export default NextAuth(authOptions)