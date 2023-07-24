let signInEmail = document.getElementById("signInEmailInput");
let signInPassword = document.getElementById("signInPasswordInput");
let signInButton = document.getElementById("signInButton");
let incorrectParagraph = document.getElementById("incorrect");
let userArray = JSON.parse(localStorage.getItem('userArray'));


let SessionUser;



signInButton.addEventListener("click", function () {
  if (!isEmpty() && localStorage.getItem('userArray')) {
    checkUser();
  } else {
    incorrectParagraph.innerHTML = `<span class="text-danger m-3">please signup as user first then try to login</span>`;
    // window.location.href = "signup.html";
    setTimeout(function () {

      window.location.href = "signup.html";
    }, 6000);
  }
})

function checkUser() {
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].userEmail === signInEmail.value && userArray[i].userPassword === signInPassword.value) {
      incorrectParagraph.innerHTML = `<span class="text-success m-3">Success</span>`;
      SessionUser = userArray[i].userName;
      localStorage.setItem('SessionUser', JSON.stringify(SessionUser));
      window.location.href = "home.html";
      break;
    } else if (userArray[i].userEmail === signInEmail.value && userArray[i].userPassword !== signInPassword.value) {
      incorrectParagraph.innerHTML = `<span class="text-danger m-3">Password is incorrect</span>`;
    } else if (userArray[i].userEmail !== signInEmail.value && userArray[i].userPassword === signInPassword.value) {
      incorrectParagraph.innerHTML = `<span class="text-danger m-3">Email is incorrect</span>`;
    } else {
      incorrectParagraph.innerHTML = `<span class="text-danger m-3">All inputs is not correct</span>`;
    }
  }

}

function isEmpty() {
  if (signInEmail.value === '' && signInPassword.value === '') {
    incorrectParagraph.innerHTML = `<span class="text-danger m-3">All inputs are required</span>`;
    return true;
  } else if (signInEmail.value === '' && signInPassword.value !== '') {
    incorrectParagraph.innerHTML = `<span class="text-danger m-3">Email is required</span>`;
    return true;
  } else if (signInEmail.value !== '' && signInPassword.value === '') {
    incorrectParagraph.innerHTML = `<span class="text-danger m-3">password is required</span>`;
    return true;
  }
}

if ((location.pathname === "/home.html") && localStorage.getItem('SessionUser') === null) {
  window.location.href = "index.html";
}
