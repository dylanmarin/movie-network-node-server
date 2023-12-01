import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("movieDetails", schema);
export default model;
