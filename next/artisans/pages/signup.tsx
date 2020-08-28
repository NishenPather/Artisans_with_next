import React from 'react'
import DefaultLayout from '../components/Layout/Layout'



import { routes } from '../services/routes'
import RegisterForm from '../components/forms/RegisterForm'


export default function signup() {
    return (
        <RegisterForm route={routes.signup} title={"Signup"} />
    )
}

signup.Layout = DefaultLayout