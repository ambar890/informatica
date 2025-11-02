function calcularPromedio() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Validación
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultadoNotas").innerHTML = 
            "<p style='color:red;'>Por favor ingresa todas las notas</p>";
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultadoNotas").innerHTML =
        "<h3>El promedio es: " + promedio.toFixed(2) + "</h3>";
}
