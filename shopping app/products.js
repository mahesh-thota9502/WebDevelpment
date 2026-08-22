let products = [];
 
async function fetchProducts() {
    const loading =
        document.getElementById("loading");
    try {
        const response =
            await fetch(
                "https://fakestoreapi.com/products"
            );
        if (!response.ok) {
            throw new Error(
                "Failed to fetch products"
            );
        }
        products = await response.json();
        loading.classList.add("d-none");
        displayProducts(products);
        filterCategory();
    } catch (error) {
        console.error(error);
        loading.innerHTML = `
            <div class="alert alert-danger">
                <i class="bi bi-exclamation-triangle"></i>
                Failed to load products.
            </div>
        `;
    }
}
 
function displayProducts(productList) {
    const container =
        document.getElementById(
            "productContainer"
        );
    const noProducts =
        document.getElementById(
            "noProducts"
        );
    container.innerHTML = "";
    if (productList.length === 0) {
        noProducts.classList.remove(
            "d-none"
        );
        return;
    }
    noProducts.classList.add(
        "d-none"
    );
    productList.forEach(function(product) {
        const col =
            document.createElement("div");
        col.className =
            "col-xl-3 col-lg-4 col-md-6";
        col.innerHTML = `
            <div class="product-card">
                <img
                    src="${product.image}"
                    class="product-image"
                    alt="${product.title}"
                >
                <span class="product-category">
                    ${product.category}
                </span>
                <h5 class="product-title">
                    ${product.title}
                </h5>
                <div class="d-flex justify-content-between">
                    <strong class="product-price">
                        ₹${product.price}
                    </strong>
                    <span>
                        <i class="bi bi-star-fill text-warning"></i>
                        ${product.rating.rate}
                    </span>
                </div>
                <button
                    class="btn btn-primary w-100 mt-3"
                    onclick="addToCart(${product.id})">
                    <i class="bi bi-cart-plus"></i>
                    Add to Cart
                </button>
            </div>
        `;
        container.appendChild(col);
    });
}
 
function addToCart(productId) {
    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    const product =
        products.find(function(item) {
            return item.id === productId;
        });
    if (!product) {
        return;
    }
    const existing =
        cart.find(function(item) {
            return item.id === productId;
        });
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    updateCartCount();
    alert(
        "Product added to cart!"
    );
}
 
document
    .getElementById("searchForm")
    .addEventListener(
        "submit",
        function(event) {
            event.preventDefault();
            const search =
                document
                    .getElementById(
                        "searchInput"
                    )
                    .value
                    .toLowerCase()
                    .trim();
            const filtered =
                products.filter(function(product) {
                    return product.title
                        .toLowerCase()
                        .includes(search);
                });
            displayProducts(filtered);
        }
    );
 
function filterCategory() {
    const params =
        new URLSearchParams(
            window.location.search
        );
    const category =
        params.get("category");
    if (!category) {
        return;
    }
    const filtered =
        products.filter(function(product) {
            return product.category === category;
        });
    displayProducts(filtered);
}
 
fetchProducts();