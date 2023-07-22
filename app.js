const inputEmail = document.querySelector('#exampleInputEmail1');
const password = document.querySelector('#exampleInputPassword1');
const form = document.querySelector('#form');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const submitBtn = document.getElementById('submitBtn');
const btn = document.getElementById('btn');
const signOutLink = document.getElementById('signOut');
const closeModalBtn = document.getElementById('closeModal'); // Add the close button

if(close){
   close.addEventListener('click', () => {
      modal.style.display = "none";
  });
}

if(submitBtn){
   submitBtn.addEventListener('click', () => {
      validateInput();
    });
}


 const validateInput = () => {
   const inputValue = inputEmail.value.trim();
   const passwordValue = password.value.trim();
 
   // Email validation using a regular expression
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const isEmailValid = emailRegex.test(inputValue);
 
   // Password validation: Checking if the password is at least 6 characters long
   const isPasswordValid = passwordValue.length >= 6;
 
   if (!isEmailValid || !isPasswordValid) {
     alert('Please enter a valid email and password (password must be at least 6 characters).');
   } else {
     // Manually redirect to the dashboard
     window.location.href = "dashboard.html";
   }
 };

 btn.addEventListener('click', () => {
   modal.style.display = "block";
});

closeModalBtn.addEventListener('click', () => { // Add event listener for the close button
   modal.style.display = "none";
});

signOutLink.addEventListener('click', () => {
    // Redirect to the sign-in page
    window.location.href = "index.html";
});