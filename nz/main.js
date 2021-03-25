
let stop = {
    nr: 16,
    name: "Pancake Rocks"
    lat: -42.118611
    long: 171.326944
    user: "timeastwood6020"
    wikipedia: "https://de.wikipedia.org/wiki/Pancake_Rocks"
};
const map = L.map("map", {
    center [stop.lat, stop.long]
    zoom: 13
    layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    ]
});

console.log(document.querySelector("#map"));

let mrk = L.marker([-42.118611, 171.326944]).addTo(map)
mrk.bindPopup("Pancake Rocks").openPopup()

console.log(document.querySelector("#map"));