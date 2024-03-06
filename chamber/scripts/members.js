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

        const businessName = document.createElement('h2');
        businessName.textContent = `${business.name}`
        console.log(business.name)




    

        cards.appendChild(businessName);
    })
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMembers(url)