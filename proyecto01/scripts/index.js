const navToggleProg = document.querySelector(".toggle-prog");
const navSkills = document.querySelector(".skills-programming-content");

navToggleProg.addEventListener("click", ()=>{
    navSkills.classList.toggle("show-skills-programming-content");
});

const navToggleUtilitary = document.querySelector(".toggle-utilitary");
const navUtilitary = document.querySelector(".skills-utilitary-content");

navToggleUtilitary.addEventListener("click", () => {
    navUtilitary.classList.toggle("show-skills-utilitary-content");
});

const navToggleTech = document.querySelector(".toggle-tech");
const navTech= document.querySelector(".skills-tech-content");

navToggleTech.addEventListener("click", () => {
    navTech.classList.toggle("show-skills-tech-content");
});