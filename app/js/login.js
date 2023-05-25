"use strict";
console.log("page loading");

let buttonCheck = document.getElementById("buttonLogin");
buttonCheck.addEventListener("click", function () {
  console.log("TEST");
});

window.addEventListener("load", func);

function func() {
  document.getElementById("buttonLogin").addEventListener("click", loginCheck);
}

function loginCheck() {
  let inputValueE = document.getElementById("loginEmail").value;
  let inputValueP = document.getElementById("loginPassword").value;

  if (inputValueE === "one@mail" && inputValueP === "one") {
    loginComplete();
  } else {
    console.log("Error");
    // const errorLogin = document.getElementById("loginError");
    // errorLogin.innerText = "Login Failed. Please try again";
    // errorLogin.style.display = "block";
  }
}

function loginComplete() {
  window.location.href = "home.html";
}
