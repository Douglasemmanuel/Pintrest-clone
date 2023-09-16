import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          // clientId:"716061718003-tm6l8fmspm9aruis53o9hv3rh5falekl.apps.googleusercontent.com",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
          // clientSecret: "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",
          
        })
      ]
})

export { handler as GET, handler as POST }