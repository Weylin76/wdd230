const url = 'https://weylin76.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function loadMembers(url) {
    // TODO: Replace the URL with your actual data source
    try {
        // TODO: Modify the fetch as per your requirements
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // TODO: Process the data
        data.BusinessInformation.forEach(business => {

        const card = document.createElement('section');
        card.className = 'card';
        card.style.border = '1px solid black'
        
        //Create Busniess Name with H2 element
        const businessName = document.createElement('h2');
        businessName.textContent = `${business.name}`

        //Create Address information
        const businessAddress = document.createElement('address');
        businessAddress.innerHTML = `${business.address} <br> ${business.city}, ${business.state} ${business.zip}`

        //Create phone
        const businessPhone = document.createElement('p');
        businessPhone.textContent = `${business.phone}`;

        //Use set source for img and alt
        const businessLogo = document.createElement('img');
        businessLogo.setAttribute('src', business.image);
        businessLogo.setAttribute('alt', business.alt);
        businessLogo.setAttribute('loading', 'lazy');
        businessLogo.setAttribute('width', '35%');
        businessLogo.style.border = '1px solid black';
        businessLogo.style.borderRadius = '5px'

        // Create website information as a link
        const businessWebsite = document.createElement('a');
        businessWebsite.textContent = business.website;
        businessWebsite.href = business.website;
        businessWebsite.target = '_blank';

        //Create membership Level
        const businessMembershipLevel = document.createElement('p');
        businessMembershipLevel.textContent = `Level: ${business.membershipLevel}`;
        

        cards.appendChild(card);
        card.appendChild(businessLogo);
        card.appendChild(businessName);
        card.appendChild(businessAddress);
        card.appendChild(businessPhone);
        card.appendChild(businessWebsite);
        card.appendChild(businessMembershipLevel);
    
    })
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMembers(url)

const listView = document.querySelector('.list-view');
const cardView = document.querySelector('.grid-view');

listView.addEventListener('click', () => {cards.classList.add('list-view')}, true);
listView.addEventListener('click', () => {cards.classList.remove('grid-view')}, true);

cardView.addEventListener('click', () => {cards.classList.add('grid-view')}, true)
cardView.addEventListener('click', () => {cards.classList.remove('list-view')}, true)