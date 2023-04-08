import { useContext } from 'react';
import './Controls.css';
import juliaContext from '../features/juliaContext';

function Controls() {

  const {real, imag, setReal, setImag} = useContext(juliaContext)

  return (
    <div>
      <div>
        <label htmlFor='x'>Real:</label>
        <input 
          type='number' 
          id='x' 
          name='x' 
          value={real} 
          step={0.1}
          onChange={(e) => {
            setReal(e.target.value)
          }}
        />
      </div>
      <div>
        <label htmlFor='y'>Imaginary:</label>
        <input 
          type='number' 
          id='y' 
          name='y' 
          value={imag} 
          step={0.1}
          onChange={(e) => {
            setImag(e.target.value)
          }}
        />
      </div>
    </div>
  )

}

export default Controls