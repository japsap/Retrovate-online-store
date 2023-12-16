import { db } from "@lib/db"
import Catalog from "@schemas/Catalog"

export const GET = async (req, { params }) => {
    try{
        await db()

        const catalogItem = await Catalog.findById(params.id)
        if(!catalogItem) return new Response("Item Not Found", {status: 404})

        return new Response(JSON.stringify(catalogItem), {status: 200})

    } catch(err){
        return new Response("Failed to fetch", { status: 500 })
    }
}