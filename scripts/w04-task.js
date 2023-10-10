/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Katherine Druchok",
    photo: "images/myphoto.png",
    favoriteFoods: [
        "Watermelons",
        "Shashlik",
        "Dairy",
        "Cinnamon Rolls",
        "Sushi",
        "Khachapuri",
        "Kharcho",
        "Crêpes"
    ],
    hobbies: [
        "Gaming",
        "Drawing & Painting",
        "Sculpting",
        "Jewelry & Charm Making",
        "Language Learning",
        "Butterfly & Moth Research",
        "Drumming",
        "Sewing",
        "True Crime Research"
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "DVRZ, Kyiv (Ukraine)",
        length: "11 years"
    },
    {
        place: "Bortnychi, Kyiv (Ukraine)",
        length: "1 year and 4 months"
    },
    {
        place: "Brovary, Kyivska Oblast (Ukraine)",
        length: "5 years"
    },
    {
        place: "Hańsk, Lublin Voivodeship (Poland)",
        length: "6 months"
    },
    {
        place: "Gdańsk, Pomeranian Voivodeship (Poland)",
        length: "1 year and 2 months"
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.innerHTML = place.place;
    dd.innerHTML = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
