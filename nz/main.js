
let stop = {
    nr: 16,
    name: "Pancake Rocks",
    lat: -42.118611,
    long: 171.326944,
    user: "timeastwood6020",
    wikipedia: "https://de.wikipedia.org/wiki/Pancake_Rocks",
};
const map = L.map("map", {
    center [stop.lat, stop.lng]
    zoom: 13
    layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    ]
});

console.log(document.querySelector("#map"));
for (let entry of ROUTE){
    console.log(entry);
let mrk = L.marker([stop.lat, stop.lng]).addTo(map);
mrk.bindPopup("
<h4>Stop ${stop.nr}: ${stop.name}</h4>
<p><a href="${stop.wikipedia}">Read about Stop in Wikipedia</a></p>
).openPopup();
}

console.log(document.querySelector("#map"));