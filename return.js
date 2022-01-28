function teste(n) {
  if (n == 1) {
    return 1
  } else {
    return n * teste(n - 1)
  }
}

console.log(teste(5))
