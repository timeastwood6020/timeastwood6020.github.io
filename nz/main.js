let stop = {
    nr: 16,
    name: "Pancake Rocks",
    lat: -42.118611,
    lng: 171.326944,
    user: "timeastwood6020",
    wikipedia: "https://de.wikipedia.org/wiki/Pancake_Rocks",
    
}


const map = L.map("map", {
    // center: [stop.lat, stop.lng],
    // zoom: 13,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    ]
});

let nav = document.querySelector('#navigation');
console.log('Navigation HTML Element: ', nav);
// console.log(ROUTE);

ROUTE.sort((stop1, stop2) => {
    if (stop1.nr > stop2.nr) {
        return 1;
    } else {
        return -1;
    }
});
for (let entry of ROUTE) {
    // console.log(entry);

    nav.innerHTML += `<option value="${entry.user}">Stop ${entry.nr}: ${entry.name}</option>`;
    let mrk = L.marker([entry.lat, entry.lng]).addTo(map);
    mrk.bindPopup(`<h4>Stop ${entry.nr}: ${entry.name}<h4>
<p><a href="${entry.wikipedia}"><i class="fas fa-external-link-alt mr-3"></i>Read about stop in Wikipedia</a></p>
`);

    if (entry.nr == 22) {
        map.setView([entry.lat, entry.lng], 13);
        mrk.openPopup();
    }

}

nav.selectedIndex = 22 - 1;
nav.onchange = (evt) => {
    console.log(evt.target.selectedIndex);
    let selected = evt.target.selectedIndex;
    let options = evt.target.options;

    let username = options[selected].value;
    let link = `https://${timeastwood6020}.github.io/nz/index.html`;
    window.location.href = link;
    console.log(link);
}

console.log(document.querySelector("#map"));


