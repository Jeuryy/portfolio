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