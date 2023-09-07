var palavras = ['AMOGUS', 'HADES', 'BLOODBORNE', 'BATATA', 'SUS', 'CASTRO LINDO'];
var quantiErros = 0;
var acertos = 0;
var tentativas = "";
var palavraSecreta = palavras[Math.floor(Math.random() * 6)];

const canvas = document.getElementById("forca");
const ctx = canvas.getContext("2d");

dePoste();
deBarraSuperior();
deApoio();
deTracos();

window.onkeypress = teclaPressionada;

function teclaPressionada() {
	if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {
		adiTentativa();
		for (var i = 0; i < palavraSecreta.length; i++) {
			if (palavraSecreta[i] == (event.key).toUpperCase()) {
				ctx.font = "35px Arial";
				ctx.fillText((event.key).toUpperCase(), 20 + (35 * i), 200);
				acertos++;
			}
		}
	} else {
		adiTentativa();
		quantiErros++;
		deBoneco(quantiErros);
	}
	verificaFimJogo();
}

function adiTentativa() {
	if (!tentativas.includes(event.key)){
		tentativas = tentativas + event.key;
		ctx.font = "20px Arial";
		ctx.fillText("tentativas: " + tentativas.toUpperCase(), 20, 280);
	}
}

function verificaFimJogo() {
	if (quantiErros >=6) {
		ctx.font = "20px Arial";
		ctx.fillText("Fim de Jogo! a palavra era: " + palavraSecreta, 200, 100);
		window.onkeypress = null;
		return;
	}
	if (acertos == palavraSecreta.length) {
		ctx.font = "20px Arial";
	    ctx.fillText("vc ganhou!", 200, 100);
	    window.onkeypress = null;
		return;
    }
}

function dePoste() {
	ctx.moveTo(10, 10);
	ctx.lineTo(10, 100);
	ctx.stroke();
}

function deBarraSuperior() {
	ctx.moveTo(10, 10);
	ctx.lineTo(60, 10);
	ctx.stroke();
}

function deApoio() {
	ctx.moveTo(60, 10);
	ctx.lineTo(60, 30);
	ctx.stroke();
}

function deTracos() {
	for (var i = 0; i < palavraSecreta.length; i++) {
		ctx.moveTo(20 + (35 * i), 200);
	    ctx.lineTo(50 + (35 * i), 200);
	    ctx.stroke();
	}
}

function deBoneco(quantiErros) {
	switch (quantiErros) {
	case 1:
		deCabeca();
		break;
	case 2:
		deTronco();
		break;
    case 3:
        deBracoEs();
        break;
    case 4:
        deBracoDi();
        break;
    case 5:
        dePernaEs();
        break;
    case 6:
    	dePernaDi();
    	break;

	}
}

function deCabeca() {
	ctx.beginPath();
	ctx.arc(60, 40, 10, 0, 2 * Math.PI);
	ctx.stroke();
}

function deTronco() {
	ctx.moveTo(60, 50);
	ctx.lineTo(60, 80);
	ctx.stroke();
}

function deBracoEs() {
	ctx.moveTo(60, 60);
	ctx.lineTo(50, 70);
	ctx.stroke();
}

function deBracoDi() {
	ctx.moveTo(60, 60);
	ctx.lineTo(70, 70);
	ctx.stroke();
}

function dePernaEs() {
	ctx.moveTo(60, 80);
	ctx.lineTo(70, 90);
	ctx.stroke();
}

function dePernaDi() {
	ctx.moveTo(60, 80);
	ctx.lineTo(50, 90);
	ctx.stroke();
}