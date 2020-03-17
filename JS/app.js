//log current day
var currentDate = moment().format('L');
console.log(currentDate);

//create queryURL and ajax call
var searchWeather = function(weather) {
	var queryURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		weather +
		'&units=imperial' +
		'&appid=36647473717c57282b7a80e5038cd6f3';
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(queryURL);
		console.log(response);

		//$('#currentCity').empty() + currentDate;

		//render object data to html
		$('.currentCity').html('<h2>' + response.name + currentDate);
		console.log(response.name);

		$('.currentHumid').html(
			'<p>' + 'Humidity: ' + response.main.humidity + ' %'
		);
		$('.currentWind').html(
			'<p>' + 'Wind Speed: ' + response.wind.speed + ' miles/hour'
		);

		//var tempF = (response.main.temp - 273.15) * 1.8 + 32;
		$('.tempF').html('<p>' + 'Temperature: ' + response.main.temp);
		//tempF.toFixed(2));
	});
};
searchWeather('Nashville');

//$('#weatherList').html(newDiv);

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
			localStorage.setItem('findCity', city);
			$('#render-city').text(JSON.stringify(response));
		});
	};
