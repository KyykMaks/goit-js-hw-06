const input = document.getElementById("validation-input");


input.addEventListener('blur', () => {
    const itemLength = parseInt(input.getAttribute('data-length'), 10);
    const inputValue = input.value.length;

    if(inputValue === itemLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        
    }
})

