import mongoose, { Schema } from "mongoose";

const adhocScheme = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)

const Adhoc = mongoose.models.Adhoc || mongoose.model("Adhoc", adhocScheme)

export default Adhoc