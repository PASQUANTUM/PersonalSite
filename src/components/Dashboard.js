import React from "react"
import { Card } from "react-bootstrap"
import { UserAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Dashboard() {
  const {user} = UserAuth()

  return (
    <>
      <Card bg='secondary' text='white'className='border w-50 rounded position-relative start-50 translate-middle'>
        <Card.Body >
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email:</strong> {user.email}
          <Link to="/update-profile" className="btn btn-dark w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
    </>
  )
}