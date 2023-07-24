let signUpName = document.getElementById("signUpNameInput");
let signUpEmail = document.getElementById("signUpEmailInput");
let signUpPassword = document.getElementById("signUpPasswordInput");
let existParagraph = document.getElementById('exist');
let signUpButton = document.getElementById("signUpButton");


let userArray;

if (localStorage.getItem('userArray') === null) {
  userArray = [];
} else {
  userArray = JSON.parse(localStorage.getItem('userArray'));
}

signUpButton.addEventListener('click', AddUser);

function AddUser() {
  if (!isEmpty() && validateEmail(signUpEmail.value)) {
    existParagraph.innerHTML = `<span class="text-success m-3">Success</span>`;
    let user = {
      userName: signUpName.value,
      userEmail: signUpEmail.value,
      userPassword: signUpPassword.value
    }

    userArray.push(user);
    existParagraph.innerHTML = `<span class="text-success m-3">Success</span>`;
    reset();
    localStorage.setItem('userArray', JSON.stringify(userArray));
  } else if (!isEmpty() && validateEmail(signUpEmail.value) === false) {
    existParagraph.innerHTML = `<span class="text-danger m-3">Please Enter valid email</span>`;
    validateEmail(signUpEmail.value);
  }
}


function reset() {
  signUpName.value = '';
  signUpEmail.value = '';
  signUpPassword.value = '';
  setTimeout(function () {
    existParagraph.innerHTML = '';
    window.location.href = 'index.html';
  }, 2000);
}


function isEmpty() {
  if (signUpName.value === '' && signUpEmail.value === '' && signUpPassword.value === '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">All inputs are required</span>`;
    return true;
  } else if (signUpName.value === '' && signUpEmail.value !== '' && signUpPassword.value !== '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">Name is required</span>`;
    return true;
  } else if (signUpName.value !== '' && signUpEmail.value === '' && signUpPassword.value !== '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">email is required</span>`;
    return true;
  } else if (signUpName.value !== '' && signUpEmail.value !== '' && signUpPassword.value === '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">password is required</span>`;
    return true;
  } else if (signUpName.value !== '' && signUpEmail.value === '' && signUpPassword.value === '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">email and password are required</span>`;
    return true;
  } else if (signUpName.value === '' && signUpEmail.value === '' && signUpPassword.value !== '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">name and email are required</span>`;
    return true;
  } else if (signUpName.value === '' && signUpEmail.value !== '' && signUpPassword.value === '') {
    existParagraph.innerHTML = `<span class="text-danger m-3">name and password are required</span>`;
    return true;
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].userEmail === email) {
      console.log(userArray[i].userEmail);
      console.log(email);
      existParagraph.innerHTML = `<span class="text-danger m-3">Email already exist</span>`;
      return false;
    }
  }

  return regex.test(email);

}

// if (location.pathname.split('/')[1] === "signup.html" && location.pathname === "/index.html" && localStorage.getItem('SessionUser') === null) {
//   alert("please signup as user first then try to login");
//   window.location.href = "index.html";
// }


