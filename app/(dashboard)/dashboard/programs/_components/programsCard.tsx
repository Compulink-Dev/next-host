import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface VacancyProps {
    title: String
    description: String
    imageUrl: String
    link: String,
    route: String
}


function ProgramsCard({ title, description, imageUrl, link, route }: VacancyProps) {
    return (
        <Link
            href={`/dashboard/programs/${route}/${link}`}>
            <div className="border p-4 shadow rounded">
                <div className="flex items-start gap-2 text-sm text-slate-600">
                    <Image
                        src={`/${imageUrl}`}
                        alt={`${title}`}
                        width={100} height={100}
                        className='rounded border' />
                    <div className="space-y-2">
                        <p className="">{title}</p>
                        <p className="">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProgramsCard