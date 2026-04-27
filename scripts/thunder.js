// Vybereme element body
const body = document.body;

// Funkce pro simulaci blesku
function flashLightning() {
    // Nastavíme bílou barvu pozadí
    body.style.backgroundColor = 'white';

    // Po krátké době vrátíme původní barvu
    setTimeout(() => {
        body.style.backgroundColor = ''; // Původní barva
    }, 100); // Doba trvání blesku (v ms)
}

// Funkce pro náhodné spouštění blesků
function startLightning() {
    setInterval(() => {
        // Náhodné zpoždění mezi blesky (5 až 15 sekund)
        const delay = Math.random() * 10000 + 5000;
        setTimeout(flashLightning, delay);
    }, 10000); // Kontrola každých 10 sekund
}

// Spustíme efekt blesků
startLightning();