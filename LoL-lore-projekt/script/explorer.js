const regionLore = {
    demacia: {
        title: "Demacia",
        image: "https://wiki.leagueoflegends.com/en-us/images/Demacia_Hall_Of_Valor.jpg?a6a06",
        description: "<p>Demacia is a powerful, self-sufficient kingdom with a prestigious history rooted in a martial culture. The nation was founded by survivors of the Rune Wars, who sought to build a permanent society where the unpredictable, corrupting power of magic could never again threaten order. Their civilization is founded upon ideals of **justice, honor, and duty**, upheld by a disciplined military and rigid social hierarchy.</p><p>The capital city, also called **Demacia**, is a breathtaking example of this philosophy. It is built around deposits of **Petricite**, a rare, white stone that naturally absorbs magical energy. This stone is incorporated into the city's walls, temples, and even its armor, constantly cleansing the land of arcane influence. While this keeps the kingdom safe, it has also led to deep-seated xenophobia and an absolute fear of magic.</p><h2>The Petricite Crisis</h2><p>Demacia's reliance on Petricite and its crusade against magic has created a great internal conflict. The **Mageseekers**, a powerful order dedicated to hunting down mages (even those born with accidental abilities), have become increasingly radical. The conflict was publicly exposed by the mage **Sylas**, leading to a civil unrest that threatens to shatter the kingdom's unity. The kingdom must now confront its foundational truth: its greatest source of strength (Petricite) and its greatest fear (magic) are intrinsically linked.</p><p class='lore-emphasis'>**Key Lore Themes:** Order vs. Chaos, Tradition vs. Progress, Fear of the Unknown, The Price of Security.</p>"
    },
    noxus: {
        title: "Noxus",
        image: "https://wallpapercave.com/wp/wp9959636.jpg",
        description: "<p>Noxus is a fearsome, rapidly expanding empire built on the philosophy that **strength is everything**. Unlike Demacia's focus on noble bloodlines, Noxian society values capability and ruthlessness above all else. Power can be achieved through intelligence, sheer military might, or magical prowess—as long as you can hold it.</p><p>The empire is governed by the **Triumvirate**, a three-pronged leadership structure representing the core values: **Might (Darius)**, **Vision (Swain)**, and **Guile (A mysterious third member)**. This system allows Noxus to be adaptive and aggressive, swallowing neighboring territories and integrating their people as Noxians, provided they swear loyalty to the empire.</p><h2>The Philosophy of Survival</h2><p>Noxian culture is defined by its simple, brutal maxim: **'Only the strong survive.'** There is no shame in failure, only in refusing to try again. This has fostered a diverse military where individuals from conquered lands are promoted rapidly based on merit, not birthright. This meritocratic system is what makes Noxus so formidable; its citizens are loyal because the empire grants them the opportunity to achieve greatness, provided they have the will to seize it.</p><p>Noxus maintains constant pressure on its borders, notably against Demacia and the city-state of Ionia, constantly testing its military might and psychological resilience. Their capital city is a towering fortress of black iron and red banners, a symbol of their unyielding ambition.</p><p class='lore-emphasis'>**Key Lore Themes:** Meritocracy vs. Nobility, Strength Through Unity, Imperialism, Ambition.</p>",
        champions: [
            { name: "Darius", title: "The Hand of Noxus", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg" },
            { name: "Swain", title: "The Noxian Grand General", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg" },
            { name: "Katarina", title: "The Sinister Blade", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg" },
            { name: "Kled", title: "The Cantankerous Cavalier", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg" },
            { name: "Draven", title: "The Glorious Executioner", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg" },
            { name: "Talon", title: "The Blade's Shadow", img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg" }
        ]
    }
    // Fortsæt selv med de andre regioner...
};

const hotspots = document.querySelectorAll('.hotspot');
const modal = document.getElementById('region-lightbox');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-region-img');
const modalText = document.getElementById('modal-text-content');

// Lyt efter klik på alle hotspots
hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
        const regionKey = spot.getAttribute('data-region');
        const data = regionLore[regionKey];

        if (data) {
            // DOM Manipulation: Opdater modalens indhold
            modalTitle.textContent = data.title;
            modalImg.src = data.image;
            modalText.innerHTML = data.description;

            // KLARGØR CAROUSEL
            activeRegionChamps = data.champions;
            currentChampIdx = 0; // Start forfra hver gang
            updateChampDisplay();

            // CSS Klasse manipulation: Vis modalen
            modal.classList.remove('hidden');
        }
    });
});

// Luk modal ved klik på X
document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.add('hidden');
});


let currentChampIdx = 0;
let activeRegionChamps = [];

function updateChampDisplay() {
    const container = document.getElementById('champ-list-container');
    container.innerHTML = ""; // Tøm containeren først

    // Vi kører en løkke 3 gange for at finde de 3 champions, der skal vises
    for (let i = 0; i < 3; i++) {
        // Vi bruger modulo (%) for at sikre, at hvis der er færre end 3, 
        // eller vi når enden, så starter den forfra (loop)
        let index = (currentChampIdx + i) % activeRegionChamps.length;
        const champ = activeRegionChamps[index];

        // Opret HTML elementer til hver champion
        const champDiv = document.createElement('div');
        champDiv.classList.add('champ-item');
        champDiv.innerHTML = `
            <img src="${champ.img}" alt="${champ.name}">
            <p>${champ.name}</p>
        `;
        container.appendChild(champDiv);
    }
}

// Opdaterede navigation knapper
document.getElementById('next-champ').addEventListener('click', () => {
    // Vi rykker 1 plads frem (man kan også rykke 3, hvis man foretrækker det)
    currentChampIdx = (currentChampIdx + 1) % activeRegionChamps.length;
    updateChampDisplay();
});

document.getElementById('prev-champ').addEventListener('click', () => {
    currentChampIdx = (currentChampIdx - 1 + activeRegionChamps.length) % activeRegionChamps.length;
    updateChampDisplay();
});