const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const getColor = () => {
  return `rgba(
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    1
  )`
  // return 'rgba(0,0,0,1)'
}
for(var i=0; i<=800; i+=20) {
  ctx.strokeStyle = getColor()
  ctx.beginPath()

  ctx.moveTo(400,i/2)
  ctx.lineTo(400-i/2,400)

  ctx.moveTo(400,i/2)
  ctx.lineTo(i/2+400,400)

  ctx.moveTo(400,800-i/2)
  ctx.lineTo(400+i/2,400)

  ctx.moveTo(400,800-i/2)
  ctx.lineTo(400-i/2,400)

  ctx.moveTo(0,800-i)
  ctx.lineTo(i,0)

  ctx.moveTo(i,0)
  ctx.lineTo(800,i)

  ctx.moveTo(800,i)
  ctx.lineTo(800-i,800)

  ctx.moveTo(800-i,800)
  ctx.lineTo(0,800-i)

  ctx.stroke()
}
