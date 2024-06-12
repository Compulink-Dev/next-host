import mongoose, { Schema } from "mongoose";

const coreScheme = new Schema(
    {
        title: String,
        subtitle: String,
        imageUrl: String,
        position: String,
        link: String,
    },
    {
        timestamps: true
    }
)

const Core = mongoose.models.Core || mongoose.model("Core", coreScheme)

export default Core