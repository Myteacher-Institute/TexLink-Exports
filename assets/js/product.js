
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
};

const items = document.querySelectorAll(".gallery-item");
const gallery = document.getElementById("gallery");
const productPage = document.getElementById("product-page");
const backBtn = document.getElementById("back-btn");

items.forEach(item => {
    const id = parseInt(item.dataset.id);
    const product = products.find(p => data-id === id);

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











// const products = [
//     {
//       id: 1,
//       name: "Ankara Wax Print A1",
//       category: "ankara",
//       price: "25.00",
//       image: "images/ankara1.jpg"
//     },
//     {
//       id: 2,
//       name: "Cotton Batik B2",
//       category: "cotton",
//       price: "18.50",
//       image: "images/cotton1.jpg"
//     },
//     {
//       id: 3,
//       name: "Silk Classic C3",
//       category: "silk",
//       price: "35.00",
//       image: "images/silk1.jpg"
//     },
//     {
//       id: 4,
//       name: "Wool Premium W4",
//       category: "wool",
//       price: "40.00",
//       image: "images/wool1.jpg"
//     },
//     {
//       id: 5,
//       name: "Lace Elegance L5",
//       category: "lace",
//       price: "30.00",
//       image: "images/lace1.jpg"
//     },
//     {
//       id: 6,
//       name: "Ankara Royal A6",
//       category: "ankara",
//       price: "27.00",
//       image: "../images/ankara2.jpg"
//     },
//     {
//       id: 7,
//       name: "Cotton Classic C7",
//       category: "cotton",
//       price: "20.00",
//       image: "images/cotton2.jpg"
//     },
//     {
//       id: 8,
//       name: "Silk Deluxe D8",
//       category: "silk",
//       price: "38.00",
//       image: "images/silk2.jpg"
//     },
//     {
//       id: 9,
//       name: "Wool Comfort W9",
//       category: "wool",
//       price: "42.00",
//       image: "images/wool2.jpg"
//     },
//     {
//       id: 10,
//       name: "Lace Fashion L10",
//       category: "lace",
//       price: "32.00",
//       image: "images/lace2.jpg"
//     },
//     {
//       id: 11,
//       name: "Ankara Prestige A11",
//       category: "ankara",
//       price: "29.00",
//       image: "images/ankara3.jpg"
//     },
//     {
//       id: 12,
//       name: "Cotton Fresh C12",
//       category: "cotton",
//       price: "19.00",
//       image: "images/cotton3.jpg"
//     },
//     {
//       id: 13,
//       name: "Silk Pearl S13",
//       category: "silk",
//       price: "34.00",
//       image: "images/silk3.jpg"
//     },
//     {
//       id: 14,
//       name: "Wool Rich W14",
//       category: "wool",
//       price: "45.00",
//       image: "images/wool3.jpg"
//     },
//     {
//       id: 15,
//       name: "Lace Royal L15",
//       category: "lace",
//       price: "36.00",
//       image: "images/lace3.jpg"
//     },
//     {
//       id: 16,
//       name: "Ankara Dazzle A16",
//       category: "ankara",
//       price: "26.00",
//       image: "images/ankara4.jpg"
//     },
//     {
//       id: 17,
//       name: "Cotton Vibe C17",
//       category: "cotton",
//       price: "21.00",
//       image: "images/cotton4.jpg"
//     },
//     {
//       id: 18,
//       name: "Silk Shine S18",
//       category: "silk",
//       price: "33.00",
//       image: "images/silk4.jpg"
//     },
//     {
//       id: 19,
//       name: "Wool Winter W19",
//       category: "wool",
//       price: "44.00",
//       image: "images/wool4.jpg"
//     },
//     {
//       id: 20,
//       name: "Lace Glamour L20",
//       category: "lace",
//       price: "31.00",
//       image: "images/lace4.jpg"
//     },
//     {
//       id: 21,
//       name: "Ankara Flame A21",
//       category: "ankara",
//       price: "28.00",
//       image: "images/ankara5.jpg"
//     },
//     {
//       id: 22,
//       name: "Cotton Bloom C22",
//       category: "cotton",
//       price: "22.00",
//       image: "images/cotton5.jpg"
//     },
//     {
//       id: 23,
//       name: "Silk Rose S23",
//       category: "silk",
//       price: "37.00",
//       image: "images/silk5.jpg"
//     },
//     {
//       id: 24,
//       name: "Wool Luxe W24",
//       category: "wool",
//       price: "47.00",
//       image: "images/wool5.jpg"
//     },
//     {
//       id: 25,
//       name: "Lace Vibe L25",
//       category: "lace",
//       price: "33.00",
//       image: "images/lace5.jpg"
//     },
//     {
//       id: 26,
//       name: "Ankara Splash A26",
//       category: "ankara",
//       price: "24.00",
//       image: "images/ankara6.jpg"
//     },
//     {
//       id: 27,
//       name: "Cotton Supreme C27",
//       category: "cotton",
//       price: "23.00",
//       image: "images/cotton6.jpg"
//     },
//     {
//       id: 28,
//       name: "Silk Velvet S28",
//       category: "silk",
//       price: "39.00",
//       image: "images/silk6.jpg"
//     },
//     {
//       id: 29,
//       name: "Wool Cozy W29",
//       category: "wool",
//       price: "46.00",
//       image: "images/wool6.jpg"
//     },
//     {
//       id: 30,
//       name: "Lace Crown L30",
//       category: "lace",
//       price: "35.00",
//       image: "images/lace6.jpg"
//     }
//   ];
  
//   const productList = document.getElementById('product-list');
//   const cartIcon = document.getElementById('cart-icon');
//   const cartPanel = document.getElementById('cart-panel');
//   const cartCount = document.getElementById('cart-count');
//   const cartItems = document.getElementById('cart-items');
//   const cartTotal = document.getElementById('cart-total');
//   const closeCart = document.getElementById('close-cart');
//   const categoryBar = document.getElementById('category-bar');
  
//   let cart = [];
  
//   function renderProducts(filter = 'all') {
//     productList.innerHTML = '';
//     products
//       .filter(p => filter === 'all' || p.category === filter)
//       .forEach(product => {
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         card.innerHTML = `
//           <img src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <p>$${product.price}</p>
//           <button onclick="addToCart(${product.id})">Add to Cart</button>
//         `;
//         productList.appendChild(card);
//       });
//   }
  
//   function addToCart(id) {
//     const item = products.find(p => p.id === id);
//     cart.push(item);
//     updateCart();
//   }
  
//   function updateCart() {
//     cartItems.innerHTML = '';
//     let total = 0;
//     cart.forEach((item) => {
//       total += parseFloat(item.price);
//       const div = document.createElement('div');
//       div.className = 'cart-item';
//       div.innerHTML = <p>${item.name} - $${item.price}</p>;
//       cartItems.appendChild(div);
//     });
//     cartCount.textContent = cart.length;
//     cartTotal.textContent = $$;{"total".toFixed(2)};
//   }
  
//   cartIcon.onclick = () => cartPanel.classList.remove('hidden');
//   closeCart.onclick = () => cartPanel.classList.add('hidden');
  
//   categoryBar.addEventListener('click', e => {
//     if (e.target.tagName === 'BUTTON') {
//       renderProducts(e.target.dataset.category);
//     }
//   });
  
//   // Initial render
//   renderProducts();