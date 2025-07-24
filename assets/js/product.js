// Sample product data
const products = [
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["../assets/images/Tropical Shirt main.jpg", 
                "../assets/images/Tropical Shirt th", 
                "../assets/images/Tropical Shirt th2"]
    },
    {
        id: 2,
        name: "Urban Black Hoodie",
        price: "$59.99",
        description: "Premium cotton hoodie for streetwear lovers.",
        images: ["../assets/images/Urban Black Hoodie main.jpg", 
                "../assets/images/Urban hoodie th (F).jpg", 
                "../assets/images/Urban White Hoodie.jpg"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
    {
        id: 1,
        name: "Tropical Print Shirt",
        price: "$39.99",
        description: "A lightweight tropical shirt, perfect for summer.",
        images: ["images/Tropical Shirt main.jpg", "images/Tropical Shirt th", "images/Tropical Shirt th2"]
    },
];

// DOM Elements
const gallery = document.getElementById("gallery");
const productPage = document.getElementById("product-page");
const backBtn = document.getElementById("back-btn");

// Product Page Elements
const mainImg = document.getElementById("main-img");
const thumbnails = document.getElementById("thumbnails");
const titleEl = document.getElementById("product-title");
const priceEl = document.getElementById("product-price");
const descEl = document.getElementById("product-description");

// Load gallery
products.forEach((product, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    item.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    item.addEventListener("click", () => showProduct(index));
    gallery.appendChild(item);
});

// Show product details
function showProduct(index) {
    const product = products[index];
    gallery.classList.add("hidden");
    productPage.classList.remove("hidden");

    // Load product info
    titleEl.textContent = product.name;
    priceEl.textContent = product.price;
    descEl.textContent = product.description;
    mainImg.src = product.images[0];

    // Load thumbnails
    thumbnails.innerHTML = "";
    product.images.forEach((imgSrc) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.classList.add("thumb");
        thumb.addEventListener("click", () => {
            mainImg.src = imgSrc;
        });
        thumbnails.appendChild(thumb);
    });
}

// Back to gallery
backBtn.addEventListener("click", () => {
    productPage.classList.add("hidden");
    gallery.classList.remove("hidden");
});

// Add to cart action
document.getElementById("add-to-cart").addEventListener("click", () => {
    const size = document.getElementById("size").value;
    const qty = document.getElementById("qty").value;
    if (!size) {
        alert("Please select a size.");
        return;
    }
    alert(`Added ${qty} item(s) of size ${size} to cart!`);
});