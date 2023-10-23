/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */

let reset = () => {
    document.querySelector("#temples").innerHTML = "";
};

/* sortBy Function */

let sortBy = async (temples) => {
    reset();
    let filter = await document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            let utahFilter = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahFilter);
            break;
        case "notutah":
            let notUtahFilter = temples.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(notUtahFilter);
            break;
        case "older":
            let olderFilter = temples.filter((temple) => new Date(temple.dedicate0d) < new Date(1950, 0, 1));
            displayTemples(olderFilter);
            break;
        case "all":
            displayTemples(temples);
    };
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });