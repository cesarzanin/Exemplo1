alert("Hello World!")

//{} LISTA PARA OBJETO
//() LISTA ARRAY (PARA VÁRIOS OBJETOS)
//[] LISTA DE MÉTODO (FUNÇÃO)

//DECLARAÇÃO E VARÍAVEIS

var nome = 'Fiap';
console.log(typeof nome)

let nome0 = 10;
console.log(nome1);

const nome2 = {}; //CONSTANTE QUE NÃO PODE SER ALTERADA
console.log(nome2) 

let nome3 = {}
console.log(typeof nome3) //TYPEOF ME DIZ QUAL O TIPO DA LISTA NO INSPECT DA PÁGINA

let nome4=true;
console.log(typeof nome4)

var exemplo ="Ola Dev-var";
console.log(exemplo);

let exemplo1="Ola Dev-let";
console.log(exemplo1)

const exemplo2 ="Ola Dev-const";
console.log(exemplo2)




let exemplo3=10;
console.log(typeof exemplo3)

let exemplo6='100';
console.log(typeof exemplo6)

let exemplo7=true;
console.log(typeof exemplo7)

let objeto={};
console.log(typeof objeto)

let array=[];
console.log(typeof array)

//valor undefined
let exemplo8;
console.log(exemplo8)

//valor vazio
let exemplo9 =null
console.log(exemplo9)

// CONST

const nome ="fiap";
//nome ="cidade";
console.log(nome)


//CONVERSÕES

//float => inteiro
// let numFloat = 123.2456 
// console.log(parseInt(numFloat));



//string => float
// let numString ="123.456"
// console.log(parseFloat);


//float =>string

let numFloat1 =123.456
console.log(numFloat1);

// int => string

let numInt = 24;
console.log(numInt.toString());

//string => int
let numString1= "24";
console.log(parseInt(numString1));


//OPERADORES ARITMÉTICOS
 
const a=20;
const b=10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//OPERADORES LÓGICOS

console.log(a < b);
console.log(a > b && b < 5);
console.log(a > b || b > a);
console.log(a == b || b <= a);

//OPERADORES DE COMPARAÇÃO

console.log(a == b);//compara
console.log(a === b);//compara e verifica o tipo da variavel
console.log(a != b); //diferente

// (trocar para let ou var e ver o resultado usando comparações)
//EX: 


//ESTRUTURA CONDICIONAL

// if

if(true){
    console.log("verdadeiro")
}
// if /else

let nome1="fiap";

if(nome1 == "fiap"){
    console.log("Nome Correto")
}else{
    console.log("Nome Errado")
}


//if else- aninhado ou encadeado

let idade =14;

if(idade <15){
    console.log("não pode entrar na balada")
}
else if(idade >14 && idade <=17){
    console.log("Pode entrar na balada")
}
else if(idade >17 && idade <45){
    console.log("Você é adulto não pode entrar")
}
else{
    console.log("Você é idoso, não pode entrar na matine")
}


//Condição Ternário

let valor2 =100;

let resultado = valor2 == 100 ? "Certo":"Errado";
console.log(resultado)

let produto ="notebook";
const desconto =true;

const preco = produto === "notebook" ? desconto ? 100 :200 : produto === "mouse" ? 30 : 100;
console.log(preco)

let valor3= 51

let resultado1 = valor3 > 50 ? "Maior":valor3 < 50?"menor":"igual";
console.log(resultado1)




//SWITCH

let time ="Corinthians";

switch(time){
    case "Corinthians":
        console.log("Melhor Time")
        break;
    case "SaoPaulo":
        console.log("Não considero melhor time")
        break;
    case "Palmeiras":
        console.log("Não possui Mundial")
        break;
    default:
        console.log("Nunhuma das opcoes")
}



//ESTRUTURA DE REPETIÇÃO

//FOR

 for(let i=7;i<=10;i++){
    console.log("o valor de i é:",i)
 }

 //WHILE

 let c=0;
 while(c <10){
    console.log("o valor de c:" ,c)
    c++;
 }

 let z= 0;

 do{
    console.log("do while", z)
    z++;
 }while(z <10)
