let num = [5, 8, 2];

num.push(12);

num.sort();

console.log(num);

console.log(`O vetor tem ${num.length} posições `);

console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(3) 

if(pos == -1){
    console.log('[ERRO]Valor não encontrado')
}else {
    console.log(`O valor está na posição ${pos}`)
}

/*console.log(num[2]);*/

/*num[3] = 6;
num.push(8);
num.length; 
console.log(num);*/
