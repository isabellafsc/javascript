let num = [5, 8, 2, 9, 3]
num[3] = 6  //Adiciona valor no índice 3
num.push(7) //Adiciona valor no final
num.length  //tamanho do array
console.log(num.indexOf(8)) //busca valor e informa o índice

console.log(`O vetor ${num} tem ${num.length} posições, o 4° número é o ${num[3]} e organizando todos os valores fica ${num.sort()}`)
