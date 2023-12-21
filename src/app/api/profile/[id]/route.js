import { db } from "@lib/db"
import { User } from '@schemas/User'

export const GET = async (req, { params }) => {

    try{
        await db()

        const user = await User.findById(params.id)
        return new Response(JSON.stringify(user), { status: 201 })

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}