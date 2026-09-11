import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email Required"]
    },
    username: {
        type: String,
        required: [true, "Username Required"]
    },
    images: {
        type: String
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }, {timestamps: true}]
})

const User= models.user || model('User', UserSchema);

export default User;