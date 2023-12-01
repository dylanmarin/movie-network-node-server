import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("movieCredits", schema);
export default model;
