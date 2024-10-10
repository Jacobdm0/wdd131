const menuButton = document.querySelector("#menuButton");
function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hide");
  
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 801) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize)
  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  function viewHandler(event) {
    // Create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
    // Get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute("src").split("-");
    // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = `${src[0]}-full.jpeg`;
    // Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, clickedElement.alt));
    // Add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }
const images = document.querySelectorAll(".view");
images.forEach(image => {
  image.addEventListener("click", viewHandler);
});
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }
  
