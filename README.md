# Nexus Mods Clone - The Bootleg Edition

## What's This?
Ever looked at Nexus Mods and thought, *"Wow, this could be easier to read and navigate"*? No? Well, I did, and here we are. This is my **unofficial, totally-not-a-carbon-copy, reimagined** version of Nexus Mods. It's not perfect, but hey, neither was Skyrim at launch.

---

## The Bootstrap Buffet 🍽️
I went all out and threw in some **Bootstrap components** to make things look snazzy:

- **Navbar:** Keeps things organized so you can pretend you know where you're going.
- **Hero Section:** Big ol' banner screaming at you to check out mods.
- **Cards:** Because everything looks fancier when you slap it inside a card.
- **Tables:** Gotta keep track of those *trending* mods somehow.
- **Forms:** Sign up for mod updates (or just ignore it like we all do with newsletters).
- **Footer:** A humble disclaimer that this is *just a draft* and not a Nexus Mods conspiracy.

---

## JavaScript Shenanigans 🤖
I sprinkled in some **JavaScript magic** to simulate things that may one day work (if I ever feel like it):

### 1. Email Validation (`validateEmail(email)`)
- Checks if an email has '@' and '.' because, y'know, that's important.
- **Future Use:** Prevents you from signing up with *notarealemail*.

### 2. Random Featured Mod Selector (`getRandomMod()`)
- Picks a random mod from my highly curated (aka, completely random) list.
- **Future Use:** Could dynamically feature real mods if this ever goes pro.

### 3. Total Mod Downloads Calculator (`getTotalDownloads()`)
- Adds up fake download numbers to make things look legit.
- **Future Use:** Could pull real stats, but that requires effort.

### 4. User Feedback Collector (`addFeedback(comment)`)
- Saves your rants and praises in an array.
- **Future Use:** Would be cool if I stored this somewhere permanent. Maybe next update.

### 5. Personalized Greetings (`greetUser(username)`)
- Pretends to care about who you are by greeting you by name.
- **Future Use:** Would be nice if this remembered you, unlike my goldfish-like attention span.

---

## Disclaimer About Images 🖼️
All images used here are **randomly sourced from Google** and are purely for **design purposes**. This is *not* an attempt to violate copyright. We all know how **Nintendo** can get and I don't want a **Palworld** situatuion on my hands. If this ever becomes something real, I’d swap them out for legally acquired assets. **Please don’t sue me.** 😅

---

## How to View This Masterpiece 🖼️
1. Open `index.html` in a browser (yes, it's that easy!).
2. Use **VS Code Live Server** if you’re feeling fancy.
3. Or, spin up a Python server with:
   ```sh
   python -m http.server 8000
