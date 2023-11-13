const fontSize = document.getElementById('font-size-control');
const textId = document.getElementById('text')


function setFontSize() {

   textId.style.fontSize = `${fontSize.value}px`;

}
  setFontSize();

fontSize.addEventListener('input', setFontSize);

