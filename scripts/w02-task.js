/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Emily Raventos";
let currentYear = "2023";
let profilePicture = "images/profilePic.jpg";
// let profilePicture = "w02-task/images/profilePic.j   pg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector(
  'img[src="images/placeholder.png"]'
);
imageElement.src = profilePicture;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ["pizza", " icecream", " cereal", " salads", " sandwiches"];
foodElement.innerHTML = `<br>${favFoods}`;

// Add a favorite food to the list.
const favoriteFood = " enchiladas";
favFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the first food from the list.
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

// Remove the last food from the list.
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
