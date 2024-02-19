const url = "https://weylin76.github.io/wdd230/";
const links = "https://weylin76.github.io/wdd230/data/links.json"

async function getLinks(url) {
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
        
    } catch (error) {
        console.error('Fetch error:', error);
    }
}