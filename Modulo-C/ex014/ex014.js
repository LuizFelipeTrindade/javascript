var idade = 72
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else if (idade > 17) {
    console.log('Voto Obrigatório')
}
// no primeiro if a idade é menor que 16 , então ele não vota,
// no segundo ''else if'' a idade é menor que 18 e maior que 65 então o voto é opcional
//no terceiro a idade é maior que 17 e o voto é obrigatório
//Gravar isso para entender lógica