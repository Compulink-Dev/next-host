import mongoose, { Schema } from "mongoose";

const footerScheme = new Schema(
    {
        title: String,
        link: String,
        imageUrl: String,
        telephone: String,
        address: String,
        email: String,
        website: String
    },
    {
        timestamps: true
    }
)

const Footer = mongoose.models.Footer || mongoose.model("Footer", footerScheme)

export default Footer