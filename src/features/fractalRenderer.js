import { GPU } from 'gpu.js'

class FractalRenderer {

  constructor(canvas, xResolution, yResolution) {
    this.canvas = canvas
    this.canvas.width = xResolution
    this.canvas.height = yResolution
    this.ctx = this.canvas.getContext('webgl2')
    this.gpu = new GPU({ canvas: this.canvas, context: this.ctx })

    this.iterate = this.gpu.createKernel(function(
      matrix,
      real,
      imag
    ) {

      const point = matrix[this.thread.y][this.thread.x]

      if (point[2] < 0) {
        return point
      }

      const y = (point[0] * point[0]) - (point[1] * point[1]) + real
      const x = (2 * point[0] * point[1]) + imag
      let iter = point[2] + 1

      if ((x*x) + (y*y) > 2) {
        iter *= -1
      }

      return [y, x, iter]

    })
      .setOutput([xResolution, yResolution])
      .setPipeline(true)
      .setImmutable(true)
      .setArgumentTypes({ matrix: 'Array2D(3)', real: 'Float', imag: 'Float' })
    
    this.initialize = this.gpu.createKernel(function() {

      const y = (this.thread.y / this.constants.yScaleFactor) - 2
      const x = (this.thread.x / this.constants.xScaleFactor) - 2

      return [y, x, 0]

    })
      .setOutput([xResolution, yResolution])
      .setPipeline(true)
      .setImmutable(true)
      .setConstants({ xScaleFactor: xResolution / 4, yScaleFactor: yResolution / 4 })

    this.render = this.gpu.createKernel(function(
      matrix
    ) {
      const point = matrix[this.thread.y][this.thread.x]

      if (point[2] >= 0) {
        this.color(0, 0, 0, 255)
      } else {
        const value = (-point[2] * 3) % 256
        this.color(value/255, value/255, value/255, 255)
      }

    })  
      .setOutput([xResolution, yResolution])
      .setGraphical(true)
      .setArgumentTypes({ matrix: 'Array2D(3)' })

    this.texture = this.initialize()
    this.render(this.texture)

  }

  setPoint = (real, imag) => {
    this.real = real
    this.imag = imag
  }

  animate = () => {

    const pass = this.iterate(this.texture, this.real, this.imag)
    this.texture.delete()
    this.texture = pass

    this.render(this.texture)

    requestAnimationFrame(this.animate)
  }

}

export default FractalRenderer

