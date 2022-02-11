// EXERCICIO DE INTERPRETACAO DE CODIGO //

/* 1
Falso
Falso
Verdadeiro
Falso
*/

/*
para ficar certo, tem que ser
let primeiroNumero = Valor de algum numero
let segundoNumero = Valor de algum numero 

quando jogar no const soma, de fato vai ficar o valor certo. 
*/

// EXERCICIO DE ESCRITA DE CODIGO //

// 1

const idade = Number(prompt('Qual sua idade?'))
const idadeAmigo = Number(prompt('Qual a idade do seu amigo?'))

const CompararIdade = idade > idadeAmigo
const IdadeDif = idade - idadeAmigo

console.log('Sua idade é maior do que seu amigo?', CompararIdade);

//false//

console.log('A diferença de idade é de', IdadeDif, 'anos');

// - 2 anos a diferença //

// 2

const numero =Number(prompt('insira um numero impar') %2)
;


console.log(3%2);

//notei que par vai dar para, e impar vai dar impar. 

// Questão 3

const anos =Number(prompt('Qual sua idade em anos?'));
const meses = anos*12
const dias = anos*365
const horas =anos*24

console.log(meses, dias, horas);

// Questão 4

let primeiroNumero =Number(prompt('Qual numero 4'))
let segundoNumero =Number(prompt('Outro numero 8'))

console.log(primeiroNumero > segundoNumero);

// false, pois o Qual numero coloquei 4 
// Outro numero coloquei 8

console.log (primeiroNumero === segundoNumero);

//false

console.log (primeiroNumero/segundoNumero===0);
//false

console.log (segundoNumero/primeiroNumero===0);
//false







 









































