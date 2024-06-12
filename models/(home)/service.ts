import mongoose, { Schema } from "mongoose";

const serviceScheme = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)

const Service = mongoose.models.Service || mongoose.model("Service", serviceScheme)

export default Service