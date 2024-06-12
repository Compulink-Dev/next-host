// 'use client'
// import * as React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Button } from '@/components/ui/button';
import { connectToDB } from '@/lib/connectToDB';
import Vacancy from '@/models/vacancy';

export async function loadVacancy() {
    await connectToDB()
    const vacancies = await Vacancy.find()
    return vacancies
}

// const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'name', headerName: 'Name', width: 250 },
//     { field: 'jobType', headerName: 'Job Type', width: 250 },
//     {
//         field: 'salary',
//         headerName: 'Salary',
//         width: 220,
//     },
//     {
//         field: 'apply',
//         headerName: 'Apply',
//         width: 240,
//         renderCell: (params) => (
//             <Button color="primary">
//                 Action
//             </Button>
//         ),
//     },
// ];
// const vacancies = loadVacancy()
// const rows = [vacancies]

// export default function VacancyTable() {
//     return (
//         <div style={{ height: 400, width: '100%' }} className='text-green-600 text-sm'>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                     pagination: {
//                         paginationModel: { page: 0, pageSize: 5 },
//                     },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
//         </div>
//     );
// }

import React from 'react'

async function VacancyTable() {

    const vacancies = await loadVacancy()

    return (
        <div className='shadow p-4 border'>
            {
                vacancies.map((vacancy) => (
                    <div className="">{vacancy.name}</div>
                ))
            }
        </div>
    )
}

export default VacancyTable
