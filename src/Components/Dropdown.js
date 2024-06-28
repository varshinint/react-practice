import React from 'react'
import Select from 'react-select'

const Dropdown = ({list, onSelect, temperatureList}) => {


    const options = list.map((item, index) =>({
        
        value : index,
        label : item
    }))

    const handleChange = (selectedOption) =>{
        if(selectedOption){
            onSelect(selectedOption.label)
            
        }
    }
    


  return (
    <div>
    <Select options={options} onChange = {()=>{handleChange()}} placeholder='select date and hour'></Select>
    
    </div>
  )
}

export default Dropdown