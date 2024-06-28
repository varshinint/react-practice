import React, { useState } from 'react'

const ToDo = () => {

   const [list , setList] =  useState([])

   const [currentItem ,setCurrentItem] = useState("")

   const handleAddItem = () =>{
    
         setList([...list,currentItem])
         setCurrentItem("")
   }
   const handleRemoveItem = (index) =>{

       const filteredItems =  list.filter((item,i) =>{
                  return  i!==index
        })
        setList(filteredItems)
         
   }

  return (
    <div>
        <div className='list-display'>

            <ul>
                { list &&
                    list.map((item,index) =>{
                        return <li key={index}> 
                                    {item} 
                                
                                    <button onClick={() => handleRemoveItem(index)}> Completed </button>
                                    
                                </li>
                    })
                }
            </ul>
        </div>
        <div className='add-item'>
                <input type='text' value={currentItem} onChange={(e) =>{setCurrentItem(e.target.value)}}></input>
        
                <button onClick = {() => handleAddItem()}> Add Item </button>
        </div>

    </div>
  )
}

export default ToDo