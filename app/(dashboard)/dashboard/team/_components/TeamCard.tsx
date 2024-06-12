import DeleteButton from '@/components/deleteButton'
import EditButton from '@/components/editButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdEdit } from 'react-icons/md'

async function TeamCard({ team }: any) {
    console.log(team.id);

    return (
        <div className='border shadow p-4'>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <Image src={team.image} alt='' width={100} height={100} className='w-full h-full ' />
                    <div className="">
                        <p className="">{team.title}</p>
                        <p className="">{team.position}</p>
                        <p className="">{team.link}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link href={`/dashboard/team/edit/${team.id}`}>
                        <EditButton />
                    </Link>
                    <DeleteButton id={team.id} link={'team'} />
                </div>
            </div>
        </div>
    )
}

export default TeamCard