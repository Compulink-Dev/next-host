import mongoose, { Schema } from "mongoose";

const quarterlyScheme = new Schema(
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

const Quarterly = mongoose.models.Quarterly || mongoose.model("Quarterly", quarterlyScheme)

export default Quarterly