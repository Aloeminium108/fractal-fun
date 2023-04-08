import './Controls.css';

function Controls() {

  return (
    <div>
      <div>
        <label htmlFor='x'>Real:</label>
        <input type='number' id='x' name='x' value={0.0}/>
      </div>
      <div>
        <label htmlFor='y'>Imaginary:</label>
        <input type='number' id='y' name='y' value={0.0}/>
      </div>
    </div>
  )

}

export default Controls