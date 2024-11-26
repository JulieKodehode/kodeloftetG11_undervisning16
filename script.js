const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button is clicked!");
});