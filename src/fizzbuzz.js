function fizzBuzz(n){

    let resultado = "";
    if (n%3==0)
        resultado = "fizz";
    else if (n%5==0)
        resultado = "buzz";

    return resultado;
}
export default fizzBuzz;