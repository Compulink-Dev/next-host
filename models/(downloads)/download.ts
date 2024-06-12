import mongoose, { Schema } from "mongoose";

const downloadScheme = new Schema(
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

const Download = mongoose.models.Download || mongoose.model("Download", downloadScheme)

export default Download