import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("moviesListResponses", schema);
export default model;
