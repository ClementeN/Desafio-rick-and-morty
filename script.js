const img1 = document.querySelector ('.figura1');
const img2 = document.querySelector ('.figura2');
const img3 = document.querySelector ('.figura3');
const img4 = document.querySelector ('.figura4');

imagemAleatoria = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let personagem = imagemAleatoria();
    return fetch(`https://rickandmortyapi.com/api/character/${personagem}`, {
        method: 'GET',
        headers: { 
            Accept: 'application/json' ,
         "Content-type": 'aplication/json'
        }
    }).then((response) => response.json()).then((data) => {
        return data
    })
}

pegarPersonagem().then(data => {
    img1.querySelector('img').src = data.image
    img1.querySelector('img').alt = data.personagem
    img1.querySelector('p').innerText = data.name
})

pegarPersonagem().then(data => {
    img2.querySelector('img').src = data.image
    img2.querySelector('img').alt = data.personagem
    img2.querySelector('p').innerText = data.name
})

pegarPersonagem().then(data => {
    img3.querySelector('img').src = data.image
    img3.querySelector('img').alt = data.personagem
    img3.querySelector('p').innerText = data.name
})

pegarPersonagem().then(data => {
    img4.querySelector('img').src = data.image
    img4.querySelector('img').alt = data.personagem
    img4.querySelector('p').innerText = data.name
})