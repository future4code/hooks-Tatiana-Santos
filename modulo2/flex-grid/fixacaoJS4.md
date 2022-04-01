```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
contaOcorrencias (arrayDeNumeros, numeroEscolhido) {
  let repeticao= 0;
  for (let i=0; i< arrayDeNumeros.length; i++){
    if (arrayDeNumeros [i] === numeroEscolhido){
      repeticao ++
    }
  }
  if(repeticao ! ==0){
    return `O numuro ${numeroEscolhido} aparece ${repeticao}x`
  }else{return `Numero não econtrado`  
  }
}
  
