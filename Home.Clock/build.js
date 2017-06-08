var Clock = (function () {
    function Clock(element) {
        this.element = element;
    }
    Clock.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.element.innerHTML = moment().format("YYYY-MM-DD HH:mm:ss"); }, 500);
    };
    Clock.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Clock;
})();
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
var ObservatoryWeatherService = (function () {
    function ObservatoryWeatherService() {
        this._weatherWarningWebPath = "http://rss.weather.gov.hk/rss/WeatherWarningSummaryv2_uc.xml";
    }
    ObservatoryWeatherService.prototype.findCurrentObservation = function (latitude, longitude) {
    };
    ObservatoryWeatherService.prototype.findWeatherWarnings = function () {
        var result = [];
        jQuery.get(this._weatherWarningWebPath).done(function (data) {
            var xmlDocument = jQuery.parseXML(data.documentElement.innerHTML);
            if (xmlDocument != null) {
                var items = xmlDocument.getElementsByTagName("item");
                for (var i = 0; i < items.length; i++) {
                    var weatherWarning = new WeatherWarning();
                    weatherWarning.name = items.item(i).getElementsByTagName("description")[0].textContent;
                    weatherWarning.publishDate = new Date(items.item(i).getElementsByTagName("pubDate")[0].textContent);
                    result[result.length] = weatherWarning;
                }
            }
        }).fail(function (data) {
            alert(data.message);
        });
        return result;
    };
    return ObservatoryWeatherService;
})();
var WeatherUndergroundService = (function () {
    function WeatherUndergroundService() {
        this._rootPath = "http://api.wunderground.com/api/";
        this._apiKey = "f1439c571fe4a431";
        this._conditionPath = this._rootPath + "/api/" + this._apiKey + "/conditions/q/{lat},{long}.json";
    }
    WeatherUndergroundService.prototype.findCurrentObservation = function (latitude, longitude) {
        var _requestUrl = this._conditionPath.replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());
    };
    WeatherUndergroundService.prototype.findWeatherWarnings = function () {
        return null;
    };
    return WeatherUndergroundService;
})();
var WeatherWarning = (function () {
    function WeatherWarning() {
    }
    return WeatherWarning;
})();
//# sourceMappingURL=build.js.map