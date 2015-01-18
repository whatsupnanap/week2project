
var weatherApi = function(lat, lng) {
	// console.log(lat);
	// console.log(lng);
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			console.log(e);
			var json = JSON.parse(this.responseText);
			var weatherData = {
				city : json.current_observation.display_location.city,
				state :json.current_observation.display_location.state,
				uv : json.current_observation.UV,
				feelsLike:json.current_observation.feelslike_f,
				tempC: json.current_observation.dewpoint_f,
				rhumidity:json.current_observation.relative_humidity,
				weather:json.current_observation.weather,
				tempH:json.almanac.temp_high.normal.F,
				tempL:json.almanac.temp_low.normal.F,
				icon: json.current_observation.icon,
				obTime: json.current_observation.observation_time,
				//forecast:json.stringify(json.forecast.simpleforecast.forecastday[0].date),
				satellite:json.satellite
			
				//img : json.current_observation.image.url

			};
			// for(i=0, j=json.forecast.txt_forecastday; i<j; i++){
			// weatherData.txt = json.forecast.txt_forecast.forecastDaily[i].fcttext;
			// }
			console.log("weatherData" + JSON.stringify(weatherData));
			data.save(weatherData);
			data.saveToCloud(weatherData);
		},

		anerror : function() {
			alert("api error");
		},
		timeout : 5000
	});

	var url = "http://api.wunderground.com/api/f29731b54a4ed219/geolookup/conditions/forecast/satellite/almanac/q/" + lat + "," + lng + ".json";
	console.log(url);
	xhr.open("GET", url);
	xhr.send();
};

exports.weather = weatherApi;
