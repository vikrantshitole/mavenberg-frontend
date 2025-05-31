import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { logout } from '../store/authSlice';
import type { DrawerProps } from '../types/common';

const Drawer: React.FC<DrawerProps> = ({ isDrawerOpen }) => {
    const dispatch = useDispatch();
    return (
        <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-${isDrawerOpen ? '0' : 'full hidden'} sm:block bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink to={'/dashboard'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white    hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Overview</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/tables'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white   hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Data Table</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/custom-tables'} className="flex items-center p-2 text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="flex-1 ms-3 whitespace-nowrap">Custom Data Table</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='' onClick={() => dispatch(logout())} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Drawer