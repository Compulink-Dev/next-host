import Link from 'next/link'
import React from 'react'
import { MdAdd } from 'react-icons/md'

function CreateButton({ link }: any) {
    return (
        <div className="flex justify-end p-4">
            <Link
                href={`/dashboard/${link}/add`}
                className='flex gap-2 items-center border rounded p-2'>
                <MdAdd />
                Create {link}
            </Link>
        </div>
    )
}

export default CreateButton