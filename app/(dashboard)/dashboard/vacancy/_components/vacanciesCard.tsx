import Link from 'next/link'
import React from 'react'

interface VacancyProps {
    name: String
    jobType: String
    dueDate: String
    link: String
}


function VacanciesCard({ name, jobType, dueDate, link }: VacancyProps) {
    return (
        <Link href={`/dashboard/vacancy/${link}`}>
            <div className="border p-4 shadow rounded">
                <div className="flex items-center justify-between text-sm text-slate-600">
                    <p className="">{name}</p>
                    <p className="">{jobType}</p>
                    <p className="">{dueDate}</p>
                </div>
            </div>
        </Link>
    )
}

export default VacanciesCard