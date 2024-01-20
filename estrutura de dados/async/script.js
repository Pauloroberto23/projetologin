// 1 settimeout quer dizer definir tempo limite

console.log("ainda não executou ");

setTimeout(function (){
   console.log("requisição assincrona");
}, 2000);

console.log("ainda não executou 2 ");

//2 setinterval definir intervalo

console.log("ainda não começou");

//setInterval(function(){
    //console.log("intervalo assicrono");
//}, 3000);

console.log("ainda não começou 2");

//3 promises quer dizer promessa

const promessa = Promise.resolve(5 + 5);

console.log("algum codigo");

promessa.then((value) => {
    console.log(`a soma é ${value}`);
});

console.log("outro codigo");

//4 falha nas promises

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
        throw new Error("valores invalidos");
    }
  })
  .catch((err) => console.log(`um erro ocorreu: ${err}`));

  // 5 rejeitando promises

  //6 resolvendo varias promessas com o metodo all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
    
  },1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  }else {
    reject("erro");
  }
});

Promise.all([p1, p2, p3 ]).then((values) => console.log(values));

// 7 async function

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2,4).then((value) => {
  console.log(`o valor da soma é ${value}`);
});

console.log("teste async");

// 8 instrução await

function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolveu a promise");
    }, 2000);
  })
}

async function chamadaAsync() {
console.log("chamada a promise e esperando o resultado")
const result = await resolveComDelay();
console.log(` o resultado chegou: ${result}`);

}

chamadaAsync();

// 9 generators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

