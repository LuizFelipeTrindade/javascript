//RECURSIVIDADE
function falorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n * falorial (n-1)
    }
}
console.log(falorial(5))
