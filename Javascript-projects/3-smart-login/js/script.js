// get the logout button and user name elements
let logoutBtn = document.getElementById('logoutBtn');
let userName = document.getElementById('username');

// set the user name element's innerHTML to display the user's name
userName.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('SessionUser'))}`;

// add an event listener to the logout button
logoutBtn.addEventListener('click', function () {
  logout();
});

// redirect the user to the index page if they are not logged in
if (!localStorage.getItem('SessionUser')) {
  window.location.href = "index.html";
}

// check if the loggedOut item exists in sessionStorage
if (sessionStorage.getItem('loggedOut')) {
  // remove the loggedOut item and redirect the user to the login page
  sessionStorage.removeItem('loggedOut');
  window.location.href = "index.html";
}

// define the logout function
function logout() {
  // clear the SessionUser item from localStorage
  localStorage.removeItem('SessionUser');
  // set the loggedOut item in sessionStorage to prevent back button from returning to home.html
  sessionStorage.setItem('loggedOut', 'true');
  // redirect the user to the login page
  window.location.href = "index.html";
}
