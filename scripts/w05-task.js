/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];




/* async displayTemples Function */
const displayTemples = (temples) => {
    // list of temples
    temples.forEach(a_temple => {
        let articleElememt = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = a_temple.templeName; //
        let imageElement = document.createElement('img');
        imageElement.src = a_temple.imageUrl; //
        imageElement.alt = a_temple.location;

        articleElememt.appendChild(h3Element);
        articleElememt.appendChild(imageElement);

        templesElement.appendChild(articleElememt);

        
    });

}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();

    displayTemples(templeList);
    console.log(templeList);
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}



/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value
    
    switch (filter) {
        case 'utah':
            let utahTemples = temples.filter((temple) => temple.location.toLowerCase().includes('utah'));
            displayTemples(utahTemples)
            break;
        case 'notutah':
            let notutah = temples.filter((temple) => !temple.location.toLowerCase().includes('utah'));
            displayTemples(notutah);
            break;
        case 'older':
            let older =temples.filter((temple) => new Date (temple.dedicated) > new Date(1950, 0, 1) ) ;
            displayTemples(older)
            break;
        case 'all':
            displayTemples(temples);
        
        }



    
}


getTemples();
console.log(templeList);


/* Event Listener */
document.querySelector('#filtered').addEventListener('change',() => {filterTemples(templeList)});