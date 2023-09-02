
// Password hiding and showing script using eventlistener
const showPassword = document.querySelector("#showPassword");
const password = document.querySelector("#password");




showPassword.addEventListener("click", function () {
    //Toggling the eye icon
    this.classList.toggle("fa-eye");
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
});

const showConfirmPassword = document.querySelector("#showConfirmPassword");
const ConfirmPassword = document.querySelector("#confirm-password");  

showConfirmPassword.addEventListener("click", function () {
    console.log(1)
    //Toggling the eye icon
    this.classList.toggle("fa-eye");
    // toggle the type attribute
    const type = ConfirmPassword.getAttribute("type") === "password" ? "text" : "password";
    ConfirmPassword.setAttribute("type", type);
    
});