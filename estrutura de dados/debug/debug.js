// 1 strict
"use stict";

const opa = "teste";

// 2 metodo debug console.log

//3 debugger

let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

//debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop");

//debugger;

if (c > 5) {
    c = 25;
}

//4 tratamento de dados 

function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log("valor incorreto");
        return;
    }

    console.log("valor correto");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 exception

let x = 10;

if (x != 11) {
   // throw new Error("o valor de x não pode ser diferente de 11");
}

//6 try catch

try {
    const soma = x + y;
}catch (error) {
    console.log(`erro no programa ${error}`);
}

// 7 finally

try {
    const value = checkNumber("asd");

    if (!value) {
        throw new Error("valores invalidos ");
    }
} catch (error) {
    console.log(`opa aconteceu um problema ${error}`);
} finally {
    console.log("o codigo foi executado");
}

// 8 assertions

function  checkArray(arr) {
    if (arr.length === 0) {
        throw new Error("o array precisa ter elementos ");
    } else {
        console.log(`o array tem ${arr.length} elementos`);
    }
}
 
checkArray([1,2,3]);


