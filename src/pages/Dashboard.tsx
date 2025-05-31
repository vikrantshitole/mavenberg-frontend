import React from 'react'
import Analytics from '../components/Analytics'
import useChartData from '../hooks/useChartData'
import FallBack from '../components/FallBack'

const Dashboard = () => {
    const { data, loading, error } = useChartData()
    if (loading) {
        return <FallBack />
    }
    if (error) {
        throw error
    }
    return (
        <div className='container my-1'>
            <div className='grid grid-rows-1 grid-cols-1 gap-4'>
                <div className='card bg-base-100 grid-cols-1 sm:grid-cols-2 shadow-xl shadow-slate-400 dark:shadow-slate-800'>
                    <div className='card-body mx-2 my-2'>
                        <p className='text-gray-200 dark:text-gray-700 font-lg mx-2 my-2 font-semibold text-center'>Analytics</p>
                    </div>
                    {data && <Analytics data={data} />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard