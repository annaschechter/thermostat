var currentTemp;
function ThermostatView(element, currentTemp) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.thermostat.temperature = currentTemp;
	this.thermostat.temperature = 0;
	// this.el.text(this.thermostat.temperature);
	this.el.text(this.thermostat.increaseTemperatureBy(currentTemp));
	this.bindTo('#increase', this.thermostat, this.thermostat.increaseTemperature); 
	this.bindTo('#decrease', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('#reset', this.thermostat, this.thermostat.reset);
	this.attachTo('#powersaveron', this.thermostat, this.thermostat.turnOnPowerSaver);
	this.attachTo('#powersaveroff', this.thermostat, this.thermostat.turnOffPowerSaver);
};

ThermostatView.prototype.bindTo = function(selector, object, func) {
	this.thermostat.isPowerSaverOn = false;
	$(selector).on('click', function() {
		$('#number').text(func.call(object)+"°");
			if (parseInt($('#number').text()) < 18) $('body').css("background-color", "green");
			else if(parseInt($('#number').text()) < 25) $('body').css("background-color", "yellow");
			else $('body').css("background-color", "red");
	});
};

ThermostatView.prototype.attachTo = function(selector, object, func) {
	$(selector).on('click', function() {
		func.call(object);
	});
};

$(document).ready(function() {

	// $.getJSON('/weather', function(data){console.log(data['list'][1]['main']['temp'])})
	$.getJSON('/weather', function(data){
		var currentTemp = (data['list'][1]['main']['temp']);
		new ThermostatView('#number', currentTemp);
	});
	
});





















