import { db } from '@lib/db'
import User from '@schemas/User'
import nextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = nextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks : {
        async session({ session }){
            const userSession = await User.findOne({
                email : session.user.email
            });

            session.user.id = userSession._id.toString();

            return session
        },


        async signIn({profile}){
            try{

                await db()

                const existingUser = await User.findOne({
                    email: profile.email
                })

                if(!existingUser){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ","").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true

            } catch(err){
                return false
            }
        }
    }
})


export { handler as GET, handler as POST}

