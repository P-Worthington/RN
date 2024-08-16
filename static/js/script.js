function changeMenu() {
    var y = document.getElementById("burgerIcon")
    y.classList.toggle("change");
}

$(document).ready(function(){
    $("#burgerIcon").click(function(){
        $("#navContainer").slideToggle(400);
    });
});

function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

window.onscroll = () => {
    x = document.getElementsByClassName("change").length
    if (x === 1) {
        var y = document.getElementById("burgerIcon")
        y.classList.remove("change");
        $("#navContainer").slideToggle(200);
    } 
}