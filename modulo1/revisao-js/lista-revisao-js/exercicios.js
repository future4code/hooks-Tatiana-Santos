// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = []
    for (index of array){
        if (index % 2 === 0){
            arrayPares.push(index)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosElevados = []
    for (index of array){
        if (index % 2 === 0 ){
            numerosElevados.push(index ** 2)
        }
    }
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2){
    let maiorNumero
    let menorNumero 
    let maiorDiviselPorMenor
    
    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero= num1
    }
    let diferenca = maiorNumero - menorNumero
    maiorDiviselPorMenor = maiorNumero % menorNumero === 0
    return {
        maiorNumero: maiorNumero,
        maiorDiviselPorMenor: maiorDiviselPorMenor,
        diferenca: diferenca
    }  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares =[]
   for (let i = 0; numerosPares.length < n; i++){
       if (i % 2 == 0){
           numerosPares.push(i)
       }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA){
    return 'Equilátero'
}if( ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    return 'Escaleno'
}else {
    return 'Isósceles'
}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assitir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

const pessoa1 = {

	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}
const pessoa2 = {
    ... pessoa,
    nome:"ANÔNIMO"
}

return pessoa2

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   


    
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}