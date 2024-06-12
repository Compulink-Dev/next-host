import React from 'react'
import { Button } from './ui/button'
import { MdEdit } from 'react-icons/md'

function EditButton() {
    return (
        <Button className='bg-green-600 hover:bg-green-500 text-white'>
            <MdEdit />
            Edit
        </Button>
    )
}

export default EditButton