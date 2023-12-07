import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("watchProviderList", schema);
export default model;
