//api key:&appid=36647473717c57282b7a80e5038cd6f3

var searchTerm = $('#findLocation');
//var locationHistory = $('#priorLocation');
var currentWeatherDay = $('#currentCity');
var currentWeatherTemp = $('#currentTemp');
var currentWeatherWind = $('#currentWind');
var currentWeatherUV = $('#currentUV');

var currentDate = moment().format('L');
console.log(currentDate);

function searchLocation(findLocation) {
	//capture user search text
	var locationInput = $('#searchTerm')
		.val()
		.trim();
	//build query string with api key
	var queryURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		locationInput +
		'&appid=36647473717c57282b7a80e5038cd6f3';

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(queryURL);
		console.log(response);
	});
	//searchLocation();

	$('#findLocation').on('click'),
		function(event) {
			event.preventDefault();
		};

	// new div for city content
	$('#currentCity').empty() + currentDate;
}
findLocation();
