
import  DefaultLayout from '../components/Layout/Layout'
import Stores from '../components/Stores'
import React, { useEffect } from 'react'
import { useAuth } from '../context/auth'
import Router from 'next/router'
import styles from '../styles/Home.module.css'




function dashboard() {
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) Router.push('/login')
    }, [isAuthenticated])

    

    return (
        <div className={styles.card}>

          <h1>Dashboard</h1>
          <br></br>
          <Stores />
        
        </div>
    )
}

dashboard.Layout = DefaultLayout
export default dashboard
