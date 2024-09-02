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
    emailjs.send("service_qnoe5p7", "template_t75p7oo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            successModal()
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

function successModal () {
    document.getElementById("success-modal").style.display = "block"
    document.getElementById("form").style.display = "none"
}