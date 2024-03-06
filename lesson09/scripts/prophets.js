const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function loadProphets(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        data.prophets.forEach(prophet => {
            const card = document.createElement('section');
            card.className = 'card';

            const name = document.createElement('h2');
            name.textContent = `${prophet.name} ${prophet.lastname}`;

            const dob = document.createElement('div');
            dob.textContent = `Date of Birth: ${prophet.birthdate}`;

            const birthPlace = document.createElement('div');
            birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

            const portrait = document.createElement('img');
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340'); // Ensure these dimensions match your design.
            portrait.setAttribute('height', '400');

            card.appendChild(name);
            card.appendChild(dob);
            card.appendChild(birthPlace);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadProphets(url);
