let num = [8,5,9,7,6,2,14]

num.sort()

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos = 0 in num){
    console.log(num[pos])
}

