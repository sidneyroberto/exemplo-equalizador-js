const altura = paletaCores.length;
const largura = paletaCores.length + 1;
const coeficienteDesvio = 0.8;
let pixels = [];
let limites = new Array(largura);
let canvas = document.querySelector('#canvas');

const alocarArray = () => {
    limites = Array.from({ length: largura }, () => 0);
    pixels = new Array(altura);
    for (let i = 0; i < pixels.length; i++) {
        pixels[i] = new Array(largura);
    }
}

const inicializarPixels = () => {
    alocarArray();

    for (let l = 0; l < altura; l++) {
        for (let c = 0; c < largura; c++) {
            pixels[l][c] = paletaCores[l];
        }
    }
}

const renderizarCanvas = () => {
    calcularLimites();
    canvas.innerHTML = '';
    for (let l = 0; l < altura; l++) {
        let linha = document.createElement('div');
        linha.className = 'linha';
        for (let c = 0; c < largura; c++) {
            let celula = document.createElement('div');
            celula.className = 'celula';
            let cor = l >= limites[c] ? pixels[l][c] : paletaCores[0];
            celula.style.backgroundColor = cor;
            linha.appendChild(celula);
        }
        canvas.appendChild(linha);
    }
}

const gerarLimiteAleatorio = () => {
    const max = altura * coeficienteDesvio;
    const min = 0;
    return Math.floor(Math.random() * (max - min) + min)
};

const calcularLimites = () => {
    limites = limites.map(() => gerarLimiteAleatorio());
}


const iniciar = () => {
    inicializarPixels();
    setInterval(renderizarCanvas, 150);
}

iniciar();