import * as moment from 'moment';
 
window.onload = () => {
    var el = document.getElementById('content');
    var clockElement = document.createElement("span");
    el.appendChild(clockElement);
    var clock = new Clock(clockElement);
    clock.start();

    let weatherService: IWeatherService = new ObservatoryWeatherService();
    weatherService.reload();
    //var greeter = new Clock(el);
    //greeter.start();
};