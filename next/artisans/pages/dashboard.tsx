
import  DefaultLayout from '../components/Layout/Layout'
import Stores from '../components/Stores'
import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import Router from 'next/router'




function dashboard() {
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) Router.push('/login')
    }, [isAuthenticated])

    

    return (
        <div>

          <h1>Dashboard</h1>
          <Stores />
        
        </div>
    )
}

dashboard.Layout = DefaultLayout
export default dashboard
