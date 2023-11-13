const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const emailLog = form.elements.email.value;
  // const passwordLog = form.elements.password.value;
  const {
    email: { value: emailLog },
    password: { value: passwordLog },
  } = form.elements;

  if (!emailLog || !passwordLog) {
    return alert("Please fill in all fields");
  }

  const formData = {
    email: emailLog,
    password: passwordLog,
  };
  console.log(formData);
  form.reset();
});
