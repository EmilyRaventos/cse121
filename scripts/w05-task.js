/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById(`#temples`);
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  // Clear existing temple elements
  templesElement.innerHTML = "";

  // Process each temple in the array
  temples.forEach((temple) => {
    // Create HTML elements
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    // Set temple name in h3 element
    h3.textContent = temple.templeName;

    // Set image source and alt attributes
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append elements to the article
    article.appendChild(h3);
    article.appendChild(img);

    // Append the article to the global templesElement
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
    // Fetch temple data
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    );

    // Convert response to JSON and assign to templeList
    templeList = await response.json();

    // Display temples
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

/* reset Function */
const reset = () => {
  // Clear displayed list of temples
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
  // Call reset to clear output
  reset();

  // Get filter value from sortBy element
  const filter = document.getElementById("sortBy").value;

  // Use switch statement to filter temples based on the selected option
  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      break;
  }
};

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();
