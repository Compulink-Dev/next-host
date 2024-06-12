import React from 'react'
import EditTeam from '../_components/EditTeam'
import getTeam from '@/lib/team/getTeam'

//@ts-ignore
async function TeamEdit({ params: { id } }) {
    const team = await getTeam(id)
    return (
        <div className='p-4'>
            <EditTeam team={team} />
        </div>
    )
}

export default TeamEdit