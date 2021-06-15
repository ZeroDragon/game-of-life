const seed = () => {
  const seeder = [... new Array(rowSize)].map(_ =>{
    return [... new Array(rowSize)].map(_ => {
      return { value: 0, gen: 0 }
    })
  })

  seeder[59][91] = { value: 1, gen: 0 }
  seeder[59][90] = { value: 1, gen: 0 }
  seeder[60][91] = { value: 1, gen: 0 }
  seeder[60][90] = { value: 1, gen: 0 }

  return seeder
}
