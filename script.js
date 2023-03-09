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

//Send contact email
const $form = document.querySelector('#form');
const btnMailto = document.querySelector('#mailto')

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    btnMailto.setAttribute('href', `mailto:elyruej.102004@gmail.com?subject=${form.get('subject')} - ${form.get('name')}&body=${form.get('message')}`)
    btnMailto.click();
}