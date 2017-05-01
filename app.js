var dash_button = require('node-dash-button');

var dash_button_addresses = require('./dash_buttons.json');

var laundry_dash = dash_button(dash_button_addresses["laundry_mac_address"], null, null, 'all');

laundry_dash.on("detected", function (){
	console.log("Found laundry dash button");
});