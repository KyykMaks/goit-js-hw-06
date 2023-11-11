const fontSize = document.getElementById('font-size-control');
const textId = document.getElementById('text')


fontSize.addEventListener('input', () => {
   const fontSizeValue = fontSize.value;
   textId.style.fontSize = `${fontSizeValue}px`;


});