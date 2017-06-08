window.onload = function () {
    var el = document.getElementById('content');
    var clockElement = document.createElement("span");
    el.appendChild(clockElement);
    var clock = new Clock(clockElement);
    clock.start();
    var weatherService = new ObservatoryWeatherService();
    weatherService.findWeatherWarnings();
};
//# sourceMappingURL=app.js.map