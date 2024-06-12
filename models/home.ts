import mongoose, { Schema } from "mongoose";

const homeScheme = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
        position: String,
        date: Date,
        slug: String,
        company: String,
        subtitle: String,
        name: String,
    },
    {
        timestamps: true
    }
)

const Home = mongoose.models.Home || mongoose.model("Home", homeScheme)

export default Home