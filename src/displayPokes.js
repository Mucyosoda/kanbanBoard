import fetchLikes from './fetchLikes.js';

const displayPokemon = async (pokemon) => {
  pokemon.forEach((pkm) => {
    fetch(pkm.url)
      .then((response) => response.json())
      .then(async (pkmData) => {
        const cardSection = document.getElementById('card-section');
        const pokemonTypes = pkmData.types;
        const pokemonImage = pkmData.sprites.other;
        const outerLi = document.createElement('li');
        outerLi.classList.add('card');
        const pokeImg = document.createElement('img');
        pokeImg.setAttribute(
          'src',
          `${pokemonImage['official-artwork'].front_default}`
        );
        pokeImg.setAttribute('alt', 'Pokemon');
        const h1 = document.createElement('h1');
        h1.innerHTML = `${pkmData.name}`;
        const likesDiv = document.createElement('div');
        likesDiv.className = 'likes-div';
        const likeImg = document.createElement('i');
        likeImg.classList.add('fas', 'fa-heart', 'heart');
        likeImg.setAttribute('id', `${pkmData.name}`);
        const span = document.createElement('span');
        span.setAttribute('id', 'like');
        const ul = document.createElement('ul');
        pokemonTypes.forEach((pokemon) => {
          ul.innerHTML += `<li>${pokemon.type.name}</li>`;
        });
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add(pkmData.name, 'btn');
        btn.innerHTML = 'Comment';
        btn.addEventListener('click', () => {
          popUp(pkmData);
        });
        outerLi.appendChild(pokeImg);
        outerLi.appendChild(h1);
        likesDiv.appendChild(likeImg);
        likesDiv.appendChild(span);
        outerLi.appendChild(likesDiv);
        outerLi.appendChild(ul);
        outerLi.appendChild(btn);
        cardSection.appendChild(outerLi);
        await fetchLikes(pkmData, span);
      });
  });
};
export default displayPokemon;
