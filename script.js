// --- Part 1: Event Handling ---
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", () => {
    message.textContent = "Hello Boss 😎, you clicked the button!";
});

// --- Part 2a: Dark Mode Toggle ---
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// --- Part 2b: Counter ---
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

// --- Part 3: Form Validation ---
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop reload
    let valid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passError").textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById("passError").textContent = "";
    }

    // If valid
    if (valid) {
        document.getElementById("success").textContent = "Form submitted successfully! ✅";
    }
});
