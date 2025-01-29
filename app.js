// armazenando os nomes dos amigos 
let listaDeAmigos = [];

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

    // obtendo o nome sorteado
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // removendo o amigo sorteado da lista
    listaDeAmigos = listaDeAmigos.filter(amigo => amigo !== amigoSorteado);

    // mostrando o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
    
    // atualizando a lista para exibir os amigos restantes
    atualizarLista();
}


