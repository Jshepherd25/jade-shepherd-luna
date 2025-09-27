//Footer
const today = new Date();
const thisYear = today.getFullYear();

//Make a footer and put it at the end of the body
const footer = document.createElement('footer');
footer.setAttribute('aria-label', 'Site footer');
document.body.appendChild(footer);

//Create a Copyright
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Jade Shepherd`;
footer.appendChild(copyright);

//Skills
const skills = [
    "Logo Design", "Creative Marketing & Outreach", "Javascript", "HTML", "CSS", "Git & Github", "Canva", "Email Marketing", "Brand Strategy",
];
const skillsSection = document.querySelector('#Skills');
let skillsList = skillsSection.querySelector('ul');

for (let i=0; i < skills.length; i++) {
    const li = document.createElement('li');
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
