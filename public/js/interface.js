
function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('#increase', this.thermostat, this.thermostat.increaseTemperature); 
	this.bindTo('#decrease', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('#reset', this.thermostat, this.thermostat.reset);
	this.bindTo('#')
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

$(document).ready(function() {
	new ThermostatView('#number');
});




















