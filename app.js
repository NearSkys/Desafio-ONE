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
    const nome = input.trim();
    return nome === "" || list.some(item => item.toLowerCase() === nome.toLowerCase());
}

function sortearAmigo() {
    if (list.length === 0) {
        alert('Adicione pelo menos um nome para o sorteio');
        return;
    }

    const shuffled = [...list].sort(() => Math.random() - 0.5);
    let resultadoHTML = [];
    
    for (let i = 0; i < shuffled.length; i += 2) {
        if (i + 1 < shuffled.length) {
            resultadoHTML.push(`${shuffled[i]} ↔ ${shuffled[i + 1]}`);
        } else { 
                resultadoHTML.push(shuffled[i]);
        }
    }

    document.querySelector('#resultado').innerHTML = 
        resultadoHTML.map(item => `<li>${item}</li>`).join('');
    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('.section-title').innerHTML = `🎉 Sorteio realizado! 🎊`;
    list = [];
}
