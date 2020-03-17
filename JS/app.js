//log current day
var currentDate = moment().format('L');
console.log(currentDate);

//variables
//var searchTerm = $('#findCity');
//var locationHistory = $('#priorLocation');
//var locationNameEl = $('<h2>').text(response.name);
//var currentWeatherTempEl = $('<p>').text('Temperature: ' + response.main.temp);
//var currentWeatherHumidityEl = $('<p>').text('Humidity: ' + response.main.humidity);
//var currentWeatherWindEl = $('<p>').text('Wind Speed: ' + response.main.wind.speed);
//var currentWeatherUV = $('#currentUV');
//var renderCityDate = locationNameEl.append('' + currentDate);

//search function and ajax call

var searchWeather = function(weather) {
	var queryURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		weather +
		'&appid=36647473717c57282b7a80e5038cd6f3';
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(queryURL);
		console.log(response);
	});
};
searchWeather('Nashville');
/*
$('#findCity').on('click'),
	function(event) {
		event.preventDefault();
		var city = $('#searchTerm')
			.val()
			.trim();

		var queryURL =
			'https://api.openweathermap.org/data/2.5/weather?q=' +
			city +
			'&appid=36647473717c57282b7a80e5038cd6f3';
		$.ajax({
			url: queryURL,
			method: 'GET'
		}).then(function(response) {
			$('#render-city').text(JSON.stringify(response));
		});
	};
*/
//	localStorage.setItem('findCity', city);

//	};
//searchLocation();
// new div for city content
//$('#currentCity').empty() + currentDate;
