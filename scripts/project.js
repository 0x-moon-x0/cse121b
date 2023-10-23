const emojisElement = document.querySelector("#emojis");
let emojiList = [];

const displayEmojis = (emojis) => {
    emojis.forEach((emoji) => {
        let box = document.createElement("box");
        let h3 = document.createElement("h3");
        h3.innerHTML = emoji.name;
        let p = document.createElement("p");
        p.innerHTML = emoji.htmlCode;
        box.appendChild(h3);
        box.appendChild(p);
        emojisElement.appendChild(box);
    });
};

const getEmojis = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/all");
    emojiList = await response.json();
    displayEmojis(emojiList);
};

let reset = () => {
    document.querySelector("#emojis").innerHTML = "";
};

let sortBy = async (emojis) => {
    reset();
    let filter = await document.querySelector("#sortBy").value;
    switch(filter) {
        case "smileys-and-people":
            let smileysFilter = emojis.filter((emoji) => emoji.category.includes("smileys and people"));
            displayEmojis(smileysFilter);
            break;
        case "animals-and-nature":
            let natureFilter = emojis.filter((emoji) => emoji.category.includes("animals and nature"));
            displayEmojis(natureFilter);
            break;
        case "food-and-drink":
            let foodFilter = emojis.filter((emoji) => emoji.category.includes("food and drink"));
            displayEmojis(foodFilter);
            break;
        case "travel-and-places":
            let placesFilter = emojis.filter((emoji) => emoji.category.includes("travel and places"));
            displayEmojis(placesFilter);
            break;
        case "activities":
            let activitiesFilter = emojis.filter((emoji) => emoji.category.includes("activities"));
            displayEmojis(activitiesFilter);
            break;
        case "objects":
            let objectsFilter = emojis.filter((emoji) => emoji.category.includes("objects"));
            displayEmojis(objectsFilter);
            break;
        case "symbols":
            let symbolsFilter = emojis.filter((emoji) => emoji.category.includes("symbols"));
            displayEmojis(symbolsFilter);
            break;
        case "flags":
            let flagsFilter = emojis.filter((emoji) => emoji.category.includes("flags"));
            displayEmojis(flagsFilter);
            break;
        case "all":
            displayEmojis(emojis);
    };
};

getEmojis();

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(emojiList) });