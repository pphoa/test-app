console.log('Client-side code running');
// LOCAL USE:
//const myURL = "http://localhost:3000";

// STUDENT 04 use:
const myURL = "http://student04.cse.nd.edu:51034";

const compButton = document.getElementById('compButton');
compButton.addEventListener('click', function(e) {
  console.log('Compare button was clicked');
  location.href = myURL.concat("/comp")
});

const mapButton = document.getElementById('mapButton');
mapButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/map");
});

const earthButton = document.getElementById('earthButton');
earthButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/");
});

const vanuButton = document.getElementById('vanuButton');
vanuButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/vanuatu")
});

const luciaButton = document.getElementById('luciaButton');
luciaButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/lucia")
});

const seyButton = document.getElementById('seyButton');
seyButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/seychelles") ;
});

const alandButton = document.getElementById('alandButton');
alandButton.addEventListener('click', function(e) {
  location.href = myURL.concat("/aland");
});

// Country/Island locations
   var lucia = {
     lat: 13.8250489,
   	 lng: -60.975036
   };
   var aland = {
     lat: 60.1603621,
   	 lng:  20.0831786
   };   
   var vanuatu = {
     lat: -16.5255069,
   	 lng: 168.1069154
   };   
   var seychelles = {
     lat: -4.6574977,
   	 lng: 55.4540146
   };

   var dc = {
     lat: 38.897957,
     lng: -77.036560
   };

var map;

function initMap() {
   
   var map = new google.maps.Map(document.getElementById('map'), {
   center: dc,
   zoom: 3,
   mapTypeId: 'satellite'
   });

   var marker = new google.maps.Marker({
	 position: lucia,
	 animation: google.maps.Animation.DROP,
	 label: { color: '#00ffff', fontWeight: 'bold', fontSize: '10px', text: 'St. Lucia' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: aland,
     animation: google.maps.Animation.DROP,
     label: { color: '#ffae00', fontWeight: 'bold', fontSize: '10px', text: 'Aland Islands' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: vanuatu,
     animation: google.maps.Animation.DROP,
     label: { color: '#00ff60', fontWeight: 'bold', fontSize: '10px', text: 'Vanuatu' },
     map: map
   });
   var marker = new google.maps.Marker({
     position: seychelles,
     animation: google.maps.Animation.DROP,
     label: { color: '#1300ff', fontWeight: 'bold', fontSize: '10px', text: 'Seychelles' },
     map: map
   });

   marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

