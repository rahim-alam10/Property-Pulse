import connectDB from "../config/connectDB";
import User from "@/models/User.model.js";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // how this application asks Google for authorization.
            authorization: {
                params: {
                    prompt: "consent",          //This tells Google to show the consent screen.
                    access_type: "offline",     //receive a refresh token.
                    // A refresh token can be used to obtain a new access token without requiring the user to log in again.
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        //Invoked Successfull SignIn
        async signIn({profile}){
            // 1. Connect to database
            await connectDB();
            // 2. Check is user already exists
            const userExists=  await User.findOne({email: profile.email});
            // 3. If not, then add the user to database
            if(!userExists){
                //Truncate Username If Too long
                const username = profile.name.slice(0,20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            // 4. Return true to allow sign in 
            return true;
        },
        // Modifies the Session Object
        async session({session}){
            // 1. Get User from database
            const user  = await User.findOne({email: session.user.email})

            // 2. Assign User id to session
            session.user.id= user._id.toString();

            // 3. Return the session
            return session;
        }
    }
}