import DeleteButton from '@/components/deleteButton'
import EditButton from '@/components/editButton'
import Link from 'next/link'
import React from 'react'

async function VacancyCard({ vacancy }: any) {

    console.log(vacancy.id);


    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/vacancy/${vacancy.id}`}
                className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between text-sm text-slate-600 gap-6">
                    <p className="">{vacancy.name}</p>
                    <p className="">{vacancy.jobType}</p>
                    <p className="">{vacancy.dueDate}</p>
                </div>
            </Link>
        </div>
    )
}

export default VacancyCard