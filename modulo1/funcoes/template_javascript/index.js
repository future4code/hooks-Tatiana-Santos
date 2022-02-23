
//INTERPRETAÇÃO 
//1
//Não vai aparecer nada, pois precisa chamar a função.
//Se eu tirar o console.log não vai aparcer também, não basta só chamar a função se ela não esta no console.log

//2
//A função vai retornar ao texto com lestras minusculas e incluir a cenoura.
//


let textoDoUsuario = prompt("insira um texto");

const outraFuncao = function (texto){
    return texto.toLowerCase().includes ("cenoura")
    
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)




//Escrita
// 1 
// A
function informações(){
    console.log('Meu nome é Tatiana, tenho 28 anos, sou estudante')
}

informações()


//B
function imprimirIn (nome, idade, cidade, profissão) { //parametro

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

imprimirIn("Tatiana", 28, "osasco", "atendente")

//2
//A

function soma (valor1, valor2){
    return valor1 + valor2
}

console.log(10+10)

//B

function numero (num1, number2){
return num1 =>number2
}

console.log(10 === 10)

//C

function par (numero){
return (numero%2 === 0)

}
console.log(par(6))

//D
function texto (string){
return `Digite texto ${string.toUpperCase()}
contem ${string.length}`

}

console.log(texto("Olá Mundo"))

//3

function soma (numero1, numero2){
    return numero1 + numero2
}

function subtração (numero1, numero2){
    return numero1 - numero2

}

function multiplicação (numero1, numero2){
    return numero1 * numero2
} 

function divisão (numero1, numero2){
     return numero1 / numero2

}

const primeiroNumero = Number(prompt("Qual o numero?"))
const segundoNumero = Number(prompt("Outro numero?"))

console.log (soma(primeiroNumero, segundoNumero))

console.log (subtração(primeiroNumero, segundoNumero))

console.log (multiplicação(primeiroNumero, segundoNumero))

console.log (divisão(primeiroNumero, segundoNumero))
