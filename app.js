const inputEmail = document.querySelector('#exampleInputEmail1');
const password = document.querySelector('#exampleInputPassword1');
const form = document.querySelector('#form');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const submitBtn = document.getElementById('submitBtn');
const btn = document.getElementById('btn');
const signOutLink = document.getElementById('signOut');
const closeModalBtn = document.getElementById('closeModal'); // Add the close button
const submitTaskBtn = document.getElementById('submitTaskBtn');


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

const taskContainer = document.querySelector('.task-container'); // Add this line to select the task container element

if(submitTaskBtn){
   submitTaskBtn.addEventListener('click', () => {
      handleTaskSubmission();
    });
}

function handleTaskSubmission() {
   console.log("here")
    const taskInput = document.getElementById('taskInput').value.trim();
    const dateInput = document.getElementById('dateInput').value;
    const descriptionInput = document.getElementById('textarea').value.trim();

    if (taskInput === '' || dateInput === '' || descriptionInput === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new list item (<li>) to hold the task details
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${taskInput}</strong> - ${dateInput}<br>${descriptionInput}`;

    // Append the new list item to the task container
    taskContainer.appendChild(taskItem);

    // Clear the form inputs and close the modal
    document.getElementById('taskForm').reset();
    modal.style.display = "none";
}