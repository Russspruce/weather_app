var weather = require('./../js/weather-interface.js').weather;

$(document).ready(function() {
  $('#weather').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var output = weather(location);
    $(".showWeather").append(output + "this is your location");
  });
});
