//function Password() {
    let password = prompt("This website is in production - please enter your password:");
    if (password=="codedbyemma") {
    alert("Thank you!")
    }
    else {
        alert("Sorry, this is not correct");
        window.stop();

    }
}

//document.addEventListener("DOMContentLoaded", Password());
