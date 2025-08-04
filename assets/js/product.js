const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active")); // to make the cart section open
console.log(cartClose)
cartClose.addEventListener("click", () => cart.classList.remove("active")); // to make the cart section close
const addCartButtons = document.querySelectorAll(".add-cart"); // to target the add cart button
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addTocart(productBox)
    });
});
const cartContent = document.querySelector(".cart-content");
const addTocart = productBox => {
    const ProductimageBox = productBox.querySelector("img")
    const productImgSrc = productBox.querySelector("img").src
    const productPrice = productBox.querySelector(".price").textContent;
    const productTitle = productBox.querySelector(".product-title").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if (item.textContent === productTitle) {
            alert("This item is already in the cart.");
            return;
        }

    }
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    <img src="${productImgSrc}" class="cart-img">
        <div class="cart-detail">
        <h2 class="cart-product-title">${productTitle}</h2>
        <span class="cart-price">${productPrice}</span>
        <div class="cart-quantity">
            <button id="decreament">-</button>
            <span class="number">1</span>
            <button id="increament">+</button>
        </div>
    </div>
    <i class="fa-solid fa-trash cart-remove"></i>`;
    cartContent.appendChild(cartBox);
    // for the delete button
    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();

        updateTotalPrice();
    });
    // increasing and decreasing
    // increasing and decreasing
    cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".number");
        const decreamentButton = cartBox.querySelector("#decreament");
        let quantity = numberElement.textContent;

        if (event.target.id === "decreament" && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decreamentButton.style.color = "#999";
            }
        } else if (event.target.id === "increament") {
            quantity++;
            decreamentButton.style.color = "#333";
        }

        numberElement.textContent = quantity;

        updateTotalPrice();
    });

    updateTotalPrice();
};
//price
    const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        // cartBoxes.forEach(cartBox =>
        const priceElement = cartBox.querySelector(".cart-price");
            const quantityElement = cartBox.querySelector(".number");
            const price = priceElement.textContent.replace("$", "");
            const quantity = quantityElement.textContent;
            total += parseInt(price) * quantity;
        });
        totalPriceElement.textContent = `$${total}`;


    };
// 1️⃣ Define the product data
const products = [
    {
        id: 1,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 2,
        name: "Urban Hoodie",
        price: "$49.99",
        description: "A cool hoodie for streetwear lovers.",
        image: "../images/Urban Black Hoodie main.jpg"
    },
    {
        id: 3,
        name: "Woven Tartan",
        price: "$29.99",
        description: "Fine checkered Tartan.",
        image: "../images/women woven tartan.jpg"
    },
    {
        id: 4,
        name: "Vintage Men's Shirts",
        price: "$59.99",
        description: "Smart Red-White Vintage Shirt for Men",
        image: "../images/vintage-shirts-men-1.jpg"
    },
    {
        id: 5,
        name: "Green Wool Linen",
        price: "$19.99",
        description: "Green Woll Linen",
        image: "../images/Green wool linen.jpg"
    },
    {
        id: 6,
        name: "Christmas Plaid Dress",
        price: "$39.99",
        description: "Plaid Dress for the Holidays",
        image: "../images/plaid christmas dress.jpg"
    },
    {
        id: 7,
        name: "Red Silk Fabric",
        price: "$39.99",
        description: "Red Silk Fabric",
        image: "../images/Red silk fabric.jpg"
    },
    {
        id: 8,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "Blue Cardigan Set",
        image: "../images/product 33.jpg"
    },
    {
        id: 9,
        name: "Navy Plaid Gown",
        price: "$45.50",
        description: "Women Navy Plaid Gown",
        image: "../images/women navy plaid gown.jpg"
    },
    {
        id: 10,
        name: "Pearl Blush Fabric",
        price: "$12.43",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 11,
        name: "Men's Senator",
        price: "$16.00",
        description: "Nice Men Senator.",
        image: "../images/Nice men senator.jpg"
    },
];

const items = document.querySelectorAll(".gallery-item");
const gallery = document.getElementById("gallery");
const productPage = document.getElementById("product-page");
const backBtn = document.getElementById("back-btn");

items.forEach(item => {
    const id = parseInt(item.dataset.id);
    const product = products.find(p => p.id === id);

    if (product) {
        item.querySelector(".product-name").textContent = product.name;
        item.querySelector(".product-price").textContent = product.price;

        // ✅ Show product detail on click
        item.addEventListener("click", () => {
            document.getElementById("product-title").textContent = product.name;
            document.getElementById("product-price").textContent = product.price;
            document.getElementById("product-description").textContent = product.description;
            document.getElementById("main-img").src = product.image;

            gallery.classList.add("hidden");
            productPage.classList.remove("hidden");
        });
    }
});

backBtn.addEventListener("click", () => {
    productPage.classList.add("hidden");
    gallery.classList.remove("hidden");
});

document.getElementById("add-to-cart").addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const qty = document.getElementById("qty").value;
    if (!size) {
        alert("Please select a size.");
        return;
    }
    alert(`Added ${qty} item(s) of size ${size} to cart!`);
});