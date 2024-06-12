import { connectToDB } from '@/lib/connectToDB'
import TaskForce from '@/models/(programs)/taskforce'
import React from 'react'
import ProgramsCard from './programsCard'
import Annual from '@/models/(programs)/annual'

export async function loadTasks() {
    await connectToDB()
    const tasks = await Annual.find()
    return tasks
}


async function AnnualList() {
    const tasks = await loadTasks()
    return (
        <div className=''>
            {
                tasks.map((task) => (
                    <ProgramsCard
                        route={'annual'}
                        key={task.id}
                        link={task.id}
                        title={task.title}
                        description={task.description}
                        imageUrl={task.imageUrl}
                    />
                ))
            }
        </div>
    )
}

export default AnnualList