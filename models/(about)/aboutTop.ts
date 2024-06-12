import mongoose, { Schema } from "mongoose";

const aboutTopScheme = new Schema(
    {
        title: String,
        title2: String
    },
    {
        timestamps: true
    }
)

const AboutTop = mongoose.models.AboutTop || mongoose.model("AboutTop", aboutTopScheme)

export default AboutTop