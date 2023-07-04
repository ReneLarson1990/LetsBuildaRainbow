import React, { useState } from 'react'

function ColorForm(props){
  let [input, setInput] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      props.addColor(input)
  }

  return (
    <center>
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" 
              onChange={(e) => setInput(e.target.value)} />
              <button type="submit">Add A Color!</button>
          </form>
      </div>
      </center>
  )
}

export default ColorForm;
