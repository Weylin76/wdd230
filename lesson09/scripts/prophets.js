const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function loadProphets(url) {
    try {
        // TODO: Modify the fetch as per your requirements
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // TODO: Process the data
        data.prophets.forEach(prophet => {
            const card = document.createElement('section');
            card.className = 'card';

            const name = document.createElement('h2');
            name.textContent = `${prophet.name} ${prophet.lastname}`

            const dob = document.createElement('div');
            dob.textContent = `Date of Birth: ${prophet.birthdate}`;

            const birthPlace = document.createElement('div');
            birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;

           //Create and set attributes for the image 
           const portrait = document.createElement('img');
           portrait.setAttribute('src', prophet.imageurl);
           portrait.setAttribute('alt', `Picture of ${prophet.name} ${prophet.lastname}`);
           portrait.setAttribute('loading', 'lazy');
           portrait.setAttribute('width', '340');
           portrait.setAttribute('height', '400');

            //Append elements to the DOM
            card.appendChild(name);
            card.appendChild(dob);
            card.appendChild(birthPlace);
            card.appendChild(portrait)

            //Append each each to the DOM
            cards.appendChild(card);
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadProphets(url);