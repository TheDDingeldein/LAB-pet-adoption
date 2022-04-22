const pet = document.querySelector(#pet);

let domString = "";
for (const indPet of pets) {
  do,String += `<div class="card" style="width: 18rem;">;
  <h5 class="card-title">${indPet.name}</h5>;
  <img src="${indPet.imageURL}" class="card-img-top" alt="pet">;
  <div class="card-body">;
    <p class="pet-color">${indPet.color}</p>;
    <p class='special-skill'>${indPet.specialSkill}</p>;
    <footer>${indPet.type}<footer>;
    <a href="#" class="btn btn-primary">Add Pets</a>;
    <a href="#" class="btn btn-primary">Detete</a>;
  </div>
}
pet.innerHTML = domString;

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
