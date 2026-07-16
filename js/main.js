document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".icon");
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + 40 + "px";
                answer.style.paddingBottom = "20px";
                icon.textContent = "−";
            } else {
                answer.style.maxHeight = "0";
                answer.style.paddingBottom = "0";
                icon.textContent = "+";
            }
        });
    });
});
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("mobile-open");
});
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("mobile-open");
    });
});