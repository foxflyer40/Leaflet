

let mymap = L.map('map').setView([44.389, -73.231], 13);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap)

let marker = L.marker([44.380710, -73.238123]).addTo(mymap);

// let circle = L.circle([44.380710, -73.238123], {
// 	color: 'green',
// 	fillColor: 'green',
// 	fillOpacity: 0.1,
// 	radius: 2000
// }).addTo(mymap);

marker.bindPopup("<b>Hello!</b><br>I live here.").openPopup();
//circle.bindPopup("We sometimes walk here.");

let popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}

mymap.on('click', onMapClick);

async function getLatLon(address) {

	fetch(`https://nominatim.openstreetmap.org/search/?q=${address}&format=json`)
		.then((data) => {
			return data.json()
		})
		.then((locationInfo) => {
			let info = locationInfo[0]
			let lat = info.lat
			let lon = info.lon
			L.marker([lat, lon]).addTo(mymap)
		})
}

getLatLon('1090 Mount Philo Road shelburne vt')
getLatLon('9400 north road hinesburg vt')




