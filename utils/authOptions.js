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
        async SignIn({profile}){
            // 1. Connect to database
            // 2. Check is user already exists
            // 3. If not, then add the user to database
            // 4. Return true to allow sign in 
        },
        // Modifies the Session Object
        async session({session}){
            // 1. Get User from database
            // 2. Assign User id to session
            // 3. Return the session
        }
    }
}