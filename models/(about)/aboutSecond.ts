import mongoose, { Schema } from "mongoose";

const aboutSecondScheme = new Schema(
    {
        title: String,
        title2: String,
        title3: String,
        title4: String,
        imageUrl: String
    },
    {
        timestamps: true,
    }
)

const AboutSecond = mongoose.models.AboutSecond || mongoose.model("AboutSecond", aboutSecondScheme)

export default AboutSecond