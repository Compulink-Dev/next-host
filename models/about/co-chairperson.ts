import mongoose, { Schema } from "mongoose";

const corePersonScheme = new Schema(
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

const CorePerson = mongoose.models.CorePerson || mongoose.model("CorePerson", corePersonScheme)

export default CorePerson