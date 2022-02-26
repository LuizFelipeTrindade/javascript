let num = [5,8,2,9,3,9,14,15,21,24]

num[5] = 6

num.push(7)

console.log(`Nosso vetor é o ${num}`)

console.log(`E a comprimento do vetor é ${num.length}`)

console.log(num[1])

let pos = num.indexOf(24)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor oito ta na posição ${pos}`)
}


