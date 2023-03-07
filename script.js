//Apply style to the menu's selected option and remove last one
const select = (link) => {
    let options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "selected";


    //Hide menu once a ¿n option has been selected
    let x = document.getElementById("nav");
    x.className = "";
}


//Show responsive menu
const responsiveMenu = () => {
    let x = document.getElementById("nav");
    (x.className === "") ? x.className = "responsive": x.className = "";
}

//Scroll detect to apply animation
window.onscroll = function() {
    skillsEffect()
};

//function that applies animation to the skills bar
function skillsEffect() {
    let skills = document.getElementById("skills");
    let skills_distance = window.innerHeight = skills.getBoundingClientRect().top;
    if (skills_distance <= 300) {
        document.getElementById("html").classList.add("bar-progress1");
        document.getElementById("js").classList.add("bar-progress2");
        document.getElementById("bd").classList.add("bar-progress3");
        document.getElementById("cs").classList.add("bar-progress4");
    }

}