import React, { use, useEffect } from 'react'
import { api } from '../services/api'
import type { ChartDataProps } from '../types/charts'

const useChartData = () => {
  const [data, setData] = React.useState({line_chart: {}, pie_chart: {}, bar_chart: {}})
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await api.get('users/data') // Replace with your API endpoint
            setData(response.data)
        } catch (error) {
            setError('Failed to fetch chart data')
        } finally {
            setLoading(false)
        }
        }
        fetchData()
  },[])
    return { data, loading, error }
}

export default useChartData