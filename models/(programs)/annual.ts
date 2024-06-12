import mongoose, { Schema } from "mongoose";

const annualScheme = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)

const Annual = mongoose.models.Annual || mongoose.model("Annual", annualScheme)

export default Annual