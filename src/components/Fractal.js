import { useEffect, useRef, useContext, useState } from 'react'
import './Fractal.css'
import FractalRenderer from '../features/fractalRenderer'
import juliaContext from '../features/juliaContext'
import Warning from './Warning'

function Fractal() {

  const canvas = useRef()

  const [warningFlag, setWarningFlag] = useState(true)

  const {real, imag} = useContext(juliaContext)

  useEffect(() =>{
    const fractalRenderer = new FractalRenderer(canvas.current, canvas.current.offsetWidth, canvas.current.offsetHeight)
    fractalRenderer.setPoint(real, imag)

    if (!warningFlag)
      fractalRenderer.animate()
  })

  return (
    <div id='fractal-container'>
      <canvas ref={canvas} />
      {
        warningFlag
          ? <Warning setFlag={setWarningFlag} />
          : <></>
      }
    </div>
  )

}

export default Fractal