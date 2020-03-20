//log current day
var currentDate = moment().format('L');
console.log(currentDate);
//api key
var key = '36647473717c57282b7a80e5038cd6f3';
// store search history
var citySearch = [];
//set localStorage
if (localStorage.getItem('locations') == null) {
	citySearch = JSON.parse(localStorage.getItem('locations'));
	//citySearch.push(locations);
	//location or city input
	var weather = ''; //|| cityText[0];
}

//generate current weather day data based on searched city
var searchWeather = function(weather) {
	var queryURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' +
		weather +
		'&units=imperial' +
		'&appid=' +
		key;

	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: 'GET'
	}).then(function(response) {
		console.log(response);

		//render current weather data to html
		$('.currentCity').html('<h2>' + response.name + '&nbsp' + currentDate);
		console.log(response.name);
		var weatherIconCode = response.weather[0].icon;
		var weatherIconCode =
			'http://openweathermap.org/img/wn/' + weatherIconCode + '.png';
		$('.icon').html("<img src='" + weatherIconCode + "'>");
		console.log(response.weather[0].icon);

		$('.currentHumid').html(
			'<p>' + 'Humidity: ' + response.main.humidity + ' %'
		);
		$('.currentWind').html(
			'<p>' + 'Wind Speed: ' + response.wind.speed + ' miles/hour'
		);
		//var tempF = (response.main.temp - 273.15) * 1.8 + 32;
		$('.tempF').html('<p>' + 'Temperature: ' + response.main.temp);
	});
};
searchWeather('Nashville');

//generate 5-day forecast data
function forecast(fiveDay) {
	queryURLforecast =
		'https://api.openweathermap.org/data/2.5/forecast?q=' +
		fiveDay +
		'&units=imperial' +
		'&appid=' +
		key;
	console.log(queryURLforecast);

	$.ajax({
		url: queryURLforecast,
		method: 'GET'
	}).then(function(response) {
		console.log(response);
		/*<p class='currentDate'>
			$
			{moment()
				.add(i + 1, 'day')
				.format('L')}
		</p>*/
		$('.day1temp').html('<p>' + 'Temp: ' + response.list[0].main.temp);
		$('.day1Humidity').html(
			'<p>' + 'Humidity: ' + response.list[0].main.humidity
		);

		$('.day2temp').html('<p>' + 'Temp: ' + response.list[1].main.temp);
		$('.day2Humidity').html(
			'<p>' + 'Humidity: ' + response.list[1].main.humidity
		);

		$('.day3temp').html('<p>' + 'Temp: ' + response.list[2].main.temp);
		$('.day3Humidity').html(
			'<p>' + 'Humidity: ' + response.list[2].main.humidity
		);

		$('.day4temp').html('<p>' + 'Temp: ' + response.list[3].main.temp);
		$('.day4Humidity').html(
			'<p>' + 'Humidity: ' + response.list[3].main.humidity
		);

		$('.day5temp').html('<p>' + 'Temp: ' + response.list[4].main.temp);
		$('.day5Humidity').html(
			'<p>' + 'Humidity: ' + response.list[4].main.humidity
		);
	});
}
forecast('Nashville');

var citySearchInput = document.querySelector('#city-text');
var citySearchForm = document.querySelector('#city-form');
var citySearchList = document.querySelector('#city-list');

$('#cityForm').on('click', function(event) {
	event.preventDefault();
	//create li and append ul
	var li = $('<li>');
	//$('li').attr('list-group-item');
	$('#cityList').append(li);

	var cityInput = $('#cityText')
		.val()
		.trim();

	//create localStorage
	li.text(cityInput);

	localStorage.setItem('cityText', JSON.stringify(cityText));

	searchWeather(cityInput);
	forecast(cityInput);

	$('#cityText').val('');
});
