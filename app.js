const submitBtn = document.getElementById("subscrbing");
const emailInput = document.getElementById("email-input");
const labelSubmit = document.getElementById("label-submit");
const successCard = document.getElementById("success-card");
const submitCard = document.getElementById("submit-card");
const validChar =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
const confMsg = document.getElementById("conf-msg");
const dismissBtn = document.getElementById("dismiss");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(emailInput.value);
  if (emailInput.value.match(validChar)) {
    console.log("valid email");
    submitCard.style.display = "none";
    successCard.style.display = "flex";
    confMsg.innerHTML = `A confirmation email has been sent to <strong>${emailInput.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
  } else {
    console.log("non valid email");
    labelSubmit.innerHTML = `Pls insert valid email address`;
    labelSubmit.style.color = "red";
  }
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitCard.style.display = "flex";
  successCard.style.display = "none";
  emailInput.value = "";
  labelSubmit.innerHTML = `Email Address`;
  labelSubmit.style.color = "black";
});
