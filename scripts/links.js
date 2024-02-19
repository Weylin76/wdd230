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

        // Clear the current content of the UL
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
                //Create li and a tag
                const li = document.createElement('li');
                const a = document.createElement('a');
                //set teh href and update content
                a.setAttribute('href', link.url);
                a.textContent = link.title;
                //append to the li tag
                li.appendChild(a); 
                linksList.appendChild(li); 
            });
            //append to the ul tag
            ul.appendChild(linksList); 
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

loadLinks(links);


