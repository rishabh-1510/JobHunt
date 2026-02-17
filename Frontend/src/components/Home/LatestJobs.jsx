import React from 'react'
import LatestJobCard from './LatestJobCard'
const randomJobs = [1, 2, 3, 4, 5, 6]
const LatestJobs = () => {
    return (
        <div className=' mx-auto max-w-7xl my-20'>
            <h1 className='text-4xl font-bold '><span className='text-[#683ac2]'>Latest & Top </span>Job Openings</h1>
            {/* //Multiple job cards  */}
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs.slice(0,6).map((randomJobs, index) => (
                        <LatestJobCard />
                    ))
                }

            </div>
        </div>
    )
}

export default LatestJobs