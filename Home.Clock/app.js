window.onload = function () {
    var clockElement = document.getElementById('ClockWidget');
    var clock = new Clock(clockElement);
    var weatherUndergroundService = new WeatherUndergroundService();
    weatherUndergroundService.start();
    var photoWidget = new PhotoWidget(document.getElementById("PhotoWidget"));
    photoWidget.start();
};
//# sourceMappingURL=app.js.map