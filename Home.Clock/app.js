window.onload = function () {
    var el = document.getElementById('content');
    var clockElement = document.createElement("span");
    el.appendChild(clockElement);
    var clock = new Clock(clockElement);
    clock.start();
    var weatherService = new ObservatoryWeatherService();
    weatherService.findWeatherWarnings();
    var weatherUndergroundService = new WeatherUndergroundService();
    weatherUndergroundService.findCurrentObservation(22.317930, 114.265863);
};
//# sourceMappingURL=app.js.map