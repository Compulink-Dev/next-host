'use client'
import React from 'react'
import { Button } from './ui/button'
import { MdArrowLeft } from 'react-icons/md'
import { useRouter } from 'next/navigation'

function BackButton() {

    const router = useRouter()

    return (
        <Button
            onClick={() => router.back()}
            className='flex gap-4'
            variant={'outline'}>
            <MdArrowLeft />
            Back
        </Button>
    )
}

export default BackButton