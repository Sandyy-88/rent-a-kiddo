
const kiddos = [
    {
        name: "Laddu",
        age: 5,
        funFact: "Bas Laddu Khata hai",
        image: "kid1.jpg"
    },
    {
        name: "Laila",
        age: 6,
        funFact: "18 Ghante Soti hai",
        image: "kid2.jpg"
    },
    {
        name: "Babu",
        age: 4,
        funFact: "Khana Nahi khata",
        image: "kid3.jpg"
    }
];

function displayKiddos() {
    const childList = document.getElementById("child-list");
    kiddos.forEach(kiddo => {
        const card = document.createElement("div");
        card.className = "child-card";

        card.innerHTML = `
            <img src="${kiddo.image}" alt="${kiddo.name}" />
            <h2>${kiddo.name}</h2>
            <p>Age: ${kiddo.age}</p>
            <p>Fun Fact: ${kiddo.funFact}</p>
            <button class="rent-button" onclick="rentKiddo('${kiddo.name}')">Rent this Kiddo</button>
        `;

        childList.appendChild(card);
    });
}

function rentKiddo(name) {
    alert(`😂 LOL! You tried to rent ${name}! This is just a parody site!`);
}

displayKiddos();
