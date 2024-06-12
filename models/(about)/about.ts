import mongoose, { Schema } from "mongoose";

const aboutScheme = new Schema(
    {
        title: String,
        title2: String,
        title3: String,
        title4: String,
        title5: String,
        imageUrl: String,
        imageUrl2: String,
        imageUrl3: String,
        imageUrl4: String
    },
    {
        timestamps: true,
    }
)

const About = mongoose.models.About || mongoose.model("About", aboutScheme)

export default About