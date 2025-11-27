function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});
