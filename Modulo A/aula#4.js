//No javascript vamos utilizar o simbolo de '+' para sumar e para concatenar, por exemplo:

//string  + string -> Concatenacion
var nome = window.prompt('Qual é seu nome?')
        alert('Seu nome é '+ nome);

//outro exemplo para cuando é uma suma de numeros

var n1 = prompt('Digite um número: '); //string
var n2 = prompt('Digite outro número: '); //string
var s = Number.parseInt(n1) + parseInt(n2);
window.alert('A soma dos valores é '+ s);

//nota: os prompt sempre retorna um string, de ai que é preciso convertir o string a number para poder sumar as variáveis como números, dá para utilar tanto number.parsint() como só parseint()