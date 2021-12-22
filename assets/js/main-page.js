var bandNameEl = document.querySelector('#name');
var bandImageEl = document.querySelector('#image');
var eventInfoEl = document.querySelector('#event-info');
var bandBioEl = document.querySelector('#band-bio');
var bandInfoURL = 'theaudiodb.com/api/v1/json/2/search.php?s=coldplay'
var artists = [];

// var userInput = document.querySelector('.button');

function getArtistInfo() {
    fetch('https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay') 
    .then(function(response) {
        if(response.ok) {
            response.json()
            .then(function(data) {
                //console.log(data.artists[0].strArtist)
                var bandName = data.artists[0].strArtist
                var bandImage = data.artists[0].strArtistThumb
                var bandBio = data.artists[0].strBiographyEN
                bandNameEl.innerHTML = bandName
                bandImageEl.setAttribute("src", bandImage)
                bandBioEl.innerHTML = bandBio
                console.log(bandImageEl)
                console.log(data)
            })
        }
        else {console.log('error' + response.statusText)}
    })

};

getArtistInfo();