//MANIPULAÇÃO DE DADOS

//convertir variáveis de um tipo para outro

//para convertir de string a numero
Number.parseInt()//converte para número
Number.parseFloat()//converte para float
//--------dá para usar também só parseint() ou parsefloat()
//OJO 
//hoje na atualidade só usuando Number(var), o javascript buscara a melhor interpretação da variavel para number o float

//----------------------------------------------------------------------------------------------------------------

/*para convertir de numero a string*/

String(n);
numero.toString()

//uma melhor forma de usuar também string é usando os template string
var s = JavaScript
`Eu estou aprendendo ${s}`;

//mais sobre string

n.length //--- quantos caracteres a string tem
n.toUpperCase() //--- tudo para 'MAIÚSCULAS'
n.toLowerCase() //-----tudo para 'minúsculas'

//----------------------------------------------------------------------------------------------------------------
//FORMATAR NUMEROS
n1 = 1545.5

//para agregar duas casas no decimal podemos usar
n1.toFixed(2) // 1545.50
//si quiser trocar o ponto (.) pela virgula (,) seria
n1.toFixed(2).replace('.', ',') //1545,50

//OJO
//Uma dica para botar o numero em moneda e valor do pais que quera
n1.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'}) // R$1,545.50
n1.toLocaleString('pt-Br', {style: 'currency', currency: 'USD'}) // $1,545.50
n1.toLocaleString('pt-Br', {style: 'currency', currency: 'EUR'}) // £1,545.50