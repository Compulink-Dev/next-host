import mongoose, { Schema } from "mongoose";

const researchScheme = new Schema(
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

const Research = mongoose.models.Research || mongoose.model("Research", researchScheme)

export default Research