import mongoose, { Schema } from "mongoose";

const presentationScheme = new Schema(
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

const Presentation = mongoose.models.Presentation || mongoose.model("Presentation", presentationScheme)

export default Presentation