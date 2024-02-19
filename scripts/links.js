const links = "https://weylin76.github.io/wdd230/data/links.json";

async function loadLinks() {
    try {
        const response = await fetch(links);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Select the UL element where you want to append the list items
        const ul = document.querySelector('#insert-data');

        // Clear the current content of the UL, including the commented code
        ul.innerHTML = '';

        // Process the data and create list items
        data.lessons.forEach(lessonObj => {
            // Create a header for the lesson number
            const lessonHeader = document.createElement('h4');
            lessonHeader.textContent = `Lesson ${lessonObj.lesson}`;
            ul.appendChild(lessonHeader);

            // Create a nested list for the links
            const linksList = document.createElement('ul');

            lessonObj.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.setAttribute('href', link.url); // Set the href attribute to the link's URL
                a.textContent = link.title; // Set the anchor text to the link's title
                li.appendChild(a); // Append the anchor to the list item
                linksList.appendChild(li); // Append the list item to the nested unordered list
            });

            ul.appendChild(linksList); // Append the nested list to the main unordered list
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadLinks(links);


