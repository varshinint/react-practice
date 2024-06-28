import { Alert } from 'bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About'

const SampleForm = () => {

           const [email, setEmail] = useState('')
           const [password, setPassword] = useState('')
           const [submitted, setSubmitted] = useState(false)

           const [isauthenticated, setIsAuthenticated] = useState(false)

           const navigate = useNavigate();

           const validateForm = () =>{
            if(!email || !password){
                alert('Missing details, Kindly fill')
                return false
            }
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(! regex.test(email)) {
                alert('plese enter valid email')
                return false
            }
            return true
            /*  Testcases:
                user@.com (no domain name before the dot)
                @example.com (no local part before the @)
                user@domain (no dot and TLD)*/
          } 

          const validateLogin = () =>{
            if (email === 'varshant99@gmail.com' && password === 'password') {
                setIsAuthenticated(true)
                navigate('/login');
            } 
            else {
              alert('Invalid credentials');
              navigate('/sign-up')

            }
          }

           const handleSubmit = (e) =>{
                e.preventDefault();
                if(validateForm()){
                    validateLogin()
                    setSubmitted(true)
                }
           }
        
           const changeLoginStatus = (status) =>{
                setIsAuthenticated(status)
           }

  return (
    <div>
        <h1> SampleForm</h1>
        <form >
          <div class="mb-3">

              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
          </div>
          <div class="mb-3">

              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>

          </div>
 
          <button type="submit" class="btn btn-success" onClick={handleSubmit} >Submit</button>
        </form>

        {submitted && (
                <div>
                    <h1>Submitted Data</h1>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                </div>
            )}
    
         
    </div>
  )
}

export default SampleForm

/**
 * <About changeLoginStatus={changeLoginStatus}/>
 */

