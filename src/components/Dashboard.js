import React from "react"
import { Card,Image } from "react-bootstrap"
import { UserAuth } from "../contexts/AuthContext"

export default function Dashboard() {
  const {user} = UserAuth()
  console.log(user)
  return (
    <>
      <Card bg='secondary' text='white'className='border w-50 rounded position-relative start-50 translate-middle'>
        <Card.Body>   
          <h2 className="text-center mb-4">{user.displayName}</h2>
          <Image className='mx-1' src="https://lh3.googleusercontent.com/a-/ACNPEu9ukyP4YuiblRSJGUeRNYidIOIEY5yWMweHFheBPw=s96-c"></Image>
          <strong>Email:{user.email}</strong>
        </Card.Body>
      </Card>
    </>
  )
}