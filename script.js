let qtdCartas;
let arrayCartas = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let carta = document.querySelectorAll(".cartas");
let cartaSelecionada1;
let cartaSelecionada2;
let qtdCliques = 0;
let parzinho = 0;

function pedirCartas () {
    qtdCartas = Number(prompt("Selecione um número par de 4 a 14."));
    while (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) { 
        qtdCartas = Number(prompt("Selecione um número par de 4 a 14."));
    }    
    abrirCartas();
}


function abrirCartas () {
    arrayCartas.sort(comparador);
    const jogo = document.querySelector(".jogo");
    let cardsGame = [];

    for (let i=0; i < qtdCartas/2; i++) {
    let carta = `<div class="carta" onclick="selecionarCarta(this)">
    <img class="frente escondido" src="img/${arrayCartas[i]}" \>
    <img class="verso" src="img/front.png" \>
    </div>`
    cardsGame.push(carta);
    cardsGame.push(carta);
    }
    cardsGame.sort(comparador);
    
    for (let i=0; i < qtdCartas; i++) {
        jogo.innerHTML += cardsGame[i];
    }
}

abrirCartas();

function comparador() { 
	return Math.random() - 0.7; 
}

function mudarEscondido (carta) {
    carta.querySelector(".frente").classList.toggle("escondido");
    carta.querySelector(".verso").classList.toggle("escondido");
}

function viradaCarta() {
    cartaSelecionada1.querySelector(".frente").classList.toggle("escondido");
    cartaSelecionada1.querySelector(".verso").classList.toggle("escondido");
    cartaSelecionada2.querySelector(".frente").classList.toggle("escondido");
    cartaSelecionada2.querySelector(".verso").classList.toggle("escondido");
    cartaSelecionada1 = null;
    cartaSelecionada2 = null; 
}

function cartasIguais () {
    cartaSelecionada1.classList.add("virada");
    cartaSelecionada1.classList.remove("movimento-carta");
    cartaSelecionada2.classList.add("virada");    
    cartaSelecionada2.classList.remove("movimento-carta");
    cartaSelecionada1 = null;
    cartaSelecionada2 = null; 
}

function checarIguais () {
    if (cartaSelecionada1.innerHTML === cartaSelecionada2.innerHTML) {
        cartasIguais();
        parzinho++;        
    } else {
        setTimeout(viradaCarta, 1000);
    }
    finalJogo();
}   

function selecionarCarta(carta) {
    if (!carta.classList.contains("virada")) {
        mudarEscondido(carta);
        qtdCliques++;
        carta.classList.toggle("movimento-carta");
        if (cartaSelecionada1) {
            cartaSelecionada2 = carta;
            setTimeout(checarIguais, 1000);
         
        } else {
            cartaSelecionada1 = carta;
        }
    }
}


function finalJogo () {
    if (parzinho === qtdCartas/2) {
        alert(`Você ganhou em ${qtdCliques} jogadas!`);
        let resposta = prompt("Você gostaria de jogar novamente?");
        if (resposta === "sim") {
         qtdCartas = null;   
         document.querySelector(".jogo").innerHTML = ''; 
         setTimeout(pedirCartas(), 1000);
        }
    }
}

pedirCartas();