function dividir(a, b) {
    var resultado;
    if (b==0){
        resultado = "Error";
    }
    else{
        resultado = a / b;
    }
    return resultado;
  }
  
  export default dividir;
  