// armazenando os nomes dos amigos 
let listaDeAmigos = [];

function lerTexto(nomeSorteado) {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(nomeSorteado);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.2; // velocidade da leitura
    synth.speak(utterance);
}


function repetirLeitura() {
    let nomeSorteado = document.getElementById('resultado').innerText;

    if (nomeSorteado.trim() !== '') {
        lerTexto(nomeSorteado);
    } else {
        alert('Nenhum nome foi sorteado ainda!');
    }
}

// função para adicionar um amigo a lista
function adicionarAmigo() {
    // salvando o nome no campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // trim remove espaços extras no começo e fim de uma palavra

    // validando se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return; // impedindo que o código continue se o campo estiver vazio
    }

    // adicionando um nome ao array
    listaDeAmigos.push(nomeAmigo);

    // limpando o campo de entrada
    inputAmigo.value = '';

    // focando novamente no campo de entrada
    inputAmigo.focus();

    // exibindo a lista de nomes
    atualizarLista();

}

// função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // limpa a lista atual

    // adiciona cada nome como um item na lista
    listaDeAmigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaElement.appendChild(listItem);
    })
}

// implementando a função para sortear um amigo
function sortearAmigo() {
    // validando se tem mais amigos no array
    if (listaDeAmigos.length === 0) {
        alert('Nenhum amigo disponível para sortear. Adicione amigos primeiro!');
        return; 
    }

    // gerando um indice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // obtendo e removendo o nome sorteado da lista
    const amigoSorteado = listaDeAmigos.splice(indiceAleatorio, 1)[0];

    // mostrando o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
    
    // chamando a função para ler o nome sorteado
    lerTexto(`O amigo sorteado foi ${amigoSorteado}`);
    
    // atualizando a lista para exibir os amigos restantes
    atualizarLista();

    // Se a lista estiver vazia após o sorteio, o programa reinicia automaticamente
    if (listaDeAmigos.length === 0) {
        setTimeout(() => {
           alert('Todos os amigos foram sorteados! O programa será reiniciado.');
           reiniciarPrograma();
        }, 1000); // pequeno atraso para exibir a mensagem antes de resetar
    }
}

// função para reiniciar o programa
function reiniciarPrograma() {
    listaDeAmigos = []; // zerando a lista de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // limpa a exibição da lista
    document.getElementById('resultado').innerHTML = ''; // limpa o resultado do sorteio 
}

// adicionando um evento para capturar a tecla 'Enter' no campo 'Digite um nome'
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); //chamando a função que adiciona o nome
    }
});
