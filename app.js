let list = [];

function adicionarAmigo() {
    let nome = document.querySelector('input'); 
    let addFriend = nome.value; 

    if (verificarNomes(addFriend)) {
        alert("Nome inválido, por favor insira um nome válido"); 
        return; 
    }

    list.push(addFriend); 
    console.log(list);
    exibirlistagem()
    limparNomes(); 
}

function exibirlistagem() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = ""; 
    list.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        li.className = 'name-item';
        listaAmigos.appendChild(li);
    });
}


function limparNomes() {
    let nome = document.querySelector('input');
    nome.value = "";
}

function verificarNomes(input) {
    return input.trim() === ""; 
}

function sortearAmigo() {
    if (list.length === 0) {
        alert('Adicione pelo menos um nome para o sorteio');
        return;
    }
    let amigoSorteado = list[Math.floor(Math.random() * list.length)];
    document.querySelector('#resultado').innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
    document.querySelector('#listaAmigos').innerHTML = '';
    list = [];
    document.querySelector('.section-title').innerHTML = `🥳${amigoSorteado} Parabéns por ter ganho!🎉🎊`;

}


