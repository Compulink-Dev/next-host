import mongoose, { Schema } from "mongoose";

const vacancyScheme = new Schema(
    {
        name: String,
        jobType: String,
        dueDate: String,
    },
    {
        timestamps: true
    }
)

const Vacancy = mongoose.models.Vacancy || mongoose.model("Vacancy", vacancyScheme)

export default Vacancy