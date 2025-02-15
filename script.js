// script.js

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

const mods = ["Enhanced Graphics", "Unlimited Money", "Better AI", "Immersive Weapons", "Realistic Weather"];
function getRandomMod() {
    const index = Math.floor(Math.random() * mods.length);
    return mods[index];
}

const downloads = [50000, 30000, 15000, 20000, 10000];
function getTotalDownloads() {
    return downloads.reduce((total, num) => total + num, 0);
}

let feedback = [];
function addFeedback(comment) {
    feedback.push(comment);
    return feedback;
}

function greetUser(username) {
    return `Welcome back, ${username}!`;
}

console.log(validateEmail("test@nexusmods.com")); // true
console.log(`Featured mod: ${getRandomMod()}`);
console.log(`Total downloads: ${getTotalDownloads()}`);
console.log(addFeedback("Awesome mods!"));
console.log(greetUser("Alex"));
