import { useEffect, useRef } from 'react'
import './Fractal.css'
import FractalRenderer from '../features/fractalRenderer'

function Fractal() {

  const canvas = useRef()

  useEffect(() =>{
    const fractalRenderer = new FractalRenderer(canvas.current, 1000, 800)
    fractalRenderer.setPoint(0.3, -0.1)
    fractalRenderer.animate()
  })

  return (
    <canvas ref={canvas} />
  )

}

export default Fractal