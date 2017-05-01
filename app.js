var config = require('./config.json');
var dash_button = require('node-dash-button');
var http = require('http');

var laundry_dash = dash_button(config["laundry_mac_address"], null, null, 'all');

var laundry_options = {
	host: 'maker.ifttt.com',
	path: '/trigger/laundry_done/with/key/' + config["ifttt_key"]
}

// 4500000 milliseconds equals 1 hour and 15 minutes
var laundry_timeout = 4500000;

function sendLaundryNotification() {
	http.get(laundry_options, function(response) {
	}).on("error", function(e) {
		console.error(e);
	})
}

laundry_dash.on("detected", function (){
	setTimeout(sendLaundryNotification, laundry_timeout);
});