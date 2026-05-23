document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain");
    const dropCount = 300;

    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDelay = Math.random() * 2 + "s";
        drop.style.animationDuration = 0.5 + Math.random() * 1 + "s";
        rainContainer.appendChild(drop);
    }
});
const searchData = [
    { keyword: "duchové", link: "html/ghosts/home-ghosts.html", text: "Duchové" },
    { keyword: "mapy", link: "html/maps/home-maps.html", text: "Mapy" },
    { keyword: "prokleté předměty", link: "html/cursed_objects/home-cursed-objects.html", text: "Prokleté předměty" },
    { keyword: "Jinn", link: "html/ghosts/Jinn.html", text: "Jinn" },
    { keyword: "Mare", link: "html/ghosts/Mare.html", text: "Mare" },
    { keyword: "Moroi", link: "html/ghosts/Moroi.html", text: "Moroi" },
    { keyword: "Myling", link: "html/ghosts/Myling.html", text: "Myling" },
    { keyword: "Obake", link: "html/ghosts/Obake.html", text: "Obake" },
    { keyword: "Oni", link: "html/ghosts/Oni.html", text: "Oni" },
    { keyword: "Onryo", link: "html/ghosts/Onryo.html", text: "Onryo" },
    { keyword: "Phantom", link: "html/ghosts/Phantom.html", text: "Phantom" },
    { keyword: "Poltergeist", link: "html/ghosts/Poltergeist.html", text: "Poltergeist" },
    { keyword: "Raiju", link: "html/ghosts/Raiju.html", text: "Raiju" },
    { keyword: "Revenant", link: "html/ghosts/Revenant.html", text: "Revenant" },
    { keyword: "Shade", link: "html/ghosts/Shade.html", text: "Shade" },
    { keyword: "Spirit", link: "html/ghosts/Spirit.html", text: "Spirit" },
    { keyword: "Thaye", link: "html/ghosts/Thaye.html", text: "Thaye" },
    { keyword: "The Mimic", link: "html/ghosts/TheMimic.html", text: "The Mimic" },
    { keyword: "The Twins", link: "html/ghosts/TheTwins.html", text: "The Twins" },
    { keyword: "Wraith", link: "html/ghosts/Wraith.html", text: "Wraith" },
    { keyword: "Yokai", link: "html/ghosts/Yokai.html", text: "Yokai" },
    { keyword: "Yurei", link: "html/ghosts/Yurei.html", text: "Yurei" },
    // Mapy
    { keyword: "Brownstone High School", link: "html/maps/large/BrownstoneHighSchool.html", text: "Brownstone High School" },
    { keyword: "Sunny Meadows", link: "html/maps/large/SunnyMeadows.html", text: "Sunny Meadows" },
    { keyword: "Bleasdale Farmhouse", link: "html/maps/medium/BleasdaleFarmhouse.html", text: "Bleasdale Farmhouse" },
    { keyword: "Maple Lodge Campsite", link: "html/maps/medium/MapleLodgeCampsite.html", text: "Maple Lodge Campsite" },
    { keyword: "Point Hope", link: "html/maps/medium/PointHope.html", text: "Point Hope" },
    { keyword: "Prison", link: "html/maps/medium/Prison.html", text: "Prison" },
    { keyword: "Sunny Meadows restricted", link: "html/maps/medium/SunnyMeadowsRe.html", text: "Sunny Meadows restricted" },
    { keyword: "10 Ridgeview Road", link: "html/maps/small/10RidgeviewRoad.html", text: "10 Ridgeview Road" },
    { keyword: "6 Tanglewood Drive", link: "html/maps/small/6TanglewoodDrive.html", text: "6 Tanglewood Drive" },
    { keyword: "Nells Diner", link: "html/maps/small/NellsDiner.html", text: "Nells Diner" },
    { keyword: "13 WillowStreet", link: "html/maps/small/13WillowStreet.html", text: "13 Willow Street" },
    { keyword: "42 Edgefield Road", link: "html/maps/small/42EdgefieldRoad.html", text: "42 Edgefield Road" },
    { keyword: "Grafton Farmhouse", link: "html/maps/small/GraftonFarmhouse.html", text: "Grafton Farmhouse" },
    // Prokleté předměty 
    { keyword: "Prokleté zrcadlo", link: "html/cursed_objects/hounted mirror.html", text: "Prokleté zrcadlo" },
    { keyword: "Monkey paw", link: "html/cursed_objects/monkey paw.html", text: "Monkey paw" },
    { keyword: "Music box", link: "html/cursed_objects/music box.html", text: "Music box" },
    { keyword: "Ouija board", link: "html/cursed_objects/ouija board.html", text: "Ouija board" },
    { keyword: "Summoning circle", link: "html/cursed_objects/summoning circle.html", text: "Summoning circle" },
    { keyword: "Voodoo doll", link: "html/cursed_objects/voodoo doll.html", text: "Voodoo doll" },
    { keyword: "Tarot cards", link: "html/cursed_objects/tarot cards.html", text: "Tarot cards" },
    // Vybavení (Equipment)
    { keyword: "Krucifix", link: "html/equipment/crucifix.html", text: "Krucifix" },
    { keyword: "D.O.T.S. Projektor", link: "html/equipment/dots.html", text: "D.O.T.S. Projektor" },
    { keyword: "EMF Čtečka", link: "html/equipment/emf.html", text: "EMF Čtečka (EMF Reader)" },
    { keyword: "Svíčka", link: "html/equipment/firelight.html", text: "Svíčka / Světlo (Firelight)" },
    { keyword: "Baterka", link: "html/equipment/flashlight.html", text: "Baterka (Flashlight)" },
    { keyword: "Kniha duchů", link: "html/equipment/ghostbook.html", text: "Kniha duchů (Ghost Writing Book)" },
    { keyword: "Kamera na hlavu", link: "html/equipment/headgear.html", text: "Kamera na hlavu (Head Gear)" },
    { keyword: "Zapalovač", link: "html/equipment/ignighter.html", text: "Zapalovač (Igniter)" },
    { keyword: "Kouřidlo", link: "html/equipment/incense.html", text: "Kouřidlo (Incense)" },
    { keyword: "Pohybový senzor", link: "html/equipment/motionsensor.html", text: "Pohybový senzor (Motion Sensor)" },
    { keyword: "Fotoaparát", link: "html/equipment/photocam.html", text: "Fotoaparát (Photo Camera)" },
    { keyword: "Parabolický mikrofon", link: "html/equipment/pmic.html", text: "Parabolický mikrofon" },
    { keyword: "Sůl", link: "html/equipment/salt.html", text: "Sůl (Salt)" },
    { keyword: "Léky na příčetnost", link: "html/equipment/sanitymed.html", text: "Léky na příčetnost (Sanity Medication)" },
    { keyword: "Záznamník zvuku", link: "html/equipment/soundrec.html", text: "Záznamník zvuku (Sound Recorder)" },
    { keyword: "Zvukový senzor", link: "html/equipment/soundsens.html", text: "Zvukový senzor (Sound Sensor)" },
    { keyword: "Spirit Box", link: "html/equipment/spiritbox.html", text: "Spirit Box" },
    { keyword: "Teploměr", link: "html/equipment/thrmometr.html", text: "Teploměr (Thermometer)" },
    { keyword: "Stativ", link: "html/equipment/tripod.html", text: "Stativ (Tripod)" },
    { keyword: "UV Světlo", link: "html/equipment/uv.html", text: "UV Světlo (UV Light)" },
    { keyword: "Videokamera", link: "html/equipment/videocam.html", text: "Videokamera (Video Camera)" }
];

function search() {
    const input = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    if (input === "") {
        return;
    }

    const results = searchData.filter(item => {
        const keyword = item.keyword || item.Keyword;
        return keyword.toLowerCase().includes(input);
    });

    // Určení relativní cesty k hlavnímu adresáři projektu
    let pathPrefix = "";
    const pathParts = window.location.pathname.split('/');
    const htmlIndex = pathParts.indexOf("html");
    if (htmlIndex !== -1) {
        const depth = pathParts.length - 1 - htmlIndex;
        pathPrefix = "../".repeat(depth);
    }

    if (results.length > 0) {
        results.forEach(result => {
            const link = document.createElement("a");
            link.href = pathPrefix + result.link;
            link.textContent = result.text;
            resultsContainer.appendChild(link);
        });
    } else {
        const noRes = document.createElement("div");
        noRes.classList.add("no-results");
        noRes.textContent = "Žádné výsledky.";
        resultsContainer.appendChild(noRes);
    }
}

// Registrace událostí pro vyhledávání
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        // Live vyhledávání při psaní
        searchInput.addEventListener("input", search);

        // Zamezení chování Enter klávesy
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
    }
});