import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

interface CardProps {
    address: string
    email: string
    telephone: string
    link: string
}

function ContactCard({ address, telephone, email, link }: CardProps) {
    return (
        <Link className='border w-full h-24 p-2 rounded' href={`/dashboard/contact/${link}`}>
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div className="">
                        <p className="font-bold text-slate-700">{email}</p>
                        <p className="text-sm text-slate-500">{address}</p>
                        <p className="text-sm text-slate-500">{telephone}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ContactCard