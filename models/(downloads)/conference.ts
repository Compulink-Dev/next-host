import mongoose, { Schema } from "mongoose";

const conferenceScheme = new Schema(
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

const Conference = mongoose.models.Conference || mongoose.model("Conference", conferenceScheme)

export default Conference