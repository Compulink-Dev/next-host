import DeleteButton from '@/components/deleteButton'
import EditButton from '@/components/editButton'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function ChairCard({ chair }: any) {
    console.log(chair.id);

    return (
        <div className='border shadow p-4'>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <Image src={chair.image} alt='' width={100} height={100} className='w-full h-full ' />
                    <div className="">
                        <p className="">{chair.title}</p>
                        <p className="">{chair.position}</p>
                        <p className="">{chair.link}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link href={`/dashboard/team/chair/edit/${chair.id}`}>
                        <EditButton />
                    </Link>
                    <DeleteButton id={chair.id} link={'team/chair'} />
                </div>
            </div>
        </div>
    )
}

export default ChairCard