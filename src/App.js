import './App.css';
import Controls from './components/Controls';
import Fractal from './components/Fractal';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import juliaContext from './features/juliaContext';

function App() {

  const [real, setReal] = useState(0.3)
  const [imag, setImag] = useState(-0.4)

  return (
    <juliaContext.Provider value={{real, imag, setReal, setImag}}>
      <Navbar />

      <div id='main'>
        <Controls />
        <Fractal />
      </div>
    </juliaContext.Provider>
  );
}

export default App;
