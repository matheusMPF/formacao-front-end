// Aula 222: Salvando Valores
console.log("Aula 222: Salvando Valores")
console.log("")

let nome = "Matheus";
console.log(nome);

nome = "Matheus Magalhães";
console.log(nome)

const idade = 19
console.log("Idade:" + idade)

console.log("")

// Aula 223: Aprofundando em variáveis

//Não podemos começar variáveis com números e nem alguns caracteres especiais, como: @
//As variáveis são case sensitive
console.log("Aula 223: Aprofundando em variáveis")
console.log("")

 let a = 10,
 b = 20,
 c = 30;
 console.log(a, b, c)

 let nomeCompleto = "Matheus Magalhães";
 let nomecompleto = "João da Silva"
 console.log(nomeCompleto, nomecompleto)

 let _teste = "ok"
 let $teste = "ok"

 console.log($teste, _teste)

console.log("")

// Aula 227: Função Prompt
console.log("Aula 227: Função Prompt")
console.log("")

// const yourName = prompt("Informe seu nome:")
// const yourCourse = prompt("Informe seu Curso:")

// console.log(`Olá, ${yourName}. Seja muito bem-vindo ao curso de ${yourCourse}! `)

console.log("")

// Aula 228: Função Alert
console.log("Aula 225: Função alert")
console.log("")

// alert("Hello World")

console.log("")

// Aula 229: Objeto Math 
console.log("Aula 229: Objeto Math ")
console.log("")

// Retorna o maior valor
console.log(Math.max(5, 2, 1, 10))
console.log(Math.max(-15, -0.75, 0, -150))

//Arredonda o número para baixo
console.log(Math.floor(3.14))
console.log(Math.floor(-0.45))

//Arredonda o número para cima
console.log(Math.ceil(3.14))
console.log(Math.ceil(-1.75))

// Aula 230: Objeto Console
console.log("Aula 230: Objeto console")
console.log("")

console.log("console.log -> Exibe uma mensagem no console")

console.error("console.error -> Exibe um erro")

console.warn("console.warn -> Exibe um aviso")

console.log("")

// Aula 232: If | Aula 233: Else
console.log("Aula 232: if")
console.log("")

// const mediaSalarial = 3500;
// let meuSalario = prompt("Informe seu salário:")

// meuSalario = parseFloat(meuSalario);

// console.log(typeof meuSalario)
// if (meuSalario > mediaSalarial){
//     console.log(`Parabéns, Você recebe acima da média dos Desenvolvedores Front-end. A média salárial é de: ${mediaSalarial}`)
// }else{
//     console.log(`Seu salário está abaixo da média de desenvolvedores Front-end. A média é de ${mediaSalarial}`)
// }

console.log("")

// Aula 234: Else if 
console.log("Aula 233: Else if")
console.log("")

if(1 > 2){
    console.log("Teste 1");
} else if(2 > 3){
    console.log("Teste 2!");
} else if (5 > 1){
    console.log("True");
}

console.log("")

// Aula 236: While 
// console.log("Aula 236: While")
// console.log("")

// let i = 0;

// while(i <= 3 ){
//     console.log(`Repetindo: ${i}`)
//     i++
// }

// let tentativas = 1
// const correctlyPassword = "150703"
// let Password = prompt("Informe Sua senha:")

// if(Password === correctlyPassword){
//     console.log("Senha Correta!")
// }else{

//     while(tentativas <= 2 && Password !== correctlyPassword){

//         Password = prompt("Senha incorreta, Tente novamente:")
//         tentativas++
//     }

//     if(Password === correctlyPassword){
//         console.log("Senha Correta!")
//     }else{
//         console.log("Limite de tentativas excedido. Tente novamente mais tarde.")
//     }
// }


console.log("")

// Aula 237: do while
console.log("Aula 237: do while")
console.log("")

let o = 3

do{
    console.log(`Valor de o: ${o}`)
    o--
}while(o >= 0)

console.log("")

// Aula 238: for 
console.log("Aula 238: for")
console.log("")

for(let i = 0; i < 3; i++){
    console.log(`Contando ${i}`);
}

console.log("")

// Aula 240: Forçando Saída do Loop
console.log("Aula 240: Forçando Saída do Loop")
console.log("")

for(let i = 20; i > 10; i--){
    console.log(`O valor de i é: ${i}`)

    if(i === 15){
        console.log(`O valor final de i é: ${i}`)
        break;
    }
}

console.log("")

// Aula 241: Par ou Ímpar?
console.log("Aula 241: Par ou Ímpar")
console.log("")

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`O número ${i} é par`)
    }else{
        console.log(`O número ${i} é ímpar`)
    }
}

console.log("")

// Aula 242: Switch
console.log("Aula 242: Swich")
console.log("")

const job = "Programador";

switch(job){

    case "Psicologo":
        console.log("Você é Psicologo");
        break;
    case "Programador":
        console.log("Você é Programador");
        break;
    case "Advogado":
        console.log("Você é Advogado");
        break;
    default:
        console.log("Profissão não encontrada!")
}

console.log("")

//Criando um Banco.

console.log("Criando um Banco.")
console.log("")

//Cadastro no Banco

alert("Faça o cadastro em nosso Banco:")

let userName = prompt("Informe seu nome:")
let accountType = prompt("Informe seu tipo de conta: Poupança / Corrente")


if(userName && accountType){
    console.log(`Seja bem-vindo ao nosso Banco ${userName}. Aqui você poderá administra seu dinheiro da sua forma. Sua conta está como "Conta ${accountType}"`)
}else{

    while(!userName || !accountType){

        userName = prompt("Por favor, informe um nome válido:")
        accountType = prompt("Escolha uma das opções de conta: Poupança / Corrente")
    }

    alert(`Seja bem-vindo ao nosso Banco ${userName}. Aqui você poderá administra seu dinheiro da sua forma. Sua conta está como "Conta ${accountType}"`)

}

//Dentro do sistema

let currentBalance = 0;
let routes;

while(routes !== "4"){

routes = prompt("Como podemos ajudar agora? 1- Verificar Saldo Atual / 2- Adicionar dinheiro / 3- Retirar dinheiro / 4- Fechar Sistema")

    switch(routes){
        case "1":
            alert(`Seu saldo atual é: ${currentBalance}`)
    
            break;

        case "2":
            let addMoney = prompt("Informe a quantidade que deseja adicionar:")
            addMoney = parseFloat(addMoney);
    
            currentBalance = addMoney + currentBalance;
            
            break;

        case "3":
            let withDrawMoney = prompt("Informe a quantidade que deseja retirar:")
            withDrawMoney = parseFloat(withDrawMoney);
    
            currentBalance = currentBalance - withDrawMoney ;
            
            break;

        case "4":
            alert("Até breve!")
            
            break;
        
            default: alert("Metodo não existente")
    }
    
}


console.log("")