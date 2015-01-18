var openEditWindow = require('edit');

var win = Ti.UI.createWindow({
	backgroundColor : "#1A4489"

});

var view = Ti.UI.createView({
	layout : "vertical",
	backgroundImage : "IMG_1533.JPG",
});

// if (Ti.Platform.osname === "android") {
	// view.height = 500;
// } else {
// 
	// view.height = 2000;
// }

var scrollView = Ti.UI.createScrollView({
	showVerticalScrollIndicator : true,
	showHorizontalScrollIndicator : true,
	height : Ti.UI.FILL,
	width : Ti.UI.FILL,
});

var tempC = Ti.UI.createLabel({
	font : {
		fontFamily : "Candara",
		fontSize : "300dp"
	},
	color : "white",
	top : "40dp",
	left : "5dp",

});

var city = Ti.UI.createLabel({
	text : "city",
	color : "white",
	font : {
		fontFamily : "Candara",
		fontSize : "80dp"
	},
	top : "40dp",
	left : "10dp"
});

var state = Ti.UI.createLabel({
	text : "state",
	font : {
		fontFamily : "Candara",
		fontSize : "60dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp"
});

var weather = Ti.UI.createLabel({
	text : "Weather",
	font : {
		fontFamily : "Candara",
		fontSize : "50dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",

});

var feelsLike = Ti.UI.createLabel({
	text : "feels Like",
	font : {
		fontFamily : "Candara",
		fontSize : "50dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",

});
var uv = Ti.UI.createLabel({
	text : "UV",
	font : {
		fontFamily : "Candara",
		fontSize : "50dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp"
});



var obTime = Ti.UI.createLabel({
	text : "last update",
	font : {
		fontFamily : "Candara",
		fontSize : "30dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",

});
var icon = Ti.UI.createImageView({
	image : "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
	borderColor : "#000",

});

var satellite = Ti.UI.createImageView({
	image : "http://wublast.wunderground.com/cgi-bin/WUBLAST?lat=37.77500916&lon=-122.41825867&radius=75&width=300&height=300&key=sat_ir4_thumb&gtt=0&extension=png&proj=me&num=1&delay=25&timelabel=0&basemap=1&borders=1&theme=WUBLAST_WORLD&rand=1421558928&api_key=f29731b54a4ed219",
	borderColor : "#000",

});
var forecast = Ti.UI.createLabel({
	text : "forecast",
	font : {
		fontFamily : "Candara",
		fontSize : "30dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",
});


var rhumidity = Ti.UI.createLabel({
	text : "Humidity",
	font : {
		fontFamily : "Candara",
		fontSize : "30dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",
});
var tempH = Ti.UI.createLabel({
	text : "High Temp: ",
	font : {
		fontFamily : "Candara",
		fontSize : "30dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",
});

var tempL = Ti.UI.createLabel({
	text : "Low Temp",
	font : {
		fontFamily : "Candara",
		fontSize : "30dp"
	},
	color : "white",
	top : "40dp",
	left : "10dp",
});



exports.buildUI = function(obj) {
	console.log(obj);
	console.log("obj " + JSON.stringify(obj));
	city.text = obj.city+ ", " +obj.state;
	uv.text = "uv : " + obj.uv;
	feelsLike.text = "feels like :" + obj.feelsLike + "°F";
	tempC.text = obj.temp + "F°";
	weather.text = "Weather : " + obj.weather;
	forecast.text = "Estimated weather " + obj.forecast;
	rhumidity.text = "Humidity: " + obj.rhumidity;
	obTime.text = "last update: " + obj.obTime;
	tempH.text = "High Temp: " + obj.tempH  + "F°" ;
	tempL.text = "Low Temp: "+ obj.tempL + "F°";
	win.open();
};

scrollView.add(view);
view.add(tempC);
view.add(city);
//view.add(state);
view.add(weather);
view.add(tempH);
view.add(tempL);
view.add(feelsLike);
view.add(rhumidity);
view.add(uv);
//view.add(forecast);
view.add(satellite);
// view.add(commentButton);
// view.add(commentUp);
view.add(icon);
view.add(obTime);

win.add(scrollView);

