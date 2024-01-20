//1 usando variaveis

//let nome = "matheus";
//console.log(nome);

//nome = "matheus battisti";

//console.log(nome);

//const idade = 31;

//console.log(idade);


//idade = 32;


//4 funções math

//console.log(Math.max(5,2,1,10)); ENCONTRA OS MAIORES NUMEROS

//console.log(Math.floor(5.14)); ESCOLHE O NUMERO PARA MENOR

//console.log(Math.ceil(5,14));ARREDONDA PARA MAIOR


//5 IF
//const m = 10;

//if (m > 5){
   // console.log("m é maior que 5")
//}

//const user = "joao";

//if (user === "joao"){
    //.log("ola joao");
//}

//if (user === "maria"){
    //console.log("ola maria")
//}

//6 else

//const loggedin = false
//if(loggedin){
   // console.log("esta autenticado ")

//}else{
   // console.log("nao esta autenticado")
//}

/*const q = 10
const w = 15

if (q > 5 && w > 20){
    console.log("numeros mais altos");
}else {
    console.log("os numeros não são mais altos");
}

//9 else e if

if(1 > 2){
    console.log("teste");
}else if (2 > 3){
    console.log("teste 2");
}else if (5 > 1){
    console.log("agora sim")
}
 //kkdkdk

 const idade = 18;

 if (idade < 20 && idade > 20){
    console.log("parabens voce pode tirar sua carta");

 }else{
    console.log("voce é de menor ")
 }*/

//recursão

const untilTen = (n,m) => {
    if (n < 10) {
    console.log("a função parou de executar");
} else {
    const x = n - m 
    console.log(x);

    untilTen(x,m);

}

}

untilTen(100,7);

//
function factorial(x) {
    if (x === 0) {
        return 1
    }else{
        return x * factorial(x - 1 )
    }
}

const num = 8

const result = factorial(num)

console.log(`o farorial do numero ${num} é ${result}`);

