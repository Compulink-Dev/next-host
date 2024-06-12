import mongoose, { Schema } from "mongoose";

const testimonialScheme = new Schema(
    {
        title: String,
        name: String,
        company: String,
        position: String
    },
    {
        timestamps: true
    }
)

const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialScheme)

export default Testimonial