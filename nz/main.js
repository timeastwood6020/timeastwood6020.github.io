
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

let nav = document.querySelector("#navigation");
console.log(nav);

ROUTE.sort((stop1, stop2) =>{
    return.stop1.nr > stop2.nr
});



console.log(document.querySelector("#map"));
for (let entry of ROUTE){
    console.log(entry);

    nav.innerHTML +=
    <option value="${entry.user}">Stop</option>
let mrk = L.marker([stop.lat, stop.lng]).addTo(map);
mrk.bindPopup("
<h4>Stop ${stop.nr}: ${stop.name}</h4>
<p><a href="${stop.wikipedia}">Read about Stop in Wikipedia</a></p>
);
if (entry.nr==16) {
    map.setView([entry.lat, entry.lng],13)
    mrk.openPopup();
}
}

console.log(document.querySelector("#map"));

nav.onchange = (evt) =>{
    let selected = evt.target.selectedIndex;
    let options = evt.target.options
    let value = options[selected].value;
    let link= "https://${username}.github.io//nz/index.html;
    console.log(username, link);
};
