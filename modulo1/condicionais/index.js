//INTERPRETAÇÃO DO CÓDIGO 
// 1 - A
//O if ele vai dizer sé e true, já o else vai dizer se é false. O teste vai dizer se o resto do numero que o usario colocou é igual a 0, se ele vai passar vai ser if senão for vai ser else;

//B
//O numero sendo par, o resto da vai ser 0 = Passou no teste;

//C
//O numero sendo impar, o resto não vai ser igual 0 = Não passou no teste.

//2 - A
// O cofigo mostra que cada informção sobre a fruta irá passar uma ed cada vez;

// B
// O valor R$ 2,25

// C
// Se tirar o break ele vai passar todas informações que estão na sitaxe do codigo, ele não vai parar só na pera e sim, irá mostrar tudo. 

//3 - A
// A primeira linha está solicitando um numero ao usario;

// B
// Sim, o numero 10 é maior que 0; Se for -10 ele é menor que 0

// C
// Não havera erro no console, pois está pergutando se o numero é maior ou menor e não que são diferentes. 

// ESCRITA DE CODIGO 

// 1 - A

const idade = Number(prompt ("Qual sua idade?"))
console.log(`Ela pode dirigir`)

 const receberIdade = Number(prompt("Idade"))
 if (receberIdade){
     //console.log("Voce pode dirigir")
 }


// 2

let turno1 = prompt("Estuda em qual periodo? Digite M ,V OU N")
let turno2 = prompt("Estuda em qual periodo? Digite M ,V OU N")
let turno3 = prompt("Estuda em qual periodo? Digite M ,V OU N")

if(turno1) {
    console.log(`Bom dia!`)
}

if(turno2){
    console.log(`Boa tarde!`)

} else if(turno3){
     console.log(`Boa noite!`)
}

// 3

let turno1 = prompt("Estuda em qual periodo? Digite M ,V OU N").toLocaleUpperCase()
let turno2 = prompt("Estuda em qual periodo? Digite M ,V OU N").toLocaleUpperCase()
let turno3 = prompt("Estuda em qual periodo? Digite M ,V OU N").toLocaleUpperCase()

switch (turno1){
    case `M`: 
    console.log( `Bom dia`)
    break
}

switch (turno2){
    case `V`:
    console.log(`Boa tarde`)
    break
}

switch (turno3){
    case `N`:
    console.log(`Boa noite`)
    break

    default:
        console.log(`Periodo não encontrado`)
        break
}


// 4

const genero = prompt("Qual o o genero do filme?")
const valor = prompt("Qual o valor do ingresso?")

if (genero.toLocaleLowerCase() === "fantasia" && valor < 15){
    console.log ("Bom filme !")
}else {
    console.log("Não é dessa vez!")
}

