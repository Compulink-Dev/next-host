import Link from 'next/link'
import React from 'react'
import { MdTimer } from 'react-icons/md'

interface DownloadProps {
    title: String
    document: String
    imageUrl: String
    date: String
    link: String
    route: String
}


function DownloadCard({ title, document, imageUrl, date, link, route }: DownloadProps) {
    return (
        <Link href={`/dashboard/downloads/${route}/${link}`}>
            <div className="border p-4 shadow rounded flex items-center justify-between">
                <div className="flex flex-col gap-4 text-sm text-slate-600">
                    <p className="text-lg font-bold text-black">{title}</p>
                    <div className="flex gap-4">
                        <p className="">{document}</p>
                        <p className="">{imageUrl}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <MdTimer />
                    <p className="">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export default DownloadCard