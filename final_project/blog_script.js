let i = 1;
let authority = false;

let index = document.getElementById("indexBox");
let auth = document.getElementById("auth");
let deleteButton = document.getElementById("delete");
let editButton = document.getElementById("Edit");
// Function to show the form for adding a post
function addTextBox() {
    console.log("edit success");
    let form = document.getElementById("addProjectForm");
    form.style.display = "block";
    editButton.style.display = "none";
    auth.style.display = "none";
    if (authority === true) {
        deleteButton.style.display = "block";
    }
}
function authorization() {
    if (document.getElementById("email").value === atob("bmV3cGFzc3dvcmQ=")) {
        console.log("auth pass");
        auth.style.display = "none";
        auth.value = "";
        authority = true; 
    }
    addTextBox();
}
function addDeletion(){
    index.style.display = "block";
    deleteButton.style.display = "none";
    document.getElementById("del2").style.display = "block";
}
function deletion() {
    deletePost(index.value);
    index.style.display = "none";
    document.getElementById("del2").style.display = "none";
}
function addAuthBox() {
    document.getElementById("formArea").style.display = "block";
    auth.style.display = "block";
    editButton.style.display = "none";

}
// Function to create the HTML structure for a post
function postTemplate(title, text) {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    switch (month) {
        case 0:
            month = "January";

            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    let html = `
    
    <h1>${title}</h1>
    <h3 class="postDate">${month} ${day}, ${year}</h3>
    <p class="blogText">${text}</p>
    `;
    return html;
}

// Function to add a post and save it to localStorage
function addPost(num) {
    let name = document.getElementById("name");
    let full = document.getElementById("description");
    let title = name.value;
    let text = full.value;

    if (title && text) {
        let post = postTemplate(title, text);

        // Append the post to the page
        document.getElementById("poem" + num).innerHTML = post;
        i++;

        // Hide the form and reset values
        document.getElementById("addProjectForm").style.display = "none";
        editButton.style.display = "block";
        name.value = "";
        full.value = "";

        // Save the post to localStorage
        savePostToLocalStorage(title, text);
    }
}

// Function to save a post to localStorage
function savePostToLocalStorage(title, text) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, text });
    localStorage.setItem("posts", JSON.stringify(posts));
}

// Function to load posts from localStorage on page load
function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach((post, index) => {
        let postHTML = postTemplate(post.title, post.text);
        document.getElementById("poem" + (index + 3)).innerHTML = postHTML;
        i = index + 2; // Update `i` based on the number of loaded posts
    });
}

// Deletes the post at the given index from localStorage and reloads the posts
function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1);  // Remove the post at the specified index
    localStorage.setItem("posts", JSON.stringify(posts));  // Update localStorage
    loadPosts();  // Reload posts to reflect changes
}

// Set up event listeners
document.getElementById("del2").addEventListener("click", deletion);
document.getElementById("Edit").addEventListener("click", addAuthBox);
document.getElementById("delete").addEventListener("click", addDeletion);
auth.addEventListener("submit", (event) => {
    event.preventDefault();
    authorization();
});
document.getElementById("addProjectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addPost(i);
});

// Load posts on page load
window.addEventListener("load", loadPosts);


