import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("companies", schema);
export default model;
