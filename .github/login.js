// Vorab definierte Benutzer
const users = {
    "P1": { password: "P1", sheet: "sheet1.html" },
    "P2": { password: "P2", sheet: "sheet2.html" },
    "GM": { password: "GM", sheet: "master.html" }
};

// Login-Logik
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        // Weiterleitung zur zugehörigen Seite
        window.location.href = users[username].sheet;
    } else {
        document.getElementById("error").style.display = "block";
    }
});
