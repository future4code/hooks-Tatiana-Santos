// INTERPRETAÇÃO DE CÓDIGO
//A- Vai aparecer tudo que está declarado na variavel
//B- Vai aparecer os nomes
//C- Vai filtrar tudo referente a Chijo

// ESCRITA DE CÓDIGO 
//1 - Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//a) Crie um novo array que contenha apenas o nome dos doguinhos
//b) Crie um novo array apenas com os cachorros salsicha
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


 const nomePets = (item) => {
     return item.nome
 }

 const namePets = pets.map (nomePets)
 console.log (namePets)



const nomeRaca = pets.filter ((item) => {
return item.raca === `Salsicha`
})

console.log (nomeRaca)

const poodle = pets.filter ((item)=> {
    return item.raca === `Poodle`
})


const poodlePromo = poodle.map ((promocao) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/${promocao.nome}!`
})

console.log(poodlePromo)

//2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//a) Crie um novo array que contenha apenas o nome de cada item
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeDeItem = (item) => {
     return item.nome
 }

 const itemNome = produtos.map (nomeDeItem) 
 console.log (itemNome)


 const descontoPorcento = ((item, indice, array) =>{
    return {nome: item.nome, preco: item.preco *0.95}
 })

 const desconto = produtos.map(descontoPorcento) 
 console.log(desconto)

const bebidas = produtos.filter((item, indice, array)=>{
    return item.categoria === `Bebidas`
})

console.log (bebidas)


const ype = produtos.filter((item)=>{
    return item.nome.includes ("Ypê")
})

console.log (ype)

const aquiTemYpe = produtos.map((item)=>{
return `Compre ${item.nome} por ${item.preco}`
})

console.log(aquiTemYpe)

