const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const width = 1000 // height = width
const cellSize = 5
const rowSize = width / cellSize

let matrix = [... new Array(rowSize)].map(_ =>{
  return [... new Array(rowSize)].map(_ => {
    return { value: 0, gen: 0 }
  })
})

if (typeof seed !== 'undefined') {
  matrix = seed()
}

const drawMatrix = () => {
  ctx.clearRect(0, 0, width, width)
  matrix.forEach((row, iRow) => {
    row.forEach(({ value, gen, mutation }, iCell) => {
      if (!value) return
      const x = iCell * cellSize + cellSize / 2
      const y = iRow * cellSize + cellSize / 2
      ctx.beginPath()
      ctx.arc(x, y, cellSize / 2, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(${gen}, ${255 - (mutation || 0)}, ${255 - gen}, 1)`
      // ctx.fillStyle = `rgba(255, 255, 255, 1)`
      ctx.fill()
    })
  })
}

const gameLoop = () => {
  const newGeneration = []
  const genMutation = Math.round(Math.random() * 255)
  const environment = Math.round(Math.random() * 100) > 99 ? Math.round(Math.random() * 255) : false

  matrix.forEach((row, iRow) => {
    const newRow = []
    row.forEach(({ value, gen, mutation }, iCell) => {

      if (mutation === environment) {
        return newRow.push({ value: 0, gen: 0 })
      }

      const prevRow = (iRow - 1 < 0) ? rowSize - 1 : iRow - 1
      const nextRow = (iRow + 1 >= rowSize) ? 0 : iRow + 1
      const prevCell = (iCell - 1 < 0) ? rowSize - 1 : iCell - 1
      const nextCell = (iCell + 1 >= rowSize) ? 0 : iCell + 1

      if (gen >= 255) {
        matrix[prevRow][prevCell] = { value: 1, gen: 0 },
        matrix[prevRow][iCell] = { value: 1, gen: 0 },
        matrix[prevRow][nextCell] = { value: 1, gen: 0 },
        matrix[iRow][prevCell] = { value: 1, gen: 0 },
        matrix[iRow][nextCell] = { value: 1, gen: 0 },
        matrix[nextRow][prevCell] = { value: 1, gen: 0 },
        matrix[nextRow][iCell] = { value: 1, gen: 0 },
        matrix[nextRow][nextCell] = { value: 1, gen: 0 }
      }

      const aliveNeig = [
        matrix[prevRow][prevCell].value,
        matrix[prevRow][iCell].value,
        matrix[prevRow][nextCell].value,
        matrix[iRow][prevCell].value,
        matrix[iRow][nextCell].value,
        matrix[nextRow][prevCell].value,
        matrix[nextRow][iCell].value,
        matrix[nextRow][nextCell].value
      ].reduce((acum, curr) => acum + curr)

      if (value) {
        if (aliveNeig === 2 || aliveNeig === 3) {
          return newRow.push({ value, gen: gen + 1, mutation: mutation })
        }
        return newRow.push({ value: 0, gen: 0 })
      } else {
        if (aliveNeig === 3) {
          const newMutation = Math.round(Math.random()) ? genMutation : mutation
          return newRow.push({ value: 1, gen: 0, mutation: newMutation })
        }
        return newRow.push({ value: 0, gen: 0 })
      }
    })
    newGeneration.push(newRow)
  })
  matrix = newGeneration
  drawMatrix()
}

setInterval(() => {
  gameLoop()
}, 1000 / 30)
