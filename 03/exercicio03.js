
// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma //

alert("Olá, Bem-vindo(a)")

let raio = Number(prompt("Por favor, inserir o valor do raio")) //5
const valorPi = 3.14159 
raio = raio ** 2

let calculo = valorPi * raio
alert("Valor da área: " + calculo)
calculo = 2 * valorPi * raio
alert("Valor do perimetro: " + calculo)
