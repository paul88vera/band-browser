var bandNameEl = document.querySelector('#name');
var bandImageEl = document.querySelector('#image');
var eventInfoEl = document.querySelector('.event-info');
var bandBioEl = document.querySelector('#band-bio p');
var bandInfoURL = 'https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay'
var artists = []

// var userInput = document.querySelector('.button');

function getArtistInfo() {
    fetch(bandInfoURL) 
    .then(function(response) {
        if(response.ok) {
            response.json()
            .then(function(data) {
                var bandName = data.artists[0].strArtist
                var bandImage = data.artists[0].strArtistThumb
                var bandBio = data.artists[0].strBiographyEN
                bandNameEl.innerHTML = bandName
                bandImageEl.setAttribute('src', bandImage)
                bandBioEl.innerHTML = bandBio
            })
        }
        else {console.log('error' + response.statusText)}
    });
};

function getEventInfo() {
    var tixAPI = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=GaTAMAKytFLtlNib0wnQuqnwmT0iMzXy'
    fetch(tixAPI)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data)
        })
    })
};

getArtistInfo();

getEventInfo();