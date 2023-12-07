import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
        lastUpdated: {type: Date, default: new Date().getTime(), required: true},
        companyId: {type: Number, required: true},
        details: Object
    },
    {collection: "companies"});

export default companySchema;
