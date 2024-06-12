import mongoose, { Schema } from "mongoose";

const policyScheme = new Schema(
    {
        title: String,
        document: String,
        imageUrl: String,
        date: String
    },
    {
        timestamps: true
    }
)

const Policy = mongoose.models.Policy || mongoose.model("Policy", policyScheme)

export default Policy