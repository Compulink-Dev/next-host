import Vacancy from "@/models/vacancy";
import { connectToDB } from "../connectToDB";

export default async function getVacancies() {
  await connectToDB()
  const vacancies = await Vacancy.find()
  return vacancies;
}
