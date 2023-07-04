import React from 'react'

function ColorBlock(props){
    return (
      <center>
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
        </center>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
