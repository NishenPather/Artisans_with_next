import React from 'react'
import { routes } from '../services/routes'
import AuthForm from '../components/forms/AuthForm'
import DefaultLayout from '../components/Layout/Layout'



export default function login() {
    return (
        <AuthForm route={routes.login} title={"Login"} />
    )
}

login.Layout = DefaultLayout
