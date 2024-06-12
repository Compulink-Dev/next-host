
import Link from 'next/link'
import React from 'react'

// export async function loadVacancy() {
//     await connectToDB()
//     const vacancies = await Vacancy.find()
//     return vacancies
// }

interface AboutProps {
    about: any
    route: any
    children: React.ReactNode
}


async function AboutCard({ about, route, children }: AboutProps) {


    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/about/${route}/${about.id}`}
                className="flex items-center justify-between w-full">
                <div className="">
                    {children}
                </div>
            </Link>
        </div>
    )
}

export default AboutCard