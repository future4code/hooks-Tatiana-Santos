// INTERPRETAÇÃO DO CÓDIGO 
//1 

let valor = 0
for(let i = 0; i < 5; i++){
    valor += i
}

//console.log(valor)

//Bom dá entender que ele vai adicionado, até chegar no 5 quando chegar o valor incrementado vai ser 10 

// 2- A O numero maior que 18 vai ser 30 
//B - Sim, na parte if colocar o numero.lista [i] (eu acho)


// 3- Vai rodar 4 * 

//INTERPRETAÇÃO DE ESCRITA


//1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//c) Por fim, imprima o array com os nomes dos bichinhos no console

let bichinhos = Number(prompt("Quantos bichinhos voce tem?"))

if(bichinhos === 0){
    //console.log("Que pena! Voce pode adotar um pet")
}

if (bichinhos > 0){
    let nomesPets = ["Julie", "Marie"];
    for(let i = 0 ; i > bichinhos; i++ ){
        nomesPets(promt("Quais os nomes dos seus Pets?"))
    }

    console.log(nomesPets)
}


// 2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//a) Escreva um programa que imprime cada um dos valores do array original.

let arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55]
console.log(arrayOriginal)

//b)  Escreva um programa que imprime cada um dos valores do array original divididos por 10

for (let numero of arrayOriginal)
console.log (numero / 10)

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

for (let numero of arrayOriginal){
    if (numero % 2 === 0){
        console.log(numero)
    }
}

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

let novoArray = ["O elemento do índex i é: numero"]
console.log(novoArray)


//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55]

function maiorEmenor (array){

let Maior = array [0]
let Menor = array [0]
 
for(let i=0; i<array.length; i++){
 if (array[i] > Maior){
     Maior = array[i]

 } else if (array[i] < Menor) {
     Menor= array[i]
 }

}
console.log(`Maior numero ${Maior} e o Menor numero ${Menor}`)
}

maiorEmenor(arrayOriginal)
