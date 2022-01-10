// let row = 5
// for (let i = row; i--; ) {
//   let col = 0
//   while (col <= i) {
//     process.stdout.write('#')
//     col++
//   }
//   process.stdout.write('\n')
// }

var espaco = 5
const e = ' '

for (i = 0; i < 5; i++) {
  for (x = 0; x < espaco; x++) {
    process.stdout.write(e)
  }
  if (i == 1) {
    process.stdout.write('#')
    process.stdout.write(e)
  }
  if (i == 2) {
    process.stdout.write('#')
    for (x = 0; x < 3; x++) {
      process.stdout.write(e)
    }
  }

  if (i == 3) {
    process.stdout.write('#')
    for (x = 0; x < 5; x++) {
      process.stdout.write(e)
    }
  }

  if (i == 4) {
    process.stdout.write('#')
    for (x = 0; x < 7; x++) {
      process.stdout.write(e)
    }
  }
  process.stdout.write('#')
  espaco--
  process.stdout.write('\n')
}
for (i = 0; i < 11; i++) {
  process.stdout.write('#')
}

// why % in terminal?
// organize the code with as few lines as possible
