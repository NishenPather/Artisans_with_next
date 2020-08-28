import React, { useState } from 'react'

import { Row, Col, Form, Button } from 'react-bootstrap'
import api from '../../services/axiosAPI'
import  { useAuth }  from '../../context/auth'

export interface AuthProps {
    title: string,
    route: string
}

export default function RegisterForm({ title, route }: AuthProps) {

    const { setToken } = useAuth()
    const [errors, setErrors] = useState<ValidationError[]>([])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const email = e.target.elements['email'].value;
        const username = e.target.elements['username'].value;
        const password = e.target.elements['password'].value;

        api.post(route, { email,username, password })
            .then((response) => {
                const token = response.data
                setToken(token)
            })
            .catch((error) => {
                setErrors(error.response.data || [])
                console.log(error)
            })
    }

    return (
        <div>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="pt-5">
                        <h3>
                            {title}
                        </h3>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md="12">
                        <Form onSubmit={handleFormSubmit}>

                           <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                                <DisplayErrors errors={errors} fieldName="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username: </Form.Label>
                                <Form.Control name="username" type="username" placeholder="Enter username" />
                                <DisplayErrors errors={errors} fieldName="username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                                <DisplayErrors errors={errors} fieldName="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="btn-block">
                                Submit
                        </Button>
                        </Form>
                    </Col>
                </Row>

        </div>
    )
}

export interface ValidationError { field: string, message: string }

interface DisplayErrors {
    errors: ValidationError[],
    fieldName: string
}

const DisplayErrors = ({ errors, fieldName }: DisplayErrors) => (
    <>
        {errors.filter(e => e.field === fieldName).map((e) => (
            <p className="text-danger">
                {e.message}
            </p>
        ))}
    </>
)