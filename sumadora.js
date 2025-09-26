function sumarNumeros(){
    let num1=prompt("Ingrese el primer numero:");
    let num2=prompt("Ingrese el segundo numero:");
    num1=Number(num1);
    num2=Number(num2);
    if(!isNaN(num1) && !isNaN(num2)){
        let suma= num1+num2;
        alert("resultado:"+suma);
 }else{
    alert("Ingrese solo numeros");
 }
}