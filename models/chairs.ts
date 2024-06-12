import mongoose, { Schema } from "mongoose";

const chairScheme = new Schema(
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

const Chair = mongoose.models.Chair || mongoose.model("Chair", chairScheme)

export default Chair