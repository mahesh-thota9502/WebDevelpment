 function updateCartCount() {
    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    const count =
        cart.reduce(
            function(total, product) {
                return total +
                    product.quantity;
            },
            0
        );
    document
        .querySelectorAll(".cart-count")
        .forEach(function(element) {
            element.textContent = count;
        });
}
 
const loginForm =
    document.getElementById(
        "loginForm"
    );
if (loginForm) {
    loginForm.addEventListener(
        "submit",
        function(event) {
            event.preventDefault();
            const email =
                document.getElementById(
                    "email"
                ).value.trim();
            const password =
                document.getElementById(
                    "password"
                ).value.trim();
            const message =
                document.getElementById(
                    "loginMessage"
                );
            if (
                email === "" ||
                password === ""
            ) {
                message.innerHTML = `
                    <div class="alert alert-danger">
                        Please enter email and password.
                    </div>
                `;
                return;
            }
             
            if (
                email === "maheshthota8204@gmail.com" &&
                password === "12345"
            ) {
                localStorage.setItem(
                    "loggedIn",
                    "true"
                );
                message.innerHTML = `
                    <div class="alert alert-success">
                        <i class="bi bi-check-circle"></i>
                        Login successful!
                    </div>
                `;
                setTimeout(function() {
                    window.location.href =
                        "index.html";
                }, 1000);
            } else {
                message.innerHTML = `
                    <div class="alert alert-danger">
                        Invalid email or password.
                        <br>
                        Demo:
                        maheshthota8204@gmail.com / 12345
                    </div>
                `;
            }
        }
    );
}
 
updateCartCount();