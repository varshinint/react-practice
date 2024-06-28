
import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({changeLoginStatus}) => {

  const navigate = useNavigate()

  const handleLogout = () =>{
        //changeLoginStatus(false)
        navigate('/')
  }

  return (
    <div>
      <h1> 
        About 
        <br></br>
        <button type="submit" class="btn btn-success" onClick={() =>{handleLogout()}}> Logout </button>
      </h1>
    </div>
  )
}

export default About