let num = [5, 8, 2];

num.sort();

num.push(12);

console.log(num);

console.log(`O vetor tem ${num.length} posições `);

console.log(`O primeiro valor do vetor é ${num[0]}`);

for(let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}

/*console.log(num[2]);*/

/*num[3] = 6;
num.push(8);
num.length; 
console.log(num);*/
