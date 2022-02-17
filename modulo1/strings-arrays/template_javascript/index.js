//INTERPRETAÇÃO 

// undefined 
// null
//11
// 0
// 20 
// 7
//SUBI NUM ONIBUS EM MIRROCOS

// ESCRITA DE CODIGO 

// 1
 let email = prompt("Qual o seu email?")
 let nome = prompt("Qual seu nome?")
 console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}.`)

 //O e-mail santos@gmail.com foi cadastrado com sucesso. Seja bem-vinda(o), Tatiana. 


//2 

let comidas = ['lasanha', 'macarrão', 'sorvete', 'açai', 'pizza']

console.log(comidas)

console.log(`Essas são as minhas comidas preferidas ${comidas}
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`) 

let novaComida = prompt("Qual sua nova comida preferida?")

//let i = 1

comidas[1] = novaComida

console.log(comidas)

// 3

const listaDeTarefas = []
const tarefa1 =prompt("Primeira Tarefa?")
const tarefa2 =prompt("Segunda Tarefa?")
const tarefa3 =prompt("Terceira Tarefa?")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const tarefaFina =prompt("Tarefa Finalizada?")
listaDeTarefas.splice(Number(tarefaFina),1)
console.log(listaDeTarefas)






