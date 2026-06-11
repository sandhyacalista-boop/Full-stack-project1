// Welcome Button

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button){

        button.addEventListener("click", function(){

            if(button.innerText === "Get Started"){
                alert("Welcome to Responsive Frontend Interface!");
            }

            if(button.innerText === "Submit"){
                alert("Form Submitted Successfully!");
            }

        });

    });

});