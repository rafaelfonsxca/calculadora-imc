function calcularImc(){
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)

    var imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    var grau_imc = ''
    var texto = ''

    if(imc < 18.5){
        grau_imc = "MAGREZA"
        texto = "Você possui um baixo índice de massa corporal. Procure um nutricionista ou um especialista na áera da saúde para saber como melhorar seu IMC."
    }else if(imc >= 18.5 && imc <= 24.9){
        grau_imc = "NORMAL"
        texto = "Muito bom, você está com um bom índice de massa corporal. Procure um nutriconista ou um especialista na áera da saúde para saber como manter esse resultado."
    }else if(imc >= 25.0 && imc <= 29.9){
        grau_imc = "SOBREPESO"
        texto = "Você está com o seu índice de massa corporal um pouco acima do que deveria. Procure um nutricionista ou um especialista na áera da saúde para saber como melhorar seu IMC."
    }else if(imc >= 30.0 && imc <= 39.9){
        grau_imc = "OBESIDADE"
        texto = "Você apresenta um índice de massa corporal bem acima do que deveria, mas não se preocupe que não é nada grave. Procure um nutricionista ou um especialista na áera da saúde para saber como melhorar seu IMC."
    }else if(img > 40.0){
        grau_imc = "OBESIDADE GRAVE"
        texto = "Você apresenta um índice de massa corporal bem acima do que deveria que já chega a ser grave. Procure com urgência um nutricionista ou um especialista na áera da saúde para saber como melhorar seu IMC."
    }

    document.getElementById('imc').innerHTML = imc
    document.getElementById('grau_imc').innerHTML = grau_imc
    document.getElementById('texto').innerHTML = texto

}

function limpar(){
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}