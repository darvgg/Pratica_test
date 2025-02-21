function fizzBuzz(n){

    let resultado = "";
    if (n%3 === 0)
        resultado = "fizz";
    else if (n%5 === 0)
        resultado = "buzz";
    else if (n%3 === 0  && n%5 === 0)
        resultado = "fizzbuzz";
    else
        resultado = n + "";
    return resultado;
}
export default fizzBuzz;