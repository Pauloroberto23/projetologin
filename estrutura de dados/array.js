// array 
const lista =[1,2,3,4,5,6]

console.log(lista);

//mais sobre array 

const arr = ["a","b","c","d","d"]

console.log(arr[0]);

console.log(arr[3])
// propriedades 

const numbers = [5,3,4,6]

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "matheus";

console.log(myName.length);

//4 metodos

const otherNumbers =[1,2,3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

//5 
const person = {
    name: "paulo",
    age:31,
    job:"programador"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);
//6 criando e deletando propriedades

const car = {
    engine:2.0,
    brand:"vw",
    model:"tigan",
    km: 20000 
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

//7 mais sobre objetos 

const obj = {
  a:"teste",
  b:true,
};

console.log(obj instanceof Object);

const obj2 = {
    c:[],
}

Object.assign(obj2,obj);

console.log(obj2);

//8 conhecendo mais objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

//9 array push e pop

const array = ["a","b","c"];
array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop()

//10 shift e undhift

const letters  = ["a","b","c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p","q","r");

letters.unshift("z");

console.log(letters);

//11 indexof e latindexof

const myElements = ["morango","maça","pera","abacate"];

console.log(myElements.indexOf("maça"));
console.log(myElements.indexOf("abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("abacate")]);


//slice utilizado para extrair um array menor

const testeSlice = ["a","b","c","d","e","f"];

const subArray = testeSlice.slice(2, 4 + 1);

console.log(subArray)

console.log(testeSlice);

//13 forEach ele é um metodo ele percorre o array

const nums = [1,2,3,4,5];

nums.forEach((numero) => {
    console.log(`o numero é ${numero}`);
});

const post = [
    {title: "primeiro post", category: "php"},
    {title: "segundo post", category: "javascript"},
    {title: "terceiro post", category: "pyton"},
];

post.forEach((post) => {
    console.log(`exibindo post:${post.title}, da categoria: ${post.category}`);
});

//14 metodo includes verifica se o array tem elemento

const brands = ["bmw","vw","fiat"];

console.log(brands.includes("fiat"));

//reverse inverte o elemento de um array

const reverseTest = [1,2,3,4,5];

reverseTest.reverse();

console.log(reverseTest);

//15 metodos de string trim
const trimTest = "  testando \n  ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);

// 16 padstart 

const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd)

// 17 split

const frase = "o rato roeu a roupa do rei de roma ";

const arrayDaFrase = frase.split("");

console.log(arrayDaFrase);

// 18 join

const itensParaComprar = ["mouse","teclado","monitor"];
const fraseDecompra = `precisamos comprar : ${itensParaComprar.join(", ")}`;

console.log(fraseDecompra);

//  19 repeat

const palavra = "testando";

console.log(palavra.repeat(5));

// 20 rest operator / rest parameters

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];

    }
    return total;
};

console.log(somaInfinita(1,2,3));

console.log(somaInfinita(1,52,92,82,635,8,66));

// 21 for...of estrutura de repetição

const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;

    }
    return total;

};

console.log(somaInfinita2(1,3,5,6,8,3));

// 22 destructuring em objetos

const  userDetails = {
    firstName: "paulo",
    lastName: "coelho",
    job: "programador",
};

const { firstName,lastName,job } = userDetails;
 console.log(firstName,lastName,job);

// renomear as variaveis

const {firstName: primeiroNome} = userDetails;

console.log(firstName);

// 23 destructuring com arrays 
const myList = ["avião","submarino","carro"]

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(myList);

//22 json para objeto e objeto para json
const myJson = '{"name": "paulo", "age": "31", "skills": ["php", "javascrip", "python"]}';

console.log(myJson);

console.log(typeof myJson);


const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.logP(typeof myObject);

//


