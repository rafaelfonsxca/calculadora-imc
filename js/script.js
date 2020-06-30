function calcularImc(){
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)

    var imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    var grau_imc = '';

    if(imc < 18.5){
        grau_imc = "MAGREZA"
    }else if(imc >= 18.5 && imc <= 24.9){
        grau_imc = "NORMAL"
    }else if(imc >= 25.0 && imc <= 29.9){
        grau_imc = "SOBREPESO"
    }else if(imc >= 30.0 && imc <= 39.9){
        grau_imc = "OBESIDADE"
    }else if(img > 40.0){
        grau_imc = "OBESIDADE GRAVE"
    }

    document.getElementById('imc').innerHTML = imc
    document.getElementById('grau_imc').innerHTML = grau_imc
}

function limpar(){
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('imc').value = ''
    document.getElementById('grau_imc').value = ''
}