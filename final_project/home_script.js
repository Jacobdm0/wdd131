const plane = document.getElementById("plane");
const chance = Math.random();
let xPosition = -60;
let yPosition = Math.floor(Math.random() * window.innerHeight);
let xIncrement = 2;
let yIncrement = 3;
plane.src="images/plane.png" ;
plane.alt="plane, image from Freepik";
function animate() {
  
   // console.log("animate call success");
    xPosition += xIncrement; // Increment position
    let opperator=Math.random() < chance;
    if (opperator==true){ 
        yPosition += Math.floor(yIncrement * Math.random());
    } else {
        yPosition -= Math.floor(yIncrement * Math.random());
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
    xIncrement = 0;
    yIncrement = 0;
    document.getElementById("welcome").style.display = "none";
    document.getElementById("secret").style.display = "block";
    plane.src="images/fireworks.png" ;
    plane.alt="fireworks, image from aopsan on Freepik";
    plane.style.left=window.innerWidth/2;
    plane.style.top=window.innerHeight/2;
    plane.style.width = '500px';
    setTimeout(() => {
      plane.style.display = 'none';
    }, 750)
    

  }


plane.addEventListener("click", revealSecret);


window.addEventListener("load", animate);