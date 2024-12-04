const plane = document.getElementById("plane");
let xPosition = -100;
let yPosition = Math.floor(Math.random() * window.innerHeight);
let increment = 2;
function animate() {
   // console.log("animate call success");
    xPosition += increment; // Increment position
    let opperator=Math.random() < 0.5;
    if (opperator==true){ 
        yPosition += Math.floor(increment * Math.random());
    } else {
        yPosition -= Math.floor(increment * Math.random());
    }
    plane.style.left = `${xPosition}px`;

    plane.style.top = `${yPosition}px`;
    // Reset position when the image moves out of the screen
    if (xPosition > window.innerWidth) {
      position = -100; // Start again from the left
    }
    if (yPosition > window.innerHeight) {
      yPosition = -100; // Start again from the top
    }
  
    requestAnimationFrame(animate); // Call animate again for the next frame
  }

  function revealSecret(){
    increment = 0;
    document.getElementById("secret").style.display = "block";

  }


plane.addEventListener("click", revealSecret);


window.addEventListener("load", animate);