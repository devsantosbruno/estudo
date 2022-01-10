for (i = 0; i < 16; i++) {
  process.stdout.write('#')
}

process.stdout.write('\n')

for (y = 1; y < 15; y++) {
  for (x = 0; x < 16; x++) {
    if (x == 0 || x == 15) {
      process.stdout.write('#')
      if (x == 15) {
        process.stdout.write('\n')
      }
    } else {
      process.stdout.write(' ')
    }
  }
}

for (i = 0; i < 16; i++) {
  process.stdout.write('#')
}
