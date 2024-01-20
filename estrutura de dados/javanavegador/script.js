//1 movendo se o dom

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

//2 metodo getelementsbyid

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 getelementbyid

const title = document.getElementById("title");

console.log(title);


//4 getelementby classe name

const product = document.getElementsByClassName("´product");

console.log(product);

// 5 query selector

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);


const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

const p = document.createElement("p");

const header = title.parentElement;


header.insertBefore(p, title);

// 6 oppendchild anexar filho

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// 7 replacechild substituir filho


const h2 = document.createElement("h2");

h2.textContent = "meu novo titulo";//conteudo de texto

header.replaceChild(h2, title);


// 8 creatatextnode

const mytext = document.createTextNode("agora vamos colocaar mais um titulo");

console.log(mytext);

const h3 = document.createElement("h3");

h3.appendChild(mytext);

console.log(h3);

mainContainer.appendChild(h3);

// 9 trabalhando com atributos

const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "blank");


// 10 altura e largura 

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 11 css com js

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "black";
mainContainer.style.paddingBottom = "15px";

// 12 html collection

for (const li of listItens) {
    li.style.backgroundColor = "red";
}









