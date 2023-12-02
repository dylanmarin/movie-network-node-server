import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("reviews", schema, "reviews");

export default model;
