import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import './App.css'; 

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });

  return (
    <div className={`App background-image`}>
      <center>
        <h1>Let's Build A Rainbow</h1>
      </center>
      {colorMap}
      <ColorForm addColor={addColor} />
      <br></br>
      Photo by <a href="https://unsplash.com/@its_sally?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sally</a> on <a href="https://unsplash.com/backgrounds/nature/sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    
  );
}

export default App;

