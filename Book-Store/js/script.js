// Search Button

const continueBtn = document.querySelector(".continue-btn");

continueBtn.addEventListener("click", () => {

    const inputValue = document.querySelector(".form-control").value;

    if (inputValue === "") {
        alert("Please enter a location!");
    } else {
        alert(`Searching for: ${inputValue}`);
    }
});

// Join Course Buttons

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Course Joined Successfully!");
    });

});

// Testimonial Card Hover Effect

const testimonialCards = document.querySelectorAll(".testimonial-card");

testimonialCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";
    });

});
// Newsletter Form Submit

const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const emailInput = newsletterForm.querySelector("input");

    if (emailInput.value === "") {

        alert("Please enter your email address!");

    } else {

        alert("Subscribed Successfully!");

        emailInput.value = "";
    }

});

// Teacher Card Hover Animation

const teacherCards = document.querySelectorAll(".teacher-card");

teacherCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";
    });

});
// Footer Link Hover Animation

const footerLinks = document.querySelectorAll(".footer-links a");

footerLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateX(5px)";
        link.style.display = "inline-block";
    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateX(0px)";
    });

});

// Current Year Auto Update

const footerBottom = document.querySelector(".footer-bottom p");

const currentYear = new Date().getFullYear();

footerBottom.innerHTML = `
    BookStore All Right Reserved, ${currentYear}
`;