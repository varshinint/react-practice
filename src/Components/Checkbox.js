import React, { useState } from 'react'

const Checkbox = () => {

        const[isChecked, setIsChecked] = useState(false)

  return (
    <div>
        <h1>Checkbox</h1>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked={isChecked} onChange={()=> setIsChecked(!isChecked)} id="flexCheckDefault"/>
            
            <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
            </label>
        </div>
            <p> The checkbox is { isChecked? 'checked' : 'unchecked'}</p>
    </div>
    
  )
}

export default Checkbox