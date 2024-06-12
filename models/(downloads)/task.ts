import mongoose, { Schema } from "mongoose";

const taskScheme = new Schema(
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

const Task = mongoose.models.Task || mongoose.model("Task", taskScheme)

export default Task