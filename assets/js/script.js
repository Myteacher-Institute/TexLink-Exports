let bars = document.querySelector("bars");

bars.addEventListener("click", function() {
    const nav = document.querySelector("nav");
        nav.style.display = "block";
        bars.style.display = "none";
})

close.addEventListener("click", function() {
    const  nav = document.querySelector("nav");
    nav.style.display = "none";
    bars.style.display = "block";

})