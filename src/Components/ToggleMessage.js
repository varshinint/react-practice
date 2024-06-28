import React, { useState } from 'react'

const ToggleMessage = () => {


          const[showMessage, setShowMessage] = useState(false)

  return (
    <div>
        <h1> ToggleMessage </h1>
        <button type="button" class="btn btn-warning" onClick={() => setShowMessage(!showMessage)}>Show Message Toggle Button</button>
       { showMessage && (
            
            <h2> Hello I am toggle message</h2>
        )
        }

    </div>

  )
}

export default ToggleMessage