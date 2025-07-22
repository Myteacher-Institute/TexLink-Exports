const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
console.log(cartClose)
cartClose.addEventListener("click", () => cart.classList.remove("active"));
const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addTocart(productBox)
    });
});
const cartContent = document.querySelector(".cart-content");
const addTocart = productBox => {
    // const ProductimageBox = productBox.querySelector("img")  
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

    cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".number");
        const decreamentButton = cartBox.querySelector("#decreament");
        let quantity = numberElement.textContent;

        if (event.target.id === "decreament" && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decreamentButton.computedStyleMap.color = "#999";
            }
        } else if (event.target.id === "increament") {
            quantity++;
            decreamentButton.computedStyleMap.color = "#333";
        }

        numberElement.textContent = quantity;

        updateTotalPrice();
    });

    updateTotalPrice();
}

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelector(".cart-box");
    let total = 0;
    cartBoxes.array.forEach(element => {
        
    });(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("$", "");
        total += price * quantity;
    });
    totalPriceElement.textContent = `$(total)`;
};
