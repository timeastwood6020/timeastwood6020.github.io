

const map = L.map("map", {
    center [-42.118611, 171.326944]
    zoom: 13
    layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    ]
});

console.log(document.querySelector("#map"));

let mrk = L.marker([-42.118611, 171.326944]).addTo(map)
mrk.bindPopup("Pancake Rocks").openPopup()

console.log(document.querySelector("#map"));