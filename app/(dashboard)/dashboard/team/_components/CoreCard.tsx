import DeleteButton from '@/components/deleteButton'
import EditButton from '@/components/editButton'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function CoreCard({ core }: any) {
    console.log(core.id);

    return (
        <div className='border shadow p-4'>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <Image src={core.image} alt='' width={100} height={100} className='w-full h-full ' />
                    <div className="">
                        <p className="">{core.title}</p>
                        <p className="">{core.position}</p>
                        <p className="">{core.link}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link href={`/dashboard/team/core/edit/${core.id}`}>
                        <EditButton />
                    </Link>
                    <DeleteButton id={core.id} link={'team/core'} />
                </div>
            </div>
        </div>
    )
}

export default CoreCard