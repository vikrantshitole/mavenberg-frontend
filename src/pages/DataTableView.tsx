import React from 'react'
import Table from '../components/Table'
import { TABLEHEADERS } from '../utils/constants'
import useLargeSetData from '../hooks/useLargeSetData'
import CustomizedTable from '../components/CustomizedTable'
import FallBack from '../components/FallBack'
import type { DataTableViewProps } from '../types/table'

const DataTableView:React.FC<DataTableViewProps> = ({isCustom=false}) => {
  const { data, loading, error } = useLargeSetData()

  if (loading) {
    return <FallBack />
  }
  if (error) {
    throw error
  }
  if (!data || data.length === 0) {
    return <div className='container mx-auto p-6 text-gray-500'>No data available</div>
  }
  return (
    <div className='container w-full mx-auto p-6'>
      <h4 className='text-2xl font-semibold mb-4'>{isCustom? 'Custom ': ''} Data Table Views</h4>
      <p className='text-gray-600 mb-6'>Displaying {data.length} records using {isCustom? "React Window":"Material"} virtualized rendering</p>
      <div className='bg-white shadow-md rounded-lg p-6'>
        {isCustom?<CustomizedTable headers={TABLEHEADERS} data={data}/>:<Table headers={TABLEHEADERS} data={data} />}
      </div>
    </div>
  )
}

export default DataTableView