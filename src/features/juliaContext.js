import { createContext } from "react";

const juliaContext = createContext({
  real: 0,
  imag: 0,
  setReal: (real) => {},
  setImag: (imag) => {}
})

export default juliaContext