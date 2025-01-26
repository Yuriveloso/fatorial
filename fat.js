function CALCULADOR_FATORIAL() {
    const numero = +document.getElementById('N!').value;
    const resultado = document.getElementById('resultado');

    if (numero == '' || numero < 0) {
        resultado.textContent = "Por favor, insira um número válido";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++){
        fatorial *= i;
    }


    resultado.textContent = `O fatorial de ${numero} é: ${fatorial}`;
}

document.getElementById('calcular').addEventListener('click', CALCULADOR_FATORIAL);