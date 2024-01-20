//1 metodos

//const animal = {
   // nome: "bob",
    //latir: function () {
    //    console.log;("au au");
  //  },
//};

//console.log(animal.nome);

//animal.latir();
 //2 aprofudando em metodos
 
 const pessoa = {
    nome: "paulo",

    getNome: function () {
        return this.nome;
    },
 };

 console.log(pessoa.nome);

 console.log(pessoa.getNome());

 // 3 prototype mostra o seu ancestral 

 const text = "asd";

 console.log(Object.getPrototypeOf(text));

 const bool = true;
  
 console.log(Object.getPrototypeOf(bool));

 // 4 mais prototype

 const myObject = {
    a: "b",
 };

 console.log(Object.getPrototypeOf(myObject));

 // 5 classes basicas 

const cachorro = {
    raça: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raça = "pastor alemao";

console.log(pastorAlemao);

const bulldog = Object.create(cachorro);

bulldog.raca = "bull dog";

console.log(bulldog);

// 6 funções como classe
function Cachorro(nome,raca) {
   this.nome = nome;
   this.raca = raca;

}

const husky = new Cachorro("ozzy ", "husky");

console.log(husky);
//8 metodos na função construtora
Cachorro.prototype.uivar = function () {
   console.log("auuuuuu");
};

console.log(Cachorro.prototype);

husky.uivar();

//9 classes es6

/*class CachorroClasse {
   constructor(nome,raca) {
      this.nome = nome;
      this.raca = raca;
   }
}

const jeff = new CachorroClasse("jeff","labrador");

console.log(jeff);

console.log(Object.prototype(jeff));
*/
// 10 
class Caminhao{
constructor(eixos,cor) {
   this.eixos = eixos;
   this.cor = cor;

 }


descreverCaminhao() {
   console.log(`este caminhao tem ${this.eixos} e é da cor ${this.cor}`);
 }

}

const scania = new Caminhao(6,"vermelha");

console.log(scania);
// 11 override

class Humano {
   constructor(nome,idade) {
      this.nome = nome;
      this.idade = idade;
   }
}

const paulo = new Humano("paulo ", 31);

console.log(paulo);

// 12 symbols em classes

class Aviao {
   constructor(marca,turbinas) {
      this.marca = marca;
      this.turbinas = turbinas;
   
   }
}

const asas = Symbol()

Aviao.prototype[asas] = 2

 const boing = new Aviao("boing", 10);

 console.log(boing);


 //13 getters e setters

 class Post {
   constructor(titulo, descricao, tags) {
      this.titulo = titulo;
      this.descricao = descricao;
   }

   get exibirTitulo() {
      return `voce esta lendo ${this.titulo}`;

   }

   set adicionarTags(tags) {
      const tagsArray = tags.split(",");
      this.tags = tagsArray;
   }
 }

const myPost = new Post("algum post ", "é um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação , javascript , js";

console.log(myPost);

//14 herança
class Mamifero {
   constructor(patas) {
      this.patas = patas 
   }
}

class Lobo extends Mamifero {
   constructor(patas, nome) {
      super(patas, patas)
      this.nome = nome
   }
}

const shark = new Lobo(4, "shark")

console.log(shark);

//15 operador instanceof

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);



