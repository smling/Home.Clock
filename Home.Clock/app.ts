import * as moment from 'moment';
 
window.onload = () => {
    var clockElement = document.getElementById('ClockWidget');
    var clock = new Clock(clockElement);
    //clock.start();

    //let weatherService: IWeatherService = new ObservatoryWeatherService();
    //weatherService.findWeatherWarnings();
    
    ////let weatherWarnings: Array<WeatherWarning> = weatherService.findWeatherWarnings();
        
    //let weatherUndergroundService: IWeatherService = new WeatherUndergroundService();
    let weatherUndergroundService: WeatherUndergroundService = new WeatherUndergroundService();
    weatherUndergroundService.start();

    let photoWidget: PhotoWidget = new PhotoWidget();
    photoWidget.start();

    //let flipDate: FlipDate = new FlipDate(document.getElementsByClassName("date").item[0]);

    //var greeter = new Clock(el);
    //greeter.start();
};