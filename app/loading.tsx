import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

function Loading() {
    return (
        <div className='bg-green-100 flex items-center justify-center min-h-screen' >
            <ClimbingBoxLoader color="#36d7b7" />
        </div>
    )
}

export default Loading