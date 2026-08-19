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
    // Clear previous errors
    usernameError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";
    const enteredUsername =
        username.value.trim();
    const enteredPassword =
        password.value.trim();
    let valid = true;
    // Username validation
    if (enteredUsername === "") {
        usernameError.textContent =
            "Username is required";
        valid = false;
    }
    // Password validation
    if (enteredPassword === "") {
        passwordError.textContent =
            "Password is required";
        valid = false;
    }
    if (!valid) {
        return;
    }
    // Demo credentials
    const correctUsername = "mahesh";
    const correctPassword = "12345";
    // Check credentials
    if (
        enteredUsername === correctUsername &&
        enteredPassword === correctPassword
    ) {
        // Save username
        localStorage.setItem(
            "username",
            enteredUsername
        );
        // Login status
        localStorage.setItem(
            "loggedIn",
            "true"
        );
        // Go to quiz
        window.location.href =
            "quiz.html";
    }
    else {
        loginError.textContent =
            "Invalid username or password";
    }
});