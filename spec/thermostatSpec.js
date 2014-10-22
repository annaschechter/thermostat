"use strict";

describe('Thermostat', function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('by default', function() {


		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true)
		});

		it('can increase the temperature by one degree', function() {
			expect(thermostat.increaseTemperature()).toEqual(21);
		});

		it('can decrease the temperature by one degree', function() {
			expect(thermostat.decreaseTemperature()).toEqual(19);
		});

		it('minimum temperature is set to 10 degrees', function() {
			expect(thermostat.minTemperature).toEqual(10);
		});

		it('cannot go below minimum temperature', function() {
			expect(thermostat.decreaseTemperatureBy(11)).toEqual(10);
		});

		it('if power saving is on the maximum temperature is 25 degrees', function() {
			expect(thermostat.increaseTemperatureBy(6)).toEqual(25);
		});

		it('if power saving is off maximum temperature is 32 degrees', function() {
			thermostat.isPowerSaverOn = false;
			expect(thermostat.increaseTemperatureBy(20)).toEqual(32);
		});

		it('thermostat can be reset to a default temperature', function() {
			thermostat.increaseTemperature(5);
			expect(thermostat.reset()).toEqual(20);
		});
	});


	describe('custom options', function() {

		it('can increase temperature by 2 degrees', function() {
			expect(thermostat.increaseTemperatureBy(2)).toEqual(22);
		});

		it('can decrease temperature by 5', function() {
			expect(thermostat.decreaseTemperatureBy(5)).toEqual(15);
		});
	});

});