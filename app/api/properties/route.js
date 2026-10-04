import connectDB from "@/config/connectDB.js";
import Property from "@/models/Property.model.js";

//GET/api/properties
export const GET = async (request) => {
    try {
        await connectDB();

        const properties = await Property.find({});

        return new Response(JSON.stringify(properties),{
            status: 200,
        });

    } catch (error) {
        console.log("GET request Error: ",error)

        return new Response("Something wnet wrong", {
            status: 500
        });
    }
}