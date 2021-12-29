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
                var bandName = data.artists[0].strArtist;
                var bandImage = data.artists[0].strArtistThumb;
                var bandBio = data.artists[0].strBiographyEN;
                bandNameEl.innerHTML = bandName;
                bandImageEl.setAttribute('src', bandImage);
                bandBioEl.innerHTML = bandBio;

                var form = document.querySelector('form');
                form.style.display = 'none';

                getEventInfo(artist);
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

function getEventInfo(artist) {
    var tixAPI = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + artist +  '&apikey=GaTAMAKytFLtlNib0wnQuqnwmT0iMzXy';

    fetch(tixAPI)
    .then(function(response) {
        response.json()
        .then(function(data) {
          console.log(data);
          // add eventInfoDisplay function here
          eventInfoDisplay(data);
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

var eventInfoDisplay = function(data) {
  var bands = [0,1,2,3,4];

  for (var i = 0; i < bands.length; i++) {
  var eventName = data._embedded.events[i].name;
  var eventCity = data._embedded.events[i]._embedded.venues[0].city.name;
  var eventAddress = data._embedded.events[i]._embedded.venues[0].address.line1;
  var eventDate = data._embedded.events[i].dates.start.localDate;
  var eventLink = data._embedded.events[i].url;
  var bandEventContainer = document.querySelector('#event-info');
  var bandEventContainerEl = document.createElement('div');

  bandEventContainerEl.setAttribute('class', 'newEvent');
  bandEventContainer.append(bandEventContainerEl);

  bandEventContainerEl.innerHTML = 
  "<a href=" + eventLink + "><h3>"+ eventName + "</h3><br/><h4>" + eventAddress + ", " + eventCity +
  "</h4><br/><h4>" + eventDate + "</h4></a>";
  }

  bandEventContainerEl.innerHTML = "<a href='https://www.ticketmaster.com/'>View More Concerts...</a>";

};