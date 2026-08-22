const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError =
    document.getElementById("usernameError");
const passwordError =
    document.getElementById("passwordError");
const loginError =
    document.getElementById("loginError");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    usernameError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";
    const enteredUsername =
        username.value.trim();
    const enteredPassword =
        password.value.trim();
    let valid = true;
    
    if (enteredUsername === "") {
        usernameError.textContent =
            "Username is required";
        valid = false;
    }
     
    if (enteredPassword === "") {
        passwordError.textContent =
            "Password is required";
        valid = false;
    }
    if (!valid) {
        return;
    }
    
    const correctUsername = "mahesh";
    const correctPassword = "12345";
   
    if (
        enteredUsername === correctUsername &&
        enteredPassword === correctPassword
    ) {
    
        localStorage.setItem(
            "username",
            enteredUsername
        );
         
        localStorage.setItem(
            "loggedIn",
            "true"
        );
        
        window.location.href =
            "quiz.html";
    }
    else {
        loginError.textContent =
            "Invalid username or password";
    }
});