// Footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement('footer');
footer.setAttribute('aria-label', 'Site footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Jade Shepherd`;
footer.appendChild(copyright);

// Skills
const skills = [
  "Logo Design", "Creative Marketing & Outreach", "Javascript", "HTML", "CSS",
  "Git & Github", "Canva", "Email Marketing", "Brand Strategy"
];
const skillsSection = document.querySelector('#Skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const li = document.createElement('li');
  li.textContent = skills[i];
  skillsList.appendChild(li);
}

// Handle Message Form Submit
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');

  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>: 
    <span>${usersMessage}</span>
  `;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';

  removeButton.addEventListener('click', function () {
    let entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

// Fetch Data From GitHub API
fetch("https://api.github.com/users/Jshepherd25/repos")
  .then(response => response.json())
  .then(repositories => {
    console.log("Repositories fetched:", repositories);

    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");
    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {
      const repo = repositories[i];

      const projectCard = document.createElement("li");
      projectCard.classList.add("project-card");

      const link = document.createElement("a");
      link.href = repo.html_url;
      link.target = "_blank";
      link.textContent = repo.name;
      link.classList.add("project-link");

      const desc = document.createElement("p");
      desc.textContent = repo.description
        ? repo.description
        : "An ongoing spell in the making... ✨";
      desc.classList.add("project-desc");

      projectCard.appendChild(link);
      projectCard.appendChild(desc);
      projectList.appendChild(projectCard);
    }
  })
  .catch(error => {
    console.error("Error fetching repositories:", error);
    const projectSection = document.getElementById("Projects");
    projectSection.innerHTML = `<p style="color:white;">⚠️ Unable to load projects. Please try again later.</p>`;
  });