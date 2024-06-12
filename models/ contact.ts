import mongoose, { Schema } from "mongoose";

const contactScheme = new Schema(
    {
        email: String,
        address: String,
        telephone: String,
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactScheme)

export default Contact