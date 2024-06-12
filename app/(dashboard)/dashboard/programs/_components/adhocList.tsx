import { connectToDB } from '@/lib/connectToDB'
import TaskForce from '@/models/(programs)/taskforce'
import React from 'react'
import ProgramsCard from './programsCard'
import Adhoc from '@/models/(programs)/adhoc'

export async function loadTasks() {
    await connectToDB()
    const tasks = await Adhoc.find()
    return tasks
}


async function AdhocList() {
    const tasks = await loadTasks()
    return (
        <div className=''>
            {
                tasks.map((task) => (
                    <ProgramsCard
                        route={'adhoc'}
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

export default AdhocList