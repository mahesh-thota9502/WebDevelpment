function getCart() {
    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];
}
 
function displayCart() {
    const cartItems =
        document.getElementById(
            "cartItems"
        );
    let cart = getCart();
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="bi bi-cart-x"></i>
                <h3>
                    Your cart is empty
                </h3>
                <p>
                    Add products to your cart.
                </p>
                <a
                    href="products.html"
                    class="btn btn-primary">
                    Continue Shopping
                </a>
            </div>
        `;
        document.getElementById(
            "totalItems"
        ).textContent = "0";
        document.getElementById(
            "cartTotal"
        ).textContent = "₹0.00";
        document.getElementById(
            "finalTotal"
        ).textContent = "₹0.00";
        return;
    }
    cartItems.innerHTML = "";
    cart.forEach(function(product) {
        const item =
            document.createElement("div");
        item.className =
            "cart-page-item";
        item.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.title}"
            >
            <div class="cart-page-info">
                <h5>
                    ${product.title}
                </h5>
                <p>
                    ₹${product.price}
                </p>
                <div class="quantity-control">
                    <button
                        onclick="decreaseQuantity(${product.id})">
                        <i class="bi bi-dash"></i>
                    </button>
                    <span>
                        ${product.quantity}
                    </span>
                    <button
                        onclick="increaseQuantity(${product.id})">
                        <i class="bi bi-plus"></i>
                    </button>
                    <button
                        class="btn btn-outline-danger ms-3"
                        onclick="removeProduct(${product.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(item);
    });
    updateSummary();
}
 
function increaseQuantity(id) {
    let cart = getCart();
    const product =
        cart.find(function(item) {
            return item.id === id;
        });
    if (product) {
        product.quantity++;
    }
    saveCart(cart);
}
 
function decreaseQuantity(id) {
    let cart = getCart();
    const product =
        cart.find(function(item) {
            return item.id === id;
        });
    if (!product) {
        return;
    }
    if (product.quantity > 1) {
        product.quantity--;
    } else {
        cart =
            cart.filter(function(item) {
                return item.id !== id;
            });
    }
    saveCart(cart);
}
 
function removeProduct(id) {
    let cart = getCart();
    cart =
        cart.filter(function(item) {
            return item.id !== id;
        });
    saveCart(cart);
}
 
function saveCart(cart) {
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    displayCart();
    updateCartCount();
}
 
function updateSummary() {
    const cart = getCart();
    let totalItems = 0;
    let totalPrice = 0;
    cart.forEach(function(product) {
        totalItems += product.quantity;
        totalPrice +=
            product.price *
            product.quantity;
    });
    document.getElementById(
        "totalItems"
    ).textContent = totalItems;
    document.getElementById(
        "cartTotal"
    ).textContent =
        `₹${totalPrice.toFixed(2)}`;
    document.getElementById(
        "finalTotal"
    ).textContent =
        `₹${totalPrice.toFixed(2)}`;
}

function clearCart() {
    localStorage.removeItem(
        "cart"
    );
    displayCart();
    updateCartCount();
}
 
function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert(
            "Your cart is empty!"
        );
        return;
    }
    alert(
        "Order placed successfully!"
    );
    localStorage.removeItem(
        "cart"
    );
    displayCart();
    updateCartCount();
}

displayCart();