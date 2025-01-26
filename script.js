// Create a footer element
const footer = document.createElement('footer');

// Append the footer to the body
document.body.appendChild(footer);

// Create a new Date object and get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Select the footer element
const footer1 = document.querySelector('footer');

// Create a new paragraph element for the copyright text
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Your Name ${thisYear}`;

// Append the copyright text to the footer
footer.appendChild(copyright);

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
