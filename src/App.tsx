import React, { lazy, Suspense } from 'react'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from './store/authSlice'
import type { CommonProps } from './types/common'
import withErrorBoundary from './components/ErrorBoundary'

const Login = lazy(() => import('./pages/Login')) as React.LazyExoticComponent<React.FC>;
const DashboardLayout = lazy(()=>import('./layout/DashboardLayout')) as React.LazyExoticComponent<React.FC<CommonProps>>;
const PrivateRoute =  lazy(()=>import('./components/PrivateRoute')) as React.LazyExoticComponent<React.FC<CommonProps>>;
const DataTableView = lazy(() => import('./pages/DataTableView'))
const Dashboard = lazy(()=> import('./pages/Dashboard')) as React.LazyExoticComponent<React.FC>;
const FallBack = lazy(() => import('./components/FallBack')) as React.LazyExoticComponent<React.FC>;
function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<FallBack />}>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route 
              path='dashboard' 
              element={
              <PrivateRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </PrivateRoute>} 
              />
              <Route 
              path='dashboard/tables' 
              element={
              <PrivateRoute>
                <DashboardLayout>
                  <DataTableView />
                </DashboardLayout>
              </PrivateRoute>} 
              />

              <Route 
              path='dashboard/custom-tables' 
              element={
              <PrivateRoute>
                <DashboardLayout>
                  <DataTableView isCustom={true} />
                </DashboardLayout>
              </PrivateRoute>} 
              />
            <Route path="/" element={!isAuthenticated ? <Navigate to="/login" replace /> : <Navigate to="/dashboard" replace />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default withErrorBoundary(App)
