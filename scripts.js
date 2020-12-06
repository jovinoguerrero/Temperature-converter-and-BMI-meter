// Exercícios 1 e 2

let inputC = document.getElementById("inputC");
let inputF = document.getElementById("inputF");

// Fica atento ao input Celsius
inputC.addEventListener("input", function(e) {
    inputF.value = ((this.value*(9/5)) + 32)

    if(this.value == "") {
        inputF.value = ""
    }
})

// Fica atento ao input Fahrenheit
inputF.addEventListener("input", function(e) {
    inputC.value = (this.value - 32) * 5/9
    if(this.value == "") {
        inputC.value = ""
    }
})

// Exercício 3

let inputPeso = document.getElementById("inputPeso");
let inputAltura = document.getElementById("inputAltura");
let formIMC = document.getElementById("formIMC");
let btnIMC = document.getElementById("btnIMC");
let outputRes = document.getElementById("outputRes");
let outputRecom = document.getElementById("outputRecom");

// Cancela o submit e a atualização do site
formIMC.addEventListener("submit", function(e) {
    e.preventDefault()
})

// Fica atento ao click do botão e mostrar o resultado do calculo do IMC e uma recomendação
btnIMC.addEventListener("click", function(e) {
    let IMC = inputPeso.value/(Math.pow(inputAltura.value, 2))
    IMC = Math.round(IMC * 100) / 100
    outputRes.value = outputRes.defaultValue + IMC + " Kg/m², "
    console.log(IMC)

    if(IMC >= 0 && IMC < 19){
        outputRes.value = outputRes.defaultValue + IMC + " Kg/m², " + "MUITO MAGRO"
        outputRecom.value = outputRecom.defaultValue + "DIETA ESPECIAL"
    } else if(IMC >= 19 && IMC < 25) {
        outputRes.value = outputRes.defaultValue + IMC + " Kg/m², " + "NORMAL"
        outputRecom.value = outputRecom.defaultValue + "MANTER"
    } else if(IMC >= 25 && IMC < 30) {
        outputRes.value = outputRes.defaultValue + IMC + " Kg/m², " + "SOBREPESO"
        outputRecom.value = outputRecom.defaultValue + "DIETA ESPECIAL"
    } else if(IMC >= 30 && IMC < 40) {
        outputRes.value = outputRes.defaultValue + IMC + " Kg/m², " + "OBESO"
        outputRecom.value = outputRecom.defaultValue + "ACADEMIA NUTRICIONISTA"
    } else if(IMC >= 40) {
        outputRes.value = outputRes.defaultValue + IMC + " Kg/m², " + "OBESIDADE GRAVE"
        outputRecom.value = outputRecom.defaultValue + "PROCURE UM MÉDICO"
    } else {
        outputRes.value = outputRes.defaultValue + "Cálculo não válido!"
        outputRecom.value = outputRecom.defaultValue + "Por favor, revise os valores de peso y altura"
    }
})

// Exercício 4. Ache o maior número da lista [2, 4, 7, 34, 76, 92].
let array1 = [2, 4, 7, 34, 76, 92];
let maiorNum = 0;

for(let i = 0; i < array1.length; i++){
    if(maiorNum < array1[i]) {
        maiorNum = array1[i];
    }
}
console.log("Número maior do array [2, 4, 7, 34, 76, 92]: "+maiorNum)

// Exercício 5. Ache o menor número da lista [-1, -5, 56, 34, 91].
let array2 = [-1, -5, 56, 34, 91];
let menorNum = 0;

for(let i = 0; i < array2.length; i++){
    if(menorNum > array2[i]) {
        menorNum = array2[i];
    }
}
console.log("Número menor do array [-1, -5, 56, 34, 91]: "+menorNum)