var weather = require('./../js/weather-interface.js').weather;

$(document).ready(function() {
  $('#weather').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var output = weather(location);
    $(".showWeather").append(output + "this is your location");
  });
});

var apiKey = "937734abe0216117e837b8477589f1ca";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
    console.log("Notice: The GET request has been made.");
  });
});
