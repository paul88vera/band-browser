var bandName = document.querySelector('.band-name');
var bandImage = document.querySelector('.band-image');
var eventInfo = document.querySelector('.event-info');
var bandBio = document.querySelector('.band-bio');
var bandInfoURL = 'theaudiodb.com/api/v1/json/2/search.php?s=coldplay'

// var userInput = document.querySelector('.button');

function getArtistInfo() {
    fetch('https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay') 
    .then(function(response) {
        if(response.ok) {
            response.json()
            .then(function(data) {
                console.log(data)
            })
        }
        else {console.log('error' + response.statusText)}
    })
};

getArtistInfo();