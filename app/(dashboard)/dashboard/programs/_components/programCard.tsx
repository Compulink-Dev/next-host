import { connectToDB } from '@/lib/connectToDB'
import Program from '@/models/(programs)/program'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function loadProgram() {
    await connectToDB()
    const program = await Program.find()
    return program
}


async function ProgramCard() {
    const programs = await loadProgram()

    return (
        <>
            {
                programs.map((program) => (
                    <Link
                        key={program.id}
                        href={`/dashboard/programs/${program.id}`}>
                        <div className="border p-4 shadow rounded">
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <Image
                                    src={`/${program.imageUrl}`}
                                    alt={`${program.title}`}
                                    width={100} height={100}
                                    className='rounded border' />
                                <div className="space-y-2">
                                    <p className="">{program.title}</p>
                                    <p className="">{program.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default ProgramCard