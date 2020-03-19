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

		//render current weather data to html
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
var queryURLforecast =
	'https://pro.openweathermap.org/data/2.5/forecast/daily?q=' +
	fiveDay +
	'&units=imperial' +
	'&appid=36647473717c57282b7a80e5038cd6f3';

var fiveDayForecast = function(fiveDay) {
	$.ajax({
		url: queryURLforecast,
		method: 'GET'
	}).then(function(response) {
		console.log(queryURL);
		console.log(response);

		$('#day1date').html('<p>' + response.dt_txt);
		console.log(response.dt_txt);
		$('#day1temp').html('<p>' + 'Temp: ' + response.main.temp);
		$('#day1temp').html('<p>' + 'Humidity: ' + response.main.humidity);
	});
};

fiveDayForecast('Nashville');

var citySearchInput = document.querySelector('#city-text');
var citySearchForm = document.querySelector('#city-form');
var citySearchList = document.querySelector('#city-list');
var citySearch = [];

/*var renderSearchedCities = function(citySearchList) {
	for (i = 0; i < citySearch.length; i++) {
		citySearchList.innerText = '';
		var cityList = document.createElement('li');
		cityList.innerText = citySearch[i];
		button.addEventListener('submit'),
			function() {
				citySearchList.appendChild(cityList);
			};
	}
};
renderSearchedCities();
*/
var ul = document.querySelector('ul');
$('#cityForm').on('click', function(event) {
	var ul = $('#cityList');
	var li = document.createElement('li');
	event.preventDefault();
	var inputVal = $('#cityText').val();
	//cityText.Text = '';

	citySearch.push(inputVal);

	localStorage.setItem('cityText', inputVal);

	var newCityList = localStorage.getItem('cityText');
	$('#cityText').val(newCityList);
	ul.append(li);
});
