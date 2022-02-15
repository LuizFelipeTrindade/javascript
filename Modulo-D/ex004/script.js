//scripts para site

function contar(){
    let ini = document.getElementById('num1');
    let fim = document.getElementById('num2');
    let passo = document.getElementById('num3');
    let res = document.getElementById('res');


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Por favor adicione um valor');
    } else {
        res.innerHTML = 'Contando...';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i < f){
            //Contagem crescente
            for (let c = 1; c <= f; c += p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem decrescente
            for(let c = 1; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}

 //if (ini.value.length == 0 ) || fim.value.length == 0 {alert('')} é uma mandeuria de aparecer o alert com uma frase se um campo no for preenchido , note que a palavra ''ini'' é uma variavel e o ''value'' é o valor da função ''contar()''