import connectDB from "@/config/connectDB.js";
import Property from "@/models/Property.model.js";

//GET/api/properties/:id
export const GET = async (request, {params}) => {
    try {
        await connectDB();

        const { id } = await params;
        const property = await Property.findById(id);

        if(!property){
            return new Response('Property Not Found', {status: 400})
        }

        return new Response(JSON.stringify(property),{
            status: 200,
        });

    } catch (error) {
        console.log("GET request Error: ",error)

        return new Response("Something went wrong", {
            status: 500
        });
    }
}