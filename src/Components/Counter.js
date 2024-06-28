import React, { useState } from 'react'

const Counter = ({handleClick}) => {

    const [count, setCount] = useState(0)
  return (
    <div>
        <h1> Count: { count} </h1>
        < button type="button" class="btn btn-primary" onClick={() =>setCount(count+1)}> Increment </button>
        < button type="button" class="btn btn-secondary" onClick={() =>setCount(count-1)}> Decrement</button>
        

    </div>
  )
}

export default Counter