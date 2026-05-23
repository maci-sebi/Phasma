const evidenceToGhost = {
    emf: ["poltergeist", "phantom", "banshee", "mare", "revenant", "demon", "yurei", "yokai", "hantu", "onryo", "the-mimic", "moroi", "deogen", "thaye"],
    ultraviolet: ["spirit", "wraith", "mare", "revenant", "shade", "yurei", "oni", "yokai", "onryo", "the-twins", "raiju", "moroi", "deogen", "thaye"],
    "ghost-writing": ["wraith", "phantom", "banshee", "jinn", "yurei", "oni", "yokai", "hantu", "goryo", "onryo", "the-twins", "raiju", "obake", "the-mimic"],
    freezing: ["spirit", "wraith", "phantom", "poltergeist", "banshee", "mare", "yokai", "goryo", "myling", "raiju", "obake", "deogen", "thaye"],
    dots: ["spirit", "jinn", "demon", "poltergeist", "hantu", "mare", "revenant", "shade", "onryo", "the-twins", "myling", "moroi", "obake", "the-mimic"],
    "ghost-orb": ["spirit", "wraith", "phantom", "poltergeist", "jinn", "shade", "demon", "oni", "myling", "goryo", "moroi", "the-twins", "deogen"],
    "spirit-box": ["banshee", "jinn", "revenant", "shade", "demon", "yurei", "oni", "hantu", "goryo", "myling", "raiju", "obake", "thaye"]
};

function updateGhosts() {
    document.querySelectorAll(".ghost-list a").forEach(ghost => {
        ghost.classList.remove("crossed-out");
    });

    // Poté projdeme všechny zaškrtnuté checkboxy
    document.querySelectorAll(".evidence-list input[type='checkbox']:checked").forEach(checkbox => {
        const evidence = checkbox.dataset.evidence; 
        const ghostsToCrossOut = evidenceToGhost[evidence]; 

        ghostsToCrossOut.forEach(ghostName => {
            const ghostElement = document.querySelector(`[data-ghost="${ghostName}"]`);
            if (ghostElement) {
                ghostElement.classList.add("crossed-out");
            }
        });
    });
}


document.querySelectorAll(".evidence-list input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", updateGhosts);
});


