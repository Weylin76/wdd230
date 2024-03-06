const url = 'https://weylin76.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');
console.log('is working');
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
        console.log(data);
        console.log(url);
        
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadMembers(url)