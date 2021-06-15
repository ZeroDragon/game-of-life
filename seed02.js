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

  seeder[59][100] = { value: 1, gen: 0 }
  seeder[60][100] = { value: 1, gen: 0 }
  seeder[61][100] = { value: 1, gen: 0 }

  seeder[58][101] = { value: 1, gen: 0 }
  seeder[57][102] = { value: 1, gen: 0 }
  seeder[57][103] = { value: 1, gen: 0 }

  seeder[62][101] = { value: 1, gen: 0 }
  seeder[63][102] = { value: 1, gen: 0 }
  seeder[63][103] = { value: 1, gen: 0 }

  seeder[60][104] = { value: 1, gen: 0 }

  seeder[58][105] = { value: 1, gen: 0 }
  seeder[62][105] = { value: 1, gen: 0 }
  seeder[59][106] = { value: 1, gen: 0 }
  seeder[60][106] = { value: 1, gen: 0 }
  seeder[61][106] = { value: 1, gen: 0 }
  seeder[60][107] = { value: 1, gen: 0 }

  seeder[57][110] = { value: 1, gen: 0 }
  seeder[58][110] = { value: 1, gen: 0 }
  seeder[59][110] = { value: 1, gen: 0 }
  seeder[57][111] = { value: 1, gen: 0 }
  seeder[58][111] = { value: 1, gen: 0 }
  seeder[59][111] = { value: 1, gen: 0 }

  seeder[56][112] = { value: 1, gen: 0 }
  seeder[60][112] = { value: 1, gen: 0 }

  seeder[55][114] = { value: 1, gen: 0 }
  seeder[56][114] = { value: 1, gen: 0 }
  seeder[61][114] = { value: 1, gen: 0 }
  seeder[60][114] = { value: 1, gen: 0 }

  seeder[57][124] = { value: 1, gen: 0 }
  seeder[58][124] = { value: 1, gen: 0 }
  seeder[57][125] = { value: 1, gen: 0 }
  seeder[58][125] = { value: 1, gen: 0 }

  return seeder
}
