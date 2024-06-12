import mongoose, { Schema } from "mongoose";

const eventScheme = new Schema(
    {
        title: String,
        date: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventScheme)

export default Event