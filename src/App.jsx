import { useState } from 'react'
import './App.css'

function App() {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF'];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <div className="app-container" style={{ backgroundColor: colors[colorIndex] }}>
      <div className="app-content">
        <button className="color-button" onClick={changeColor}>
          Change Color
        </button>
      </div>
    </div>
  )
}

export default App