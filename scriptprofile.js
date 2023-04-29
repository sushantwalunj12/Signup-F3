// store the hyperlink for signup and profile page
const signUpPageNav = document.getElementById('signUp');
const profilePageNav = document.getElementById('profile');

// store the profile details elements
const nameElement = document.getElementById('disp-name');
const emailElement = document.getElementById('disp-email');
const passwordElement = document.getElementById('disp-password');
const userDetails = document.getElementById('user_deatails');


let currUser = JSON.parse(localStorage.getItem('users'))[0];  
displaydetails(currUser);
userDetails.classList.remove('hidden');



function logOut() {
  localStorage.removeItem('users');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('state');
  userDetails.classList.add('hidden');

  location.href = './index.html';
}


function displaydetails(currUser) {
  nameElement.textContent = currUser.name.toUpperCase();
  emailElement.textContent = currUser.email;
  passwordElement.textContent = currUser.password;
}


signUpPageNav.addEventListener('click', () => {
  alert('You have already signed up!!');
})


profilePageNav.addEventListener('click', () => {
  alert('You are currently on the profile page');
})