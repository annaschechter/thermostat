

$(document).ready(function() {

var thermostat = new Thermostat;
thermostat.isPowerSaverOn = false;

$('#increase').on('click', function() {
		thermostat.increaseTemperature();
		$('#number').text(thermostat.temperature+"°")
		if(thermostat.temperature < 18) $('body').css("background-color", "green");
		else if(thermostat.temperature < 25) $('body').css("background-color", "rgb(227, 192, 44)");
		else $('body').css("background-color", "red");
	});

$('#decrease').on('click', function() {
		thermostat.decreaseTemperature();
		$('#number').text(thermostat.temperature+"°")
		if(thermostat.temperature < 18) $('body').css("background-color", "green");
		else if(thermostat.temperature < 25) $('body').css("background-color", "rgb(227, 192, 44)");
		else $('body').css("background-color", "red");
	});
$('#reset').on('click', function() {
	thermostat.reset();
	$('#number').text(thermostat.temperature+"°")
})



});










// function ThermostatView(element) {
// 	this.el = $(element);
// 	this.thermostat = new Thermostat;
// 	this.el.text(this.thermostat.temperature);
// 	this.binTo('#increase', this.thermocat, this.thermostat.increaseTemperature);
// };

// Thermostat.prototype.bindTo = function(selector, object, func) {
// 	$(selector).on('click', function() {
// 		$('#number').text(func.call(object));
// 	});
// };

// $(document).ready(function() {
// 	new ThermostatView('#number');
// })













