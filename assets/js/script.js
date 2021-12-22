var bandNameEl = document.querySelector('#name');
var bandImageEl = document.querySelector('#image');
var eventInfoEl = document.querySelector('.event-info');
var bandBioEl = document.querySelector('#band-bio p');
var submitBand = document.querySelector('.submitBtn');
var magGlass = document.querySelector('#mag-container');
var artists = [];

function getArtistInfo(artist) {
    // var bandName = document.querySelector('#band').value;
    var bandInfoURL = 'https://theaudiodb.com/api/v1/json/2/search.php?s=' + artist;
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
                bandBioEl.innerHTML = bandBio;

                var form = document.querySelector('form');
                form.style.display = 'none';
            })
        }
        else {console.log('error' + response.statusText)}
    });
};

submitBand.addEventListener('click', submitBandHandler);

function submitBandHandler(event) {
    event.preventDefault();
    var userInputEl = document.querySelector('#band');
    var artist = userInputEl.value.trim();

    getArtistInfo(artist);
}

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

function magnifyingGlassSearchHandler() {
    var userInputEl = document.querySelector('#band'); 
    var form = document.querySelector('form');
    form.style.display = 'block';
    userInputEl.value = '';

    submitBandHandler();
}

magGlass.addEventListener('click', magnifyingGlassSearchHandler);

getEventInfo();