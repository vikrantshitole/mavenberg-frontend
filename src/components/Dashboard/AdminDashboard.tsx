import React from 'react'
import type { ChartDataProps } from '../../types/charts'
import Analytics from '../Analyrics'

const AdminDashboard: React.FC<ChartDataProps> = ({ data }) => {
    return (
        <div className='card bg-base-100 grid-cols-1 sm:grid-cols-2 shadow-xl shadow-slate-400 dark:shadow-slate-800'>
            <div className='card-body mx-2 my-2'>
                <p className='text-gray-200 dark:text-gray-700 font-lg mx-2 my-2 font-semibold text-center'>Admin Analytics</p>
            </div>
            {data && <Analytics data={data} />}
        </div>
    )
}

export default AdminDashboard