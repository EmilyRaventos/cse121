/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Emily Raventos",
  photo: `images/profilePic.jpg`,
  favoriteFoods: ["Pizza", "Salad", "Pasta", "Cereal", "Ice cream"],
  hobbies: ["Reading", "Hiking", "Boxing", "Volleyball"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Saratoga Springs, UT",
  length: "21 years",
});

myProfile.placesLived.push({
  place: "Wisconsin",
  length: "1 1/2 years",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */
document.getElementById(`photo`).src = myProfile.photo;
document.getElementById(`photo`).alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement(`li`);
  li.textContent = food;
  document.querySelector(`#favorite-foods`).appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement(`li`);
  li.textContent = hobby;
  document.querySelector(`#hobbies`).appendChild(li);
});

/* Places Lived DataList */
let dlElement = document.getElementById(`places-lived`);

myProfile.placesLived.forEach((placeInfo) => {
  let dtElement = document.createElement(`dt`);
  dtElement.textContent = placeInfo.place; // Set text content to the place property

  let ddElement = document.createElement(`dd`);
  ddElement.textContent = placeInfo.length; // Set text content to the length property

  dlElement.appendChild(dtElement);
  dlElement.appendChild(ddElement);
});
