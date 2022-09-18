// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio para altura //

alert("Olá Bem-vindo(a)")


let raio = Number(prompt("Por favor, inserir o valor do raio: "))
let altura = Number(prompt("Por favor, inserir o valor da altura: "))
let volume = 3.14159 * Math.pow(raio,2) * altura
alert("O volume da lata de oleo é: " + volume)