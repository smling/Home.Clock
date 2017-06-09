import * as moment from 'moment';
 
window.onload = () => {
    var clockElement = document.getElementById('clock');
    var clock = new Clock(clockElement);
    clock.start();

    let weatherService: IWeatherService = new ObservatoryWeatherService();
    let weatherWarningRenderer: WeatherWarningRenderer = new WeatherWarningRenderer(document.getElementById("weatherWarning"));
    weatherWarningRenderer.render(weatherService.findWeatherWarnings());
    //let weatherWarnings: Array<WeatherWarning> = weatherService.findWeatherWarnings();
        
    let weatherUndergroundService: IWeatherService = new WeatherUndergroundService();
    weatherUndergroundService.findCurrentObservation(22.317930, 114.265863);

    //var greeter = new Clock(el);
    //greeter.start();
};