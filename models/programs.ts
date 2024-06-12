import mongoose, { Schema } from "mongoose";

const programScheme = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
        subtitle: String,
        slug: String,
    },
    {
        timestamps: true
    }
)

const Program = mongoose.models.Program || mongoose.model("Program", programScheme)

export default Program