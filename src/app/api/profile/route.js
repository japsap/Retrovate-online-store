import { db } from "@lib/db"
import { User } from '@schemas/User'


export const POST = async (req ) => {
    try{
        await db()

        const { fullname, userId } = await req.json()

        const updatedUser = await User.findByIdAndUpdate(userId, { fullname })

        return new Response(JSON.stringify(updatedUser), { status: 201 })

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}