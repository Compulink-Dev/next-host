import mongoose, { Schema } from "mongoose";

const monthlyScheme = new Schema(
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

const Monthly = mongoose.models.Monthly || mongoose.model("Monthly", monthlyScheme)

export default Monthly