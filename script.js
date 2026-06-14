function analyzePassword() {

    const password = document.getElementById("password").value;

    let score = 0;
    let details = [];

    if (password.length >= 8) {
        score += 20;
        details.push("✔ Length is at least 8 characters");
    } else {
        details.push("✖ Length should be at least 8 characters");
    }

    if (password.length >= 12) {
        score += 20;
        details.push("✔ Length is 12+ characters");
    }

    if (/[A-Z]/.test(password)) {
        score += 15;
        details.push("✔ Contains uppercase letter");
    } else {
        details.push("✖ Add uppercase letter");
    }

    if (/[a-z]/.test(password)) {
        score += 15;
        details.push("✔ Contains lowercase letter");
    } else {
        details.push("✖ Add lowercase letter");
    }

    if (/[0-9]/.test(password)) {
        score += 15;
        details.push("✔ Contains number");
    } else {
        details.push("✖ Add number");
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score += 15;
        details.push("✔ Contains special character");
    } else {
        details.push("✖ Add special character");
    }

    let strength = "";
    let color = "";

    if (score < 40) {
        strength = "Weak";
        color = "red";
    }
    else if (score < 70) {
        strength = "Medium";
        color = "orange";
    }
    else {
        strength = "Strong";
        color = "green";
    }

    document.getElementById("strengthBar").style.width = score + "%";
    document.getElementById("strengthBar").style.background = color;

    document.getElementById("strengthText").innerHTML =
        `Password Strength: ${strength} (${score}/100)`;

    document.getElementById("details").innerHTML =
        details.join("<br>");

    document.getElementById("suggestions").innerHTML =
        generateSuggestion(password);
}

function generateSuggestion(password) {

    let suggestion = password;

    if (!/[A-Z]/.test(password))
        suggestion += "A";

    if (!/[a-z]/.test(password))
        suggestion += "a";

    if (!/[0-9]/.test(password))
        suggestion += "1";

    if (!/[^A-Za-z0-9]/.test(password))
        suggestion += "@";

    while (suggestion.length < 12)
        suggestion += Math.floor(Math.random() * 10);

    return "Suggested Strong Password: " + suggestion;
}
