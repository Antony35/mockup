const bigSphere   = document.querySelector('.sphere-container__big');
const smallSphere = document.querySelector('.sphere-container__small');
const benjamin    = document.querySelector('.benjamin');
const body        = document.querySelector('body');

if (window.innerWidth > 1000) {
  body.addEventListener("mousemove", (event) => {
    let x = (event.clientX - (window.innerWidth /2));
    let y = (event.clientY - (window.innerHeight /2));
      
    // Change the value of the divider for more or less parallax effect
      bigSphere.style.transform = `translate3D(${x/10}px, ${y/10}px, 0)`;
      smallSphere.style.transform = `translate3D(${-x/8.5}px, ${y/10}px, 0)`;
      benjamin.style.transform = `translate3D(${-x/35}px, 0, 0)`;
  });
}