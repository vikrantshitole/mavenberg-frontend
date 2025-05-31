import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from './store/authSlice'

const Login = lazy(() => import('./pages/Login'))
function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const isAuthenticated = false; // Replace with actual authentication logic
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path='login' element={<Login />} />
          <Route path="/" element={!isAuthenticated ? <Navigate to="/login" replace /> : <Navigate to="/dashboard" replace />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
