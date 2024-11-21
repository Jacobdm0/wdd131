import recipes from "./recipe.mjs";

function randNum() {
    return Math.floor(Math.random() * 5);
}
function recipeTemplate(recipe) {
    let ratingHtml = ratingTemplate(recipe.rating)
    let tagsHtml = tagsTemplate(recipe.tags)
    let html = `<main>
                            <div class="grid-1">
                                <img class="recipe-image" src="${recipe.image}" alt="${recipe.name} image">
                            </div>
                            
                            <div class="grid-2">
                                ${tagsHtml}
                                <h2>${recipe.name}</h2>
                                <p class="recipe-description">${recipe.description}</p>
                                ${ratingHtml}
                            </div>
                        </main>
                       `

    return html
}

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    let i = 0
    let html = ``
    while (i < tags.length) {
        html += `<p class="tag">${tags[i]}</p>`
        i++;
    }

    return html;
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let i = 0
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    // our ratings are always out of 5, so create a for loop from 1 to 5
    do {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
        i++;
    }
    while (i <= 5)
    html += `</span>`
    // return the html string
    return html
}

function Filter(query) {
    let filtered = recipes.filter(recipe =>
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
      );
    const sorted =filtered.sort()
    return sorted
    }
function searchHandler(e) {
    e.preventDefault();
    let search = (document.querySelector("input").value).toLowerCase();
    console.log(search);
   let filteredlist =Filter(search);
   render(filteredlist)

}


function render(recipe) {
    let html = ``;
    for (let i = 0; i < recipe.length; i++) {
     html += recipeTemplate(recipe[i]);
    }
    document.querySelector("main").innerHTML =html
 }
function init() {
    let recipe = recipes[randNum()]
    render([recipe]);
}


const button = document.querySelector("button");
button.addEventListener("click", searchHandler);

init();