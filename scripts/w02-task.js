/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Katherine Druchok";
let currentYear = "2023";
let profilePicture = "images/myphoto.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home picture img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${nameElement}`);

/* Step 5 - Array */

let foods = ["Rice", "Watermelons", "Shashlik", "Raspberries", "Dairy", "Cinnamon Rolls", "Sushi", "Khachapuri", "Kharcho", "Crêpes"];

foodElement.textContent = foods;

let newFood = "Peaches";

foods.push(newFood);

foodElement.innerHTML += `<br>${foods}`;

foods.shift();

foodElement.innerHTML += `<br>${foods}`;

foods.pop();

foodElement.innerHTML += `<br>${foods}`;
