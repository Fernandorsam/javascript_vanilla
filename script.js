let nota = Math.floor(Math.random() * 100)
let char = ''

if (nota < 60) {
  char = 'F'
} else if (nota >= 60 && nota <= 69) {
  char = 'D'
} else if (nota >= 70 && nota <= 79) {
  char = 'C'
} else if (nota >= 80 && nota <= 89) {
  char = 'B'
} else if (nota >= 90 && nota <= 100) {
  char = 'A'
} else {
  char = 'NOTA INVALIDA'
}

console.log(`sua nota é = ${nota}  sua classificação : ${char}`)
