import MainLayout from '@/components/layout'
import React from 'react'
import Category from './_components/category'
import JobTable from './_components/jobTable'



function VacancyPage() {
    return (
        <MainLayout>
            <div className='px-12 pb-12'>
                <div className="">
                    <Category />
                </div>
                <div className="my-8">
                    <p className="text-lg font-bold">Top Jobs (Available)</p>
                    <p className="text-sm">Listing released just when you visited our website.</p>
                </div>
                <div className="my-12">
                    <JobTable />
                </div>
            </div>
        </MainLayout>
    )
}

export default VacancyPage