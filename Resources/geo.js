var api = require("api");	
var getGeo = function() {
	Ti.Geolocation.purpose = "This app would like to use your geolocation.";
	Ti.Geolocation.getCurrentPosition(function(e) {
		if(Ti.Platform.osname === "android"){
			//api.weather(e.coords.latitude, e.coords.longitude);
			api.weather(37.78583526611328, -122.4064178466797);
			//for android
		}else{
			console.log("ios");
			api.weather(e.coords.latitude, e.coords.longitude);
		}
	});
};

exports.getGeo = getGeo;
