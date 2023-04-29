const signUpPageNav = document.getElementById('signUp');
const profilePageNav = document.getElementById('profile');


const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');
const confirmPassElement = document.getElementById('confirmPassword');
const successEl = document.getElementById('success');
const errorEl = document.getElementById('error');
const passwordMismatchedEl = document.getElementById('passwordMismatched');
const invalidemailEl = document.getElementById('invalidEmail');
const submitBtn = document.getElementById('submit-btn');


const inputArr = [];
let userObj = {};
let usersArray = [];  


if (localStorage.getItem('accessToken')) {
  location.href = './profile.html';
}


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitDetails();
})

function submitDetails() {
  
  inputArr.length = 0;
  const name = nameElement.value.trim();
  inputArr.push(name);
  const email = emailElement.value.trim();
  inputArr.push(email);
  const password = passwordElement.value.trim();
  inputArr.push(password);
  const cnfPassword = confirmPassElement.value.trim();
  inputArr.push(cnfPassword);
  // console.log(inputArr);

  //* checking whether all input fields are filled or not

  if (inputArr.includes('')) {
    console.log('error block');
    errorEl.classList.remove('hidden');
    successEl.classList.add('hidden');
  } 
  else {
    if (password !== cnfPassword) {
      passwordMismatchedEl.classList.remove('hidden');
    } 
    else if (!(email.split('').includes('@'))) {  
      invalidemailEl.classList.remove('hidden');
    } 
    else {
      successEl.classList.remove('hidden');
      errorEl.classList.add('hidden');
      passwordMismatchedEl.classList.add('hidden');
      invalidemailEl.classList.add('hidden');
      setLS_redirectProfile(name, email, password);  
    }
  }
}


function setItemIn_LS(usersArray, accessToken) {
  localStorage.setItem('users', JSON.stringify(usersArray)); 
  localStorage.setItem('state', '1');
  // set the accessToken for this user
  localStorage.setItem('accessToken', accessToken);
}


signUpPageNav.addEventListener('click', () => {
  alert('You are currently on the Sign up page ');
})


profilePageNav.addEventListener('click', () => {
  alert('Please sign up first!');
})


function setLS_redirectProfile(name, email, password) {
  let accessToken = `${Math.random().toString(26).slice(2)}${Math.random().toString(26).slice(2, 6)}`; 
  userObj.name = name;
  userObj.email = email;
  userObj.password = password;
  usersArray.push(userObj);
  // set userdetails in local storage
  setItemIn_LS(usersArray, accessToken)  
  // set input deatails array as empty
  // redirect user to the profile page
  location.href = './profile.html';
}
