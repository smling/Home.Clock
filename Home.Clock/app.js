window.onload = function () {
    var clock = new ClockWidget(document.getElementById('ClockWidget'));
    clock.start();
    var photoWidget = new PhotoWidget(document.getElementById("PhotoWidget"));
    photoWidget.start();
    var weatherWidget = new WeatherWidget(document.getElementById("WeatherConditionWidget"));
    weatherWidget.start();
};
