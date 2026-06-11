// --- FUNCIONALIDADE 1: MENU RESPONSIVO PARA CELULAR ---
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    // Liga/desliga a classe "active" que mostra o menu no CSS
    navMenu.classList.toggle('active');
    
    // Altera o ícone entre barras e "X" fechar
    const icone = menuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icone.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icone.classList.replace('fa-xmark', 'fa-bars');
    }
});


// --- FUNCIONALIDADE 2: EFEITO DIGITANDO NA HOME ---
const elementoTexto = document.querySelector('.txt-efeito');
const palavras = ["Sustentável.", "Tecnológico.", "Eficiente.", "Agora."];
let indicePalavra = 0;
let indiceLetra = 0;
let apagando = false;

function efeitoDigitar() {
    const palavraAtual = palavras[indicePalavra];
    
    if (!apagando) {
        // Adiciona letra por letra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
        
        if (indiceLetra === palavraAtual.length) {
            // Pausa no final da palavra inteira
            apagando = true;
            setTimeout(efeitoDigitar, 1500);
            return;
        }
    } else {
        // Remove letra por letra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
        
        if (indiceLetra === 0) {
            apagando = false;
            // Passa para a próxima palavra da lista
            indicePalavra = (indicePalavra + 1) % palavras.length;
        }
    }
    
    // Define a velocidade: mais rápido ao apagar
    const velocidade = apagando ? 50 : 120;
    setTimeout(efeitoDigitar, velocidade);
}

// Inicia o efeito ao carregar a página
document.addEventListener("DOMContentLoaded", efeitoDigitar);


// --- FUNCIONALIDADE 3: SIMULADOR INTERATIVO COM CONTADORES ANIMADOS ---
const seletorArea = document.getElementById('tamanho-area');
const txtAgua = document.getElementById('qtd-agua');
const txtEspaco = document.getElementById('qtd-espaco');

// Banco de dados simulados baseado na opção escolhida
const dadosSimulador = {
    pequeno: { agua: 45000, espaco: 1200 },
    medio: { agua: 250000, espaco: 8500 },
    grande: { agua: 1200000, espaco: 45000 }
};

function animarContador(elemento, valorFinal) {
    let valorInicial = 0;
    // Ajusta a velocidade do incremento com base no tamanho do número
    let incremento = Math.ceil(valorFinal / 60); 
    
    const temporizador = setInterval(() => {
        valorInicial += incremento;
        if (valorInicial >= valorFinal) {
            valorInicial = valorFinal;
            clearInterval(temporizador);
        }
        // Formata o número com pontos de milhar (ex: 1.000)
        elemento.textContent = valorInicial.toLocaleString('pt-BR');
    }, 25);
}

function atualizarSimulador() {
    const opcaoSelecionada = seletorArea.value;
    const novosValores = dadosSimulador[opcaoSelecionada];
    
    // Roda a animação de contagem para cada um dos dois números
    animarContador(txtAgua, novosValores.agua);
    animarContador(txtEspaco, novosValores.espaco);
}

// Monitora quando o usuário muda a opção do menu dropdown
seletorArea.addEventListener('change', atualizarSimulador);

// Inicializa os números do simulador na primeira carga da página
atualizarSimulador();


// --- FUNCIONALIDADE 4: VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
const formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede a página de recarregar
    
    // Simulação de envio com feedback visual rápido
    alert('Mensagem enviada com sucesso! Conectando você ao futuro.');
    formulario.reset(); // Limpa as caixas de texto
});
