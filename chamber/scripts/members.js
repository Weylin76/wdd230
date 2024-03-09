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
        
        //Create Busniess Name with H2 element
        const businessName = document.createElement('h2');
        businessName.textContent = `${business.name}`

        //Create Address information
        const businessAddress = document.createElement('p');
        businessAddress.innerHTML = `${business.address} <br> ${business.city}, ${business.state} ${business.zip}`

        //Create phone
        const businessPhone = document.createElement('p');
        businessPhone.textContent = `${business.phone}`;

        //Use set source for img and alt
        const businessLogo = document.createElement('img');
        businessLogo.setAttribute('src', business.image);
        businessLogo.setAttribute('alt', business.alt);
        businessLogo.setAttribute('loading', 'lazy');
        businessLogo.setAttribute('width', '100');

        //Create website information
        const businessWebsite = document.createElement('p');
        businessWebsite.textContent = `${business.website}`

        //Create membership Level
        const businessMembershipLevel = document.createElement('p');
        businessMembershipLevel.textContent = `Membership level: ${business.membershipLevel}`;
        

        cards.appendChild(businessLogo);
        cards.appendChild(businessName);
        cards.appendChild(businessAddress);
        cards.appendChild(businessPhone);
        cards.appendChild(businessWebsite);
        cards.appendChild(businessMembershipLevel);
        
    })
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMembers(url)