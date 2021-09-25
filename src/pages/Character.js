import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
    const id = getHash()
    const character = await getData(id);
    const view = `
        <div class="characters-inner">
            <article class="characters-inner__item">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="characters-inner__card">
                <h3>Episodes: </h3>
                <span>${character.episode.length}</span>
                <h3>Status: </h3>
                <span>${character.status}</span>
                <h3>Species: </h3>
                <span>${character.species}</span>
                <h3>Gender: </h3>
                <span>${character.gender}</span>
                <h3>Origin: </h3>
                <span>${character.origin.name}</span>
                <h3>Last location: </h3>
                <span>${character.location.name}</span>
            </article>
        </div>   
    `;

    return view;
}

export default Character;