import React from 'react'
import { api } from '../services/api'

const useLargeSetData = () => {
    const [data, setData] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)
    React.useEffect(() => {
        // Simulate fetching a large dataset
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const largeDataSet = await api.get('/users')
                setData(largeDataSet.data)

            } catch (error) {
                console.error('Error fetching large dataset:', error)
                setError('Failed to fetch data')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}

export default useLargeSetData