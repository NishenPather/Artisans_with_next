import React, { Component, Fragment, useEffect } from 'react'
import axios from 'axios'
import useSWR from "swr";
import { useAuth } from "../context/auth"
import api from '../services/axiosAPI'
import Router from 'next/router'
import { routes } from '../services/routes'

  


function Stores() {


  const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) Router.push('/')
    }, [isAuthenticated])

    const { data, error } = useSWR(isAuthenticated ? routes.stores : null, api.get)

    if (error) return <p> There was an error </p>
    if (!data) return <p> Loading... </p>
    
    let { data: stores } = data
  

  
  
    return (
      <Fragment>
        <h1>Stores</h1>
        <div> 
        <table className="default">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Bio</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {stores.map( store => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>{store.shop_type}</td>
                <td>{store.bio}</td>
                <td>{store.Phone}</td>
                <td>{store.address}</td>
                <td><button className="btn btn-danger btn-sm">Profile</button></td>
                <td><button className="btn btn-default btn-sm">Edit</button></td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

      </Fragment>
    )
  }


export default Stores

