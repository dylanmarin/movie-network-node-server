import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        name: String,
        email: String,
        photoURL: {type: String, default: ""},
        bio: {type: String, default: ""},
        following: {
            type: Map,
            of: String,
            default: {}
        },
        role: {
            type: String,
            enum: ["USER", "MODERATOR", "ADMIN"],
            default: "USER"
        },
    },
    {collection: "users"});
export default userSchema;
