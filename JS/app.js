//capture user search text
var locationInput = $('#search-term').val();
//add api key
var apiKEY = '36647473717c57282b7a80e5038cd6f3';

var queryURL =
	'https://api.openweathermap.org/data/2.5/forecast?' + locationInput + apiKEY;

$.ajax({
	url: queryURL,
	method: 'GET'
}).then(function(response) {
	console.log(queryURL);
	console.log(response);
});
