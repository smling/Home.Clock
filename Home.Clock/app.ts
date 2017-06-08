import * as moment from 'moment';
 
window.onload = () => {
    var el = document.getElementById('content');
    var clockElement = document.createElement("span");
    el.appendChild(clockElement);
    var clock = new Clock(clockElement);
    clock.start();

    let weatherService: IWeatherService = new ObservatoryWeatherService();
    weatherService.findWeatherWarnings();
    
    let weatherUndergroundService: IWeatherService = new WeatherUndergroundService();
    weatherUndergroundService.findCurrentObservation(22.317930, 114.265863);

    //var greeter = new Clock(el);
    //greeter.start();
};