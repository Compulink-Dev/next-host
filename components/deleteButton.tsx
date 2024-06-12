'use client'
import React from 'react'
import { Button } from './ui/button'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'



function DeleteButton({ id, link }: any) {

    const router = useRouter()

    async function handleDelete() {
        const confirmed = confirm("Are yo sure, you want to delete")
        if (confirmed) {
            const res = await fetch(`${process.env.API_ROUTE}/api/${link}/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                toast.success('Deleting successfully')
                router.push(`/dashboard/${link}`)
            }
            return res;
        }
    }

    return (
        <Button
            onClick={handleDelete}
            className='bg-red-600 hover:bg-red-500'>
            <MdDelete />
            Delete
        </Button>
    )
}

export default DeleteButton