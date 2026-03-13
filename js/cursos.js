/*
=======================================
1 - PEGAR O ELEMENTO(TAG) DO HTML
=======================================
*/

// Cria uma variável constante com a referência da tag HTML
const listaCursos = document.querySelector("#listaCursos");
const buscaCursos = document.querySelector("#buscaCursos");

/*
=======================================
2 - CRIAR UMA LISTA VAZIA PARA GUARDAR OS CURSOS
=======================================
*/
let cursos = []; // aqui vai ficar a lista carregada do JSON

/*
=======================================
3 - FUNÇÃO PARA CARREGAR O JSON COM OS CURSOS
=======================================
*/
async function carregarCursos(){
    // buscar o arquivo cursos.json (como se fosse uma mini API)
    const resposta = await fetch("../data/cursos.json");

    // Tranformar o JSON em dados que JS entende
    cursos = await resposta.json();

    // depois de carregar, já renderiza na tela
    renderizarCursos(cursos);

}


/*
=======================================
4 - FUNÇÃO PARA CRIAR OS CARDS DOS CURSOS NA TELA (DOM)
=======================================
*/
function renderizarCursos(lista){
    // limpa o conteúdo na tela antes de desenhar de novo
    listaCursos.innerHTMl="";

    // para cada curso da lista, cria um card
    lista.forEach((curso) => {
        // cria uma element/tag DIV
        const card = document.createElement("div");

        // coloca uma classe (para o CSS estilizar)
        card.classList.add("card-curso");

        // coloca o conteúdo dentro do CARD
        card.innerHTML = `
            <h3> ${curso.título} </h3>
            <img src=${curso.img} width="55" heigth="55">
            <p> ${curso.desc} </p>
            <p><strong>CH: <strong> ${curso.ch}  </p>
            <a href=${curso.url}>
            <button class="btn-detalhes">Ver Detalhes</button>
            </a>
        `;
        // coloca o card dentro da lista
        listaCursos.appendChild(card);

    });

}


/*
=======================================
5 - BUSCA : FILTRAR CURSOS NA QUANDO DIGITAR
=======================================
*/
buscaCursos.addEventListener("input",function(){
    const texto = buscaCursos.value.toLowerCase();

    const filtrados = cursos.filter((curso) => 
        curso.título.toLowerCase().includes(texto)
    );

    renderizarCursos(filtrados);
});



carregarCursos();