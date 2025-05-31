import React from 'react'
import Header from '../components/Header'
import Drawer from '../components/Drawer'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/authSlice';
import type { DashboardLayoutProps } from '../types/common';

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const user = useSelector(selectUser)
    
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (


        <>
            <Header  toggleDrawer={toggleDrawer}/>
            <Drawer isDrawerOpen={isDrawerOpen}/>
            <main className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray">{user.role.name} Dashboard</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Welcome to your dashboard! Here you can manage your settings, view analytics, and more.</p>
                </div>
                {children}
            </main>
        </>

    )
}

export default DashboardLayout