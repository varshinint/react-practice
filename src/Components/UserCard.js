import React from 'react'

const UserCard = ({yourName, age, onGreet}) => {
  return (
    <div>
        <h1>UserCard</h1>

        <h3> Your Name is {yourName}</h3>
        <h3> Your age is {age}</h3>

        <button type="button" class="btn btn-dark" onClick={onGreet}>Greet</button>

    </div>
  )
}

export default UserCard