import React, { useState } from 'react'

const UserProfile = () => {

        const[fullname,setFullName] = useState('')
        const [age, setAge] = useState('');
        const [email, setEmail] = useState('');
        

  return (
    <div>
        <h1>UserProfile</h1>
        <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={fullname} 
                    onChange={(e) => setFullName(e.target.value)} 
                />
        </div>
        <div>
                <label>Age: </label>
                <input 
                    type="Number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                />
        </div>
        <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
        </div>
        <p>Name: {fullname}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserProfile