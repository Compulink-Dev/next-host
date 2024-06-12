import mongoose, { Schema } from "mongoose";

const chairPersonScheme = new Schema(
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

const Chairperson = mongoose.models.Chairperson || mongoose.model("Chairperson", chairPersonScheme)

export default Chairperson