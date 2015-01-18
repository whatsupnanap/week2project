var win = require("window");

var read = function(lastID) {
	var db = Ti.Database.open("weatherDB");
	var dbRow = db.execute("SELECT * FROM weatherTBL WHERE id=?", lastID);
	//result set
	//var dbData = [];
	var dbPost = {};
	while (dbRow.isValidRow()) {
			dbPost.city = dbRow.fieldByName('city');
			dbPost.state = dbRow.fieldByName('state');
			dbPost.uv = dbRow.fieldByName('uv');
			dbPost.feelsLike = dbRow.fieldByName('feelsLike');
			dbPost.temp = dbRow.fieldByName('temp');
			dbPost.weather = dbRow.fieldByName('weather');
			dbPost.rhumidity = dbRow.fieldByName('rhumidity');
			dbPost.forecast = dbRow.fieldByName('forecast');
			dbPost.obTime = dbRow.fieldByName('obTime');
			dbPost.tempH = dbRow.fieldByName('tempH');
			dbPost.tempL = dbRow.fieldByName('tempL');


		//dbData.push(dbPost);
		dbRow.next();
	}
	dbRow.close();
	db.close();
	console.log(dbPost);
	//console.log("dbData: " + JSON.stringify(dbData));
	win.buildUI(dbPost);

};

exports.saveToCloud = function(apiInfo) {
	console.log("cloud info: " +JSON.stringify(apiInfo));
	Cloud.Objects.create({
			classname : 'weather',
			fields : {
				city : apiInfo.city,
				states : apiInfo.state,
				weather : apiInfo.weather,
				feelsLike : apiInfo.feelsLike,
				uv : apiInfo.uv,
				obTime : apiInfo.obTime,
				forecast:apiInfo.forecast,
				tempH:apiInfo.tempH,
				tempL:apiInfo.tempL
			}
		}, function(e) {
			if (e.success) {
				console.log("saved!");
			} else {
				alert("nope");
			}
		});

};

var save = function(apiInfo) {
	console.log("data page apiInfo" + JSON.stringify(apiInfo));
	var db = Ti.Database.open("weatherDB");
	db.execute("CREATE TABLE IF NOT EXISTS weatherTBL (id INTEGER PRIMARY KEY, city TEXT, state TEXT, uv TEXT, feelsLike TEXT, rhumidity, temp TEXT, weather TEXT, forecast TEXT , tempH TEXT, tempL text,obTime TEXT)");
	db.execute("INSERT INTO weatherTBL (city, state, uv, feelsLike, rhumidity, tempH, tempL, temp, weather, forecast, obTime) VALUES (?,?,?,?,?,?,?,?,?,?,?)", apiInfo.city, apiInfo.state, apiInfo.uv, apiInfo.feelsLike, apiInfo.rhumidity,apiInfo.tempH, apiInfo.tempL, apiInfo.tempC, apiInfo.weather, apiInfo.forecast, apiInfo.obTime);
	
	var lastID = db.getLastInsertRowId();
	db.close();
	read(lastID);
	
};

exports.save = save;
