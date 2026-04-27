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
        { keyword: "Brownstone High School", link: "html/maps/BrownstoneHighSchool.html", text: "Brownstone High School" },
        { keyword: "Sunny Meadows", link: "html/maps/SunnyMeadows.html", text: "Sunny Meadows" },
        { keyword: "Bleasdale Farmhouse", link: "html/maps/BleasdaleFarmhouse.html", text: "Bleasdale Farmhouse" },
        { keyword: "Maple Lodge Campsite", link: "html/maps/MapleLodgeCampsite.html", text: "Maple Lodge Campsite" },
        { keyword: "Point Hope", link: "html/maps/PointHope.html", text: "Point Hope" },
        { keyword: "Prison", link: "html/maps/Prison.html", text: "Prison" },
        { keyword: "10 Ridgeview Road", link: "html/maps/10RidgeviewRoad.html", text: "10 Ridgeview Road" },
        { keyword: "6 Tanglewood Drive", link: "html/maps/6TanglewoodDrive.html", text: "6 Tanglewood Drive" },
        { keyword: "13 WillowStreet", link: "html/maps/13WillowStreet.html", text: "13 Willow Street" },
        { keyword: "42 Edgefield Road", link: "html/maps/42EdgefieldRoad.html", text: "42 Edgefield Road" },
        { keyword: "Grafton Farmhouse", link: "html/maps/GraftonFarmhouse.html", text: "Grafton Farmhouse" },
        { keyword: "Prokleté zrcadlo", link: "html/cursed_objects/hounted mirror.html", text: "Prokleté zrcadlo" },
        { keyword: "Monkey paw", link: "html/cursed_objects/monkey paw.html", text: "Monkey paw" },
        { keyword: "Music box", link: "html/cursed_objects/music box.html", text: "Music box" },
        { keyword: "Ouija board", link: "html/cursed_objects/ouija board.html", text: "Ouija board" },
        { keyword: "Summoning circle", link: "html/cursed_objects/summoning circle.html", text: "Summoning circle" },
        { keyword: "Voodoo doll", link: "html/cursed_objects/voodoo doll.html", text: "Voodoo doll" },
        { keyword: "Tarot cards", link: "html/cursed_objects/tarot cards.html", text: "Tarot cards" },
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
    
        if (results.length > 0) {
            results.forEach(result => {
                const link = document.createElement("a");
                link.href = result.link;
                link.textContent = result.text;
                link.style.display = "block";
                link.style.color = "white";
                link.style.margin = "5px 0";
                resultsContainer.appendChild(link);
            });
        } else {
            resultsContainer.textContent = "Žádné výsledky.";
        }
        document.addEventListener("DOMContentLoaded", () => {
            const searchInput = document.getElementById("search-input");
        
            if (searchInput) {
                searchInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault(); 
                        search();
                    }
                });
            }
        });
    }