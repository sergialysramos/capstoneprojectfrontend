import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import AuthProvider from '../contexts/AuthContext'



const Layout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    )
}

export default Layout