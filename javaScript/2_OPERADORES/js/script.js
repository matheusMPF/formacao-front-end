// Aula 205: Number

console.log("Aula 205: Number")
console.log("")

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);
console.log(typeof "Matheus");
console.log(typeof true);

console.log("")

// Aula 206: Operações Aritmétricas
console.log("Aula 206: Operações Aritmétricas")
console.log("")

console.log(2 + 4)
console.log(10 - 2)
console.log(120 / 2)
console.log(7 * 12)
console.log(2 + (3 + 12 * 5));

console.log("")

// Aula 207: Special Numbers
console.log("Aula 207: Special Numbers")
console.log("")

console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof 12 * "ads")
console.log(typeof NaN)

console.log("")

// Aula 208: Strings
console.log("Aula 208: Strings")
console.log("")

console.log("Um texto com aspas duplas")
console.log('Um texto com aspas simples')
console.log(`Um texto com Crase`)
console.log(typeof "Um texto com aspas duplas")
console.log(typeof 'Um texto com aspas simples')
console.log(typeof `Um texto com Crase`)

console.log("")

// Aula 209: Caracteres especiais em String
console.log("Aula 209: Caracteres especiais em String")
console.log("")

console.log("Testanda a \nquebra de linha")
console.log("Testanda espaçamento \t de tab")

console.log("")

//Aula 210: Concatenação
console.log("Aula 210: Concatenação")
console.log("")

console.log("Meu " + "texto " + "Concatenado.")

console.log("")

//Aula 211: Interpolação
console.log("Aula 211: Interpolação")
console.log("")

var nome = "Matheus";
var idade = 19;
var curso = "ADS";

console.log(`Bem-vindo! ${nome}. Sua idade atual é ${idade}, você está no curso de ${curso}.`);

console.log("")

//Aula 212: Booleans
console.log("Aula 212: Booleans")
console.log("")

console.log(true)
console.log(5 > 30)
console.log(10 > 2)
console.log(10 == 10)

console.log("")

// Aula 213 / 214: Comparações / Valor Idêntico

// Maior e Menor que: > e <
// Maior ou igual e menor ou igual: >= e <=
//Igual: == -> Não considera o tipo da Variável
// Diferente: !=
// Idêntico: === -> Considera o tipo da Variável

console.log("Aula 213 / 214: Comparações / Valor Idêntico")
console.log("")

console.log(12 > 6)
console.log(8 < 1)
console.log(10 == 10)
console.log(10 == "10")
console.log(30 >= 30)
console.log(10 <= 2)
console.log(10 === 10)
console.log(10 === "10")

console.log("")

//Aula 215: Opeadores lógicos

//&& - AND -> true apenas se ambas condições forem verdadeiras
// || - OR -> Basta uma condição ser verdadeira para ser true
//! - NOT -> Inverte a comparação

//Aula 216: Tabela Verdade

/*
    Condição A | Condição B | A && B | A || B | ! A
    False      | False      | False  | False  | True
    False      | True       | False  | True   | True
    True       | False      | False  | True   | False
    True       | True       | True   | True   | False
*/

//Aula 217: Operadores lógicos na prática
console.log("Aula 217: Operadores lógicos na prática")
console.log("")

console.log(10 > 3 && 2 < 5)
console.log(512 > 501 && "Matheus" == 10)
console.log(10 > 3 || 2 < 5)
console.log(512 > 501 || "Matheus" == 10)
console.log(10 > 3 && 2 < 5)
console.log(10 > 3 && 2 < 5)
console.log(10 > 3 && 2 < 5)
console.log(10 > 3 && 2 < 5)

console.log("")

//Aula 218: Empty Value

//undefined: Geralmente é visto quando o código ainda não foi definido
//null: Constuma ser imposto nas variáveis, para indicar que o valor inicial é nulo (sem valor)

console.log("Aula 218: Empty Value")
console.log("")

console.log(typeof null, typeof undefined)
console.log(null == undefined)
console.log(null === undefined)
console.log(null == false)
console.log(undefined == false)

console.log("")

//Aula 219: Mudança de tipos automáticas

// 5 * null = 0
// "5" - 3 = 2
// "5" + 3 = 53
// "a" * "b" = NaN

console.log("Aula 219: Mudança de tipos")
console.log("")

console.log(5 * null)
console.log("5" - 3)
console.log("5" + 3 )
console.log("a" * "b")


console.log("")
