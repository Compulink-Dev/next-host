import { connectToDB } from '@/lib/connectToDB'
import TaskForce from '@/models/(programs)/taskforce'
import React from 'react'
import ProgramsCard from './programsCard'

export async function loadTasks() {
    await connectToDB()
    const tasks = await TaskForce.find()
    return tasks
}


async function TaskList() {
    const tasks = await loadTasks()
    return (
        <div className=''>
            {
                tasks.map((task) => (
                    <ProgramsCard
                        route={'taskforce'}
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

export default TaskList