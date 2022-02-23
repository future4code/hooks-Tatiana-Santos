// EXERCICIO DE INTERPRETAÇÃO
// 1 
//O primiero console irá aparecer o primeiro nome do Matheus Nachtergaele
//O segundo console irá aparacer o último nome Virginia Cavendish
//O terceiro console irá aparecer o terceiro nome Denise Braga

// 2
//A
//Juba
//Juco
//Juca
//B
//Ele faz copia de tudo que esta naquele objeto que foi declarado acima

//3 
//A
//Irá sair o nome da pessoa Caio, e o boleano falso 
//Irá dar undefined
//B
//Por que ele não foi declarado

// EXERCICIO ESCRITA DE CÓDIGO 
// 1 - A

const pessoa = {
nome: "Tatiana",
apelidos: [`Tati`, `Tatinha`, `Tatah`]

}

function nomePessoa (pessoa){

}

console.log(`Eu sou Tatiana, mas pode me chamar de: ${pessoa.apelidos [0]}, ${pessoa.apelidos [1]} e ${pessoa.apelidos[2]}`)

//B 

const outraPessoa = {
    nome: "Tatiana",
    apelidos: [`Tati`, `Tatinha`, `Tatah`]
    
    }
    function nomeDaPessoa (outraPessoa){

    }
   const novaPessoa = {
       ...pessoa,
       novosApelidos: [`Carinhosa`, `Legal`, `Simpatica`]
   }
   
console.log(novaPessoa)

//2 - A

const novo = {
nome: "Paulo",
idade: 20,
profissao: "Médico"

}

const novoNome ={
    nome: "Lilian",
    idade: 30,
    profissao: "Dentista"
}

const retornarInformações = (pessoa1, pessoa2) => {

    pessoa1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.idade.length, pessoa1.profissao, pessoa1.profissao.length]

    pessoa2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.idade.length, pessoa2.profissao, pessoa2.profissao.length]

    console.log(pessoa1)
    console.log(pessoa2)

}

retornarInformações (novo, novoNome)

//3
const carrinho = []

let frutas = {
    fruta1: "banana",
    fruta2: "melao",
    fruta3: "abacate",
    disponibilidade: true
}

function frutasSac (frutas){
carrinho = [frutas.fruta1, frutas.fruta2, frutas.fruta3]
}

carrinho.push([frutas.fruta1, frutas.disponibilidade, frutas.fruta2, frutas.disponibilidade, frutas.fruta3, frutas.disponibilidade])


console.log(carrinho)

//PLANTÃO

const carrinhoN = []

const frutas1 = {
    nome: "banana",
    dis: true
}

const frutas2 = {
    nome:"melao",
    disp: true
}

const frutas3 = {
    nome: "abacate",
    disp: true
}

function adicionarCar (frutas){
    carrinhoN.push(frutas)

}

adicionarCar (frutas1)
adicionarCar (frutas2)
adicionarCar (frutas3)

console.log(carrinhoN)

