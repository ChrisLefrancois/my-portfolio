const projects = document.querySelectorAll(".project");

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if(projectTop < triggerBottom) {
      project.classList.add('show')
    } else {
      project.classList.remove('show');
    }
  })
}
