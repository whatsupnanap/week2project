exports.openEditWindow = function() {
	var editWindow = Ti.UI.createWindow({
		backgroundColor : "white",
		
	});
	var db = require("data");
	var commentText = Ti.UI.createTextField({
		borderWidth: 2,
  		borderColor: '#bbb',
  		borderRadius: 5,
  		color: '#888',
  		font: {fontSize:20, fontWeight:'bold'},
  		returnKeyType: Ti.UI.RETURNKEY_GO,
  		textAlign: 'left',
  		hintText:"How's your day?",
  		top: 60,
  		width: 600, height : 300
	});

	var commentUnderline = Ti.UI.createView({
		height : 1,
		width : 200,
		backgroundColor : '#dddddd',
		top : 70,
		left : 70
	});

	
	var doneButton = Titanium.UI.createButton({
		title : 'done',
		bottom : 10,
		width : 100,
		height : 50
	});
	doneButton.addEventListener("click", function() {
		var weather = {};
		
		weather.comment = commentText.value;
		console.log(weather);

		var updateData = db.save(weather);		
		table.setData(updateData);
		
		console.log('updating!');
		alert("Updated!");
		
		
	});
	
	
	editWindow.add(commentText, doneButton);
	editWindow.open();
	};

