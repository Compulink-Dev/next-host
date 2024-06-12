import mongoose, { Schema } from "mongoose";

const eventScheme = new Schema(
    {
        title: String,
        subtitle: String,
        imageUrl: String,
        doc: String,
        link: String,
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Team || mongoose.model("Team", eventScheme)

export default Event