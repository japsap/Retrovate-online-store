import { db } from "@lib/db"
import { User } from '@schemas/User'

export const GET = async (req, res) => {

    try{
        await db()

        console.log(req.searchParams)

        // const user = await User.findById(params.id)
        // return new Response(JSON.stringify(user), { status: 201 })

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}