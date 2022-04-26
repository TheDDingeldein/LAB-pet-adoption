

//Various code

HTML file
<html>
...
  <button id="main-btn"></button>;
...
</html>

JS File
const button = document.getElementByID('main-btn');

const whatIsTheId = (e) => {
  return `The element ID is $(e.target.id)!`;
}

button.addEventListener('click',whatIsTheId);

//This might be Bootstrap code. I am not sure.

document.querySelector("#cat-btn").addEventListener("click", showAnimal);
document.querySelector("#dog-btn").addEventListener("click", showAnimal);
document.querySelector("#dino-btn").addEventListener("click", showAnimal);
document.querySelector("#all-btn").addEventListener("onClick", showAnimal);
