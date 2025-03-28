// Toggle menu for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Highlight active page in the navigation
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll(".nav-links a");

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active-link");
        }
    });
});
function searchCourses() {
    let input = document.getElementById("searchBar").value.toLowerCase().trim();
    let courses = document.querySelectorAll(".course");

    courses.forEach(course => {
        let title = course.querySelector("h3").innerText.toLowerCase();
        if (title.includes(input)) {
            course.style.display = "block"; // Show matching courses
        } else {
            course.style.display = "none";  // Hide non-matching courses
        }
    });
}
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
document.getElementById("getintouchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Simulate sending message
    document.getElementById("responseMessage").style.display = "block";

    // Optional: Clear form after submission
    document.getElementById("getintouchForm").reset();
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const contactForm = document.getElementById("contact-form");
    const thankYou = document.getElementById("thank-you");

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                contactForm.style.display = "none";
                thankYou.style.display = "block";
            }
        })
        .catch(error => console.error("Error:", error));
    });

    // Function to show form again
    window.showForm = function () {
        form.reset();
        contactForm.style.display = "block";
        thankYou.style.display = "none";
    };

    // Toggle menu for mobile
    window.toggleMenu = function () {
        let nav = document.querySelector(".nav-links");
        nav.classList.toggle("active");
    };
});

