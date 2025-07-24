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
        name: "Tropical Shirt",
        price: "$29.99",
        description: "Fine checkered Tartan.",
        image: "../images/women woven tartan.jpg"
    },
    {
        id: 4,
        name: "Tropical Shirt",
        price: "$59.99",
        description: "Smart Red-White Vintage Shirt for Men",
        image: "../images/vintage-shirts-men-1.jpg"
    },
    {
        id: 5,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Green wool linen.jpg"
    },
    {
        id: 6,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 7,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 8,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 9,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 10,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 11,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
    {
        id: 12,
        name: "Tropical Shirt",
        price: "$39.99",
        description: "A lightweight summer shirt.",
        image: "../images/Tropical Shirt th.jpg"
    },
];

// 2️⃣ Get references to elements on the page
const items = document.querySelectorAll(".gallery-item");
const gallery = document.getElementById("gallery");
const productPage = document.getElementById("product-page");
const backBtn = document.getElementById("back-btn");

// 3️⃣ Loop through gallery items to display name & price, and add click handler
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

// 4️⃣ Handle back to gallery
backBtn.addEventListener("click", () => {
    productPage.classList.add("hidden");
    gallery.classList.remove("hidden");
});

// 5️⃣ Handle Add to Cart
document.getElementById("add-to-cart").addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const qty = document.getElementById("qty").value;
    if (!size) {
        alert("Please select a size.");
        return;
    }
    alert(`Added ${qty} item(s) of size ${size} to cart!`);
});