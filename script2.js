// Spieler-Statistiken
let maxHP = 100;
let currentHP = 100;

let maxMana = 50;
let currentMana = 50;

// Elemente abrufen
const hpBar = document.getElementById("hp-bar");
const manaBar = document.getElementById("mana-bar");
const hpText = document.getElementById("hp-text");
const manaText = document.getElementById("mana-text");

// Funktion zum Aktualisieren der Balken
function updateBars() {
    let hpPercentage = (currentHP / maxHP) * 100;
    let manaPercentage = (currentMana / maxMana) * 100;

    hpBar.style.width = hpPercentage + "%";
    manaBar.style.width = manaPercentage + "%";

    hpText.textContent = `${currentHP} / ${maxHP}`;
    manaText.textContent = `${currentMana} / ${maxMana}`;
}

// Funktionen zum Verändern der Werte
function takeDamage(amount) {
    currentHP = Math.max(0, currentHP - amount);
    updateBars();
}

function heal(amount) {
    currentHP = Math.min(maxHP, currentHP + amount);
    updateBars();
}

function useMana(amount) {
    currentMana = Math.max(0, currentMana - amount);
    updateBars();
}

function restoreMana(amount) {
    currentMana = Math.min(maxMana, currentMana + amount);
    updateBars();
}

// Startwerte setzen
updateBars();
