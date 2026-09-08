const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const errorMsg = document.getElementById("errorMsg");

        errorMsg.style.display = "none";

        if (!username || !email || !password || !confirmPassword) {
            errorMsg.textContent = "Please fill in all fields.";
            errorMsg.style.display = "block";
            return;
        }

        if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match.";
            errorMsg.style.display = "block";
            return;
        }

        window.location.href = "index.html";
    });
}