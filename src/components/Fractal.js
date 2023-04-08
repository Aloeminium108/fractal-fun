import { useEffect, useRef, useContext } from 'react'
import './Fractal.css'
import FractalRenderer from '../features/fractalRenderer'
import juliaContext from '../features/juliaContext'

function Fractal() {

  const canvas = useRef()

  const {real, imag} = useContext(juliaContext)

  useEffect(() =>{
    const fractalRenderer = new FractalRenderer(canvas.current, 1000, 800)
    fractalRenderer.setPoint(real, imag)
    fractalRenderer.animate()
  })

  return (
    <canvas ref={canvas} />
  )

}

export default Fractal