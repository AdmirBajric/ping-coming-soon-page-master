const submit = document.querySelector(".form button");
const input = document.querySelector(".form input");
const error = document.getElementById("error");

submit.addEventListener("click", (e) => {
  if (check(input)) {
    input.value = "";
    alert("Thank you for Subscribing!");
  }
});

input.addEventListener("input", (e) => {
  check(e.target);
});

const validateEmail = (inputText) => {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.value.match(mailFormat);
};

const check = (inputTxt) => {
  if (!validateEmail(inputTxt)) {
    error.style.display = "flex";
    error.innerHTML = `<p>Please provide a valid email address</p>`;
    inputTxt.style.border = "1px solid #ff5263";
    return false;
  } else {
    error.style.display = "none";
    error.innerHTML = ``;
    inputTxt.style.border = "1px solid #c2d3ff";
    return true;
  }
};
