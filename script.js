// Select the message form
const messageForm = document.forms['leave_message'];

// Add an event listener for form submission
messageForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page refresh
  
  // Retrieve form values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  
  console.log(usersName, usersEmail, usersMessage); // Log values

  // Select the messages section and list
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  
  // Create new message list item
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>: 
    <span>${usersMessage}</span>
  `;
  
  // Create remove button
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';
  
  // Add event listener to remove button
  removeButton.addEventListener('click', function () {
    newMessage.remove();
  });
  
  // Append remove button and new message to list
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  
  // Reset the form
  messageForm.reset();
});

// List of skills
const skills = ["JavaScript", "HTML", "CSS", "Python", "GitHub"];

// Select the skills section and the <ul> element
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

// Iterate over the skills array and create list items
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}