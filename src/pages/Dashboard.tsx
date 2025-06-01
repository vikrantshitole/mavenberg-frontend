import useChartData from '../hooks/useChartData'
import FallBack from '../components/FallBack'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/authSlice'
import { lazy } from 'react'
type RoleName = 'Sales' | 'Engineering' | 'Admin';

const Components: Record<RoleName, React.LazyExoticComponent<React.FC<any>>> = {
    Sales: lazy(() => import('../components/Dashboard/SalesDashboard')),
    Engineering: lazy(() => import('../components/Dashboard/EngineeringDashboard')),
    Admin: lazy(() => import('../components/Dashboard/AdminDashboard'))
}
const Dashboard = () => {
    const { data, loading, error } = useChartData()
    const user = useSelector(selectUser)
    const roleName = user.role.name as RoleName;
    const Component = Components[roleName]
    if (loading) {
        return <FallBack />
    }
    if (error) {
        throw error
    }
    return (
        <>
            <div className='container my-1'>
                <div className='grid grid-rows-1 grid-cols-1 gap-4'>
                    <Component data={data}/>
                </div>
            </div>
        </>
    )
}

export default Dashboard