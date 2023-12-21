import { db } from '@lib/db'
import { User } from '@schemas/User'

import nextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


const handler = nextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async session({ session }) {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });
  
        session.user.id = sessionUser._id.toString();
  
        return session;
      },
  
      async signIn({ profile }) {
        try {
          await db();
  
          const userExists = await User.findOne({
            email: profile.email,
          });
  
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
              locale: profile.locale,
              firstName: profile.given_name,
              lastName: profile.family_name
            });
          }
          
          return true
        } catch (error) {
          return false;
        }
      },
    },
  });
  
  export { handler as POST, handler as GET };
  
