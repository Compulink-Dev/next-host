import mongoose, { Schema } from "mongoose";

const sectionScheme = new Schema(
    {
        title: String,
        title2: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)

const Section = mongoose.models.Section || mongoose.model("Section", sectionScheme)

export default Section