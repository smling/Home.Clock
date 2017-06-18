
window.onload = () => {
    let clock: ClockWidget = new ClockWidget(document.getElementById('ClockWidget'));
    clock.start();

    let photoWidget: PhotoWidget = new PhotoWidget(document.getElementById("PhotoWidget"));
    photoWidget.start();

    //let weatherService: IWeatherService = new ObservatoryWeatherService();
    //weatherService.findWeatherWarnings();
    
    ////let weatherWarnings: Array<WeatherWarning> = weatherService.findWeatherWarnings();
        
    //let weatherUndergroundService: IWeatherService = new WeatherUndergroundService();
    //let weatherUndergroundService: WeatherUndergroundService = new WeatherUndergroundService();
    //weatherUndergroundService.start();
    
    let weatherWidget: WeatherWidget=new WeatherWidget(document.getElementById("WeatherConditionWidget"));
    weatherWidget.start();
    //let flipDate: FlipDate = new FlipDate(document.getElementsByClassName("date").item[0]);

    //var greeter = new Clock(el);
    //greeter.start();
};