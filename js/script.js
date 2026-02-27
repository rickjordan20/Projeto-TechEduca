/* ==============================
1) Pegar o elemento do html
=================================*/

//Onde os cards vão aparecer
const listaCursos = document.querySelector("#listaCursos")

/* ==============================
2) Criar variável para guardar os cursos
=================================*/
let cursos = [] 
    // aqui vai ficar a lista carregada do JSON

/* ==============================
3) Criar variável para guardar os cursos
=================================*/
async function carregarCursos(){
    // buscar o arquivo cursos.json 
    //  (como se fosse uma mini API)
    const resposta = await fetch("../data/cursos.json");
    //tranforma o JSON em dados que o JS entende
    cursos = await resposta.json();

    // depois de carregar, já renderiza na tela
    renderizarCursos(cursos);
}

/* ==============================
4) Função para criar os cards na tela (DOM)
=================================*/
function renderizarCursos(lista){
    // limpa o conteúdo antes de desenhar de novo
    listaCursos.innerHTML = "";

    // para cada curso da lista, cria um card
    lista.forEach(curso) => {
        // cria um elemento <div> para container
        const card = document.createElement("div");

        // coloca uma class para o CSS estilizar
        card.classList.add("card-curso");

        // coloca o conteúdo do card
        card.innerHTML = `
            <h3> ${curso.titulo} </h3>
            <p><strong>Nível: </strong>${curso.nível} </p>
            

        `

    }
    
}