import './App.css';
import Controls from './components/Controls';
import Fractal from './components/Fractal';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div id='main'>
        <Controls />
        <Fractal />
      </div>
    </>

  );
}

export default App;
