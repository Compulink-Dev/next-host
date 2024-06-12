// import BackButton from '@/components/backButton'
// import { connectToDB } from '@/lib/connectToDB'
// import Vacancy from '@/models/vacancy'
// import React from 'react'
// import VacancyCard from '../../_components/vacancyCard'
// import getVacancy from '@/lib/vacancy/getVacancy'
// import EditVacancyForm from '../../_components/editVacancy'

// //@ts-ignore
// export async function loadVacancy(id) {
//     await connectToDB()
//     const vacancy = await Vacancy.findById(id)
//     return vacancy

// }

// //@ts-ignore
// async function EditVacancy({ params: { id } }) {

//     const vacancy = await loadVacancy(id)


//     return (
//         <div className='p-4'>
//             <div className="flex justify-end">
//                 <BackButton />
//             </div>
//             <div className="mt-4">
//                 <EditVacancyForm vacancy={vacancy} />
//             </div>
//         </div>
//     )
// }

// export default EditVacancy

import NewVacancy from "./newVacant";
export default NewVacancy