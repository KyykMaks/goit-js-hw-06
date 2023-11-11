function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorDiv = document.querySelector(".color");
const changeColorDiv = document.querySelector(".change-color");


changeColorDiv.addEventListener('click', () => {
 const randomCOlor = getRandomHexColor();
 document.body.style.backgroundColor = randomCOlor;
 colorDiv.textContent = randomCOlor;
});