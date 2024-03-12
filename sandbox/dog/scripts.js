const pokeNameContainer = document.querySelector('#name');
const pokeURL = document.querySelector('#url');

async function pokemok() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/ability/?limit=10&offset=20');
      const data = await response.json();
      console.log(data);
    
    data.results.forEach(pokemon => {
       const pokeNameElement = document.createElement('p');
       pokeNameElement.textContent = pokemon.name;
       pokeNameContainer.appendChild(pokeNameElement);
    });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  pokemok();