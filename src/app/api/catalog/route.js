import { db } from "@lib/db"
import Catalog from "@schemas/Catalog"

export const GET = async (req, res) => {
    try{
        await db()

        const catalog = await Catalog.find({}).lean()
        return new Response(JSON.stringify(catalog), { status: 201 })

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}