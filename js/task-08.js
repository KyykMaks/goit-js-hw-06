const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

const emailLog = form.elements.email.value;
const passwordLog = form.elements.password.value;


if(!emailLog || !passwordLog) {
    alert ('Please fill in all fields');
} else {

const formData = {
    email: emailLog,
    password: passwordLog,
}};

console.log(formData);

form.reset();

})
