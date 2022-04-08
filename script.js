let qtdCartas = Number(prompt("Com quantas cartas você quer jogar? De 4 a 14."));
let arrayCartas = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let carta = document.querySelectorAll(".cartas");
let cartaSelecionada1;
let cartaSelecionada2;

while (qtdCartas % 2 !== 0 || qtdCartas > 14 ) { 
    qtdCartas = Number(prompt("Selecione um número par de 4 a 14."));
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
    mudarEscondido(cartaSelecionada1);
    mudarEscondido(cartaSelecionada2);
}

function selecionarCarta (carta) {
    if (!carta.classList.contains("virada")) {
        mudarEscondido (carta);
        if (cartaSelecionada1) {
            cartaSelecionada2 = carta;
            if (cartaSelecionada1.innerHTML === cartaSelecionada2.innerHTML) {
                cartaSelecionada1.classList.add("virada");
                cartaSelecionada2.classList.add("virada");
                cartaSelecionada1 = null;
                cartaSelecionada2 = null;
            }            
            else {
                cartaSelecionada1 = null;
                cartaSelecionada2 = null;
                setTimeout(viradaCarta, 3000);
            }
        } else {
            cartaSelecionada1 = carta;
        }
    } else {
        console.log(carta)
    }

    
    //ao clicar na carta, precisa verso escondido e frente remover escondido - transição css
    //if (imagem verso da primeira = imagem verso da segunda) {
        //permanece com REMOVE escondido
    //} //else  {
       // a carta ADD escondido em 1 segundo
    //}
    //preciso de uma variável pra pegar quantas vezes o elemento foi clicado ?
} 

function finalJogo () {
    //if (cada carta selecionada tiver par na tela) {
        //alert (`Você ganhou em ${qtdCliques} jogadas!`)
    }
//}
