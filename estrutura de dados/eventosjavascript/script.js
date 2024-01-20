//  1 adicionar eventos 

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("clicou aqui");
});

// 2 removendo eventos

const secondbtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("teste");
}

secondbtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click",  () => {
    console.log("evento removido");
    secondbtn.removeEventListener("click", imprimirMensagem);
}) ;

// 3 objeto do evento 

const mytitle = document.querySelector("#my-title");

mytitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offssetx);
    console.log(event.pointerType);
    console.log(event.target);

});

// 4 propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click" , () => {
    console.log("evento 1");

});

btnInsideContainer.addEventListener("click", () => {
    e.stopPropagation();
    console.log("evento 2");
});

// default

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("não alterou a pagina");
});

// evento de tecla

document.addEventListener("keyup", (e) => {
    console.log(`soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`soltou a tecla ${e.key}`);
});

// erventos de mouse

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("pressionou o  botão");
});


mouseEvents.addEventListener("mouseup", () => {
    console.log("solta o  botão");
});

mouseEvents.addEventListener("mousedouble", () => {
    console.log(" botão duplo");
});

// movimento do mouse

/*document.addEventListener("mousemove", (e) => {
    console.log(`no eixo x: ${e.x}`);
    console.log(`no eixo y: ${e.y}`);
});*/

// eventos por scroll

window.addEventListener("scroll", (e) => {
    if (window.pageYoffset > 200) {
        console.log("passamos de 200px");
    }
});

// eventos por foco

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("saiu no input");
});

// evento carregamento da pagina não muito util

window.addEventListener("load", () => {
    console.log("a pagina carregou");
});

// debounce

const debounce = (f, delaiy) => {
    

    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => { //timeout tempo esgotado
            f.apply(arguments);// apply aplicação
        },delay);
    };
};

window.addEventListener("mousemove", debounce(() => { // debounce é rebater
    console.log("excutando a cada 400ms")
},400));

// 








