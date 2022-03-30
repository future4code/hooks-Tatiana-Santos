```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let peso1= ex * 1
  let peso2= p1 * 2
  let peso3= p2 * 3
  let media = ((peso1+peso2+peso3)/6)
  
  if(media >=9) {
    return "A"
  } else if (media < 9 && >=7.5){
    return "B"
  } else if (media < 7 && >=6){
    return"C"
  } else {
    return "D"
  }
}

console.log(calculaNota(10,5,6))


