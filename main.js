const submit = document.querySelector(".form button");
const input = document.querySelector(".form input");
const error = document.querySelectorAll(".error");
const [mobileErr, desktopErr] = error;

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
  let err;
  if (window.innerWidth <= 600) {
    err = mobileErr;
  } else {
    err = desktopErr;
  }

  if (!validateEmail(inputTxt)) {
    err.style.display = "flex";
    err.innerHTML = `<p>Please provide a valid email address</p>`;
    inputTxt.style.border = "1px solid #ff5263";
    return false;
  } else {
    err.style.display = "none";
    err.innerHTML = ``;
    inputTxt.style.border = "1px solid #c2d3ff";
    return true;
  }
};

window.addEventListener("resize", () => {
  input.value = "";
  mobileErr.innerHTML = "";
  desktopErr.innerHTML = "";
  input.style.border = "1px solid #c2d3ff";
});
