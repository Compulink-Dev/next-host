import CreateButton from "@/components/createButton";
import getVacancies from "@/lib/vacancy/getVacancies";
import React, { useEffect } from "react";
import VacanciesCard from "./_components/vacanciesCard";
import { connectToDB } from "@/lib/connectToDB";
import Vacancy from "@/models/vacancy";


// export async function loadVacancy() {
//   await connectToDB()
//   const vacancies = await Vacancy.find()
//   return vacancies
// }

async function VacancyPage() {
  const vacancies = await getVacancies();

  return (
    <div className="p-4">
      <div className="pb-4 flex justify-end">
        <CreateButton />
      </div>
      <div className={'flex flex-col gap-4'}>
        {vacancies.map((vacancy: any) => (
          <VacanciesCard
            key={vacancy._id}
            link={vacancy._id}
            name={vacancy.name}
            jobType={vacancy.jobType}
            dueDate={vacancy.dueDate}
          />
        ))}
      </div>
    </div>
  );
}

export default VacancyPage;