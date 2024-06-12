import React from 'react'
import getTeam from '@/lib/team/getTeam'
import EditForm from '../../_components/EditTeam'
import BackButton from '@/components/backButton'

//@ts-ignore
async function TeamEdit({ params: { id } }) {
    const team = await getTeam(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditForm team={team} />
        </div>
    )
}

export default TeamEdit