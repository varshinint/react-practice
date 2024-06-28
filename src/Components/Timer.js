import React, { useState } from 'react'

const Timer = () => {

        
    const [time, setTime] = useState(0)

    const [timeinterval, setTimeInterval] =  useState(0)

    //let interval = 0

    const startTimer = () =>{
       setTimeInterval(setInterval(()=>{
            setTime(time => time +1)
        },1000)
    )
       }
    const stopTimer = () =>{
        setTime(time)
        clearInterval(timeinterval)
    }
    const resetTimer = () => {
        // Reset the timer value to 0
        setTime(0);
        // Clear the interval to stop the timer
        clearInterval(timeinterval);
      }


  return (
    <div>
        <h1> Timer : {time} s </h1>
        
        <button type="button" class="btn btn-success" onClick={ startTimer}>Start Timer</button>
        <br/> 
        <br/>
        <button type="button" class="btn btn-danger" onClick={ stopTimer}>Stop Timer</button>
        <br/>
        <br/>
        <button type="button" class="btn btn-warning" onClick={resetTimer}>Reset Timer</button>


    </div>
  )
}

export default Timer