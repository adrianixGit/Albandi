import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import { useState } from 'react';
function App() {
  const [colorTemp, setColorTemp] = useState('');
  const [orientation, setOrientation] = useState('');
  const [color, setColor] = useState('');
  return (
    <div className="App">
      <Navbar
        setColorTemp={setColorTemp}
        setOrientation={setOrientation}
        setColor={setColor}
        colorTemp={colorTemp}
        orientation={orientation}
        color={color}
      />
      <Gallery colorTemp={colorTemp} orientation={orientation} color={color} />
    </div>
  );
}

export default App;
