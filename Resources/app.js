var Cloud = require("ti.cloud");
Cloud.debug = true;

var data = require("data");
var geo = require("geo");
var edit = require("edit");

// geo.getGeo();
//ipad でやるとき↑
if (Ti.Network.online) {
	console.log("online");
	
	//push to DB which is save
	Cloud.Users.login({
		login:"nanap",
		password:"12345"
	},
	function(e){
		if(e.success){
			geo.getGeo();
		}else{
			alert("Error Login");
		}
		
	}
	);
	//simulatorでやるとき↑

} else {
	data.read();
	console.log("no network");
	//bring Data from DB favorite from final
	alert("You are not connecting to any internet.");
	
};
