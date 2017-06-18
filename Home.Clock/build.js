var Clock = (function () {
    function Clock(element) {
        var _this = this;
        this.element = element;
        this._clockElement = document.getElementById("Clock");
        this._dateElement = document.getElementById("Date");
        setInterval(function () { return _this.start(); }, 1000);
    }
    Clock.prototype.start = function () {
        var now = new Date();
        var hourStr = (now.getHours() < 10 ? "0" : "") + now.getHours().toString();
        var minuteStr = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes().toString();
        var secondStr = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds().toString();
        this._clockElement.textContent = hourStr + ":" + minuteStr + ":" + secondStr;
        var yearStr = now.getFullYear().toString();
        var monthStr = ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1).toString();
        var dateOfMonthStr = (now.getDate() < 10 ? "0" : "") + now.getDate().toString();
        this._dateElement.textContent = yearStr + "-" + monthStr + "-" + dateOfMonthStr;
    };
    return Clock;
})();
var FlipDate = (function () {
    function FlipDate(element) {
        this._element = element;
        this._yearElement = this._element.getElementsByClassName("year").item[0];
        this._monthElement = this._element.getElementsByClassName("month").item[0];
        this._dateOfMonthElement = this._element.getElementsByClassName("dateOfMonth").item[0];
        setInterval(this.start(), 1000);
    }
    FlipDate.prototype.start = function () {
        var now = new Date();
        this._yearElement.textContent = now.getFullYear().toString();
        this._monthElement.textContent = now.toLocaleString("en-us", { month: "short" });
        this._dateOfMonthElement.textContent = now.getDate().toString();
    };
    return FlipDate;
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
var PhotoWidget = (function () {
    function PhotoWidget(element) {
        this.imageCount = 86;
        this._element = element;
        this._imageElement = document.createElement("img");
        this._element.appendChild(this._imageElement);
    }
    PhotoWidget.prototype.findRandomImage = function () {
        $("#" + this._element.id).fadeOut();
        var randomImage = Math.round(Math.random() * this.imageCount);
        this._imageElement.src = "images/photos/1%20(" + randomImage.toString() + ").JPG";
        console.debug(randomImage.toString());
        $("#" + this._element.id).fadeIn();
    };
    PhotoWidget.prototype.start = function () {
        var _this = this;
        setInterval(function () { return _this.findRandomImage(); }, 5000);
    };
    return PhotoWidget;
})();
var IWeatherService = (function () {
    function IWeatherService(weatherObservation, weatherWarning) {
        this._weatherObservation = weatherObservation;
        this._weatherWarning = weatherWarning;
    }
    return IWeatherService;
})();
var WeatherCondition = (function () {
    function WeatherCondition() {
    }
    return WeatherCondition;
})();
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WeatherUndergroundService = (function (_super) {
    __extends(WeatherUndergroundService, _super);
    function WeatherUndergroundService() {
        _super.apply(this, arguments);
        this._rootPath = "http://api.wunderground.com/api/";
        this._apiKey = "f1439c571fe4a431";
        this._conditionPath = this._rootPath + this._apiKey + "/conditions/q/{lat},{long}.json";
    }
    WeatherUndergroundService.prototype.start = function () {
        var _this = this;
        this.findCurrentObservation(22.317930, 114.265863);
        setInterval(function () { return _this.findCurrentObservation(22.317930, 114.265863); }, 1000 * 60);
    };
    WeatherUndergroundService.prototype.findCurrentObservation = function (latitude, longitude) {
        var _requestUrl = this._conditionPath.replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());
        ;
        jQuery.getJSON(_requestUrl).done(function (data) {
            console.debug("data found.");
            var result = new WeatherCondition();
            if (data != null) {
                result.DataSource = data.current_observation.image.title;
                result.DataSourceIconUrl = data.current_observation.image.url;
                result.IconName = data.current_observation.icon;
                result.IconUrl = data.current_observation.icon_url;
                result.Location = data.current_observation.display_location.full;
                result.ObservationTime = data.current_observation.observation_time;
                result.RelativeHumidityString = data.current_observation.relative_humidity;
                result.TempetureFullString = data.current_observation.temperature_string;
                result.TempetureInCensus = data.current_observation.temp_c;
                result.UV = data.current_observation.UV;
            }
            document.getElementById("ConditionIcon").src = "images/weather-underground-icon-png/" + result.IconName + ".png";
            document.getElementById("Location").textContent = result.Location;
            document.getElementById("ObservationTime").textContent = result.ObservationTime.toString();
            document.getElementById("RelativeHumidityString").textContent = result.RelativeHumidityString;
            document.getElementById("TempetureFullString").textContent = result.TempetureFullString;
            document.getElementById("UV").textContent = result.UV.toString();
        }).fail(function (data) {
            alert(data.message);
        });
    };
    WeatherUndergroundService.prototype.findWeatherWarnings = function () {
        return null;
    };
    return WeatherUndergroundService;
})(IWeatherService);
var WeatherWarning = (function () {
    function WeatherWarning() {
    }
    return WeatherWarning;
})();
var ObservatoryWeatherService = (function (_super) {
    __extends(ObservatoryWeatherService, _super);
    function ObservatoryWeatherService() {
        _super.apply(this, arguments);
        this._weatherWarningWebPath = "http://rss.weather.gov.hk/rss/WeatherWarningSummaryv2_uc.xml";
    }
    ObservatoryWeatherService.prototype.findCurrentObservation = function (latitude, longitude) {
    };
    ObservatoryWeatherService.prototype.findWeatherWarnings = function () {
        var result = [];
        jQuery.ajax({
            url: this._weatherWarningWebPath,
            async: false,
            success: function (data) {
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
                var weatherWarningRenderer = new WeatherWarningRenderer(document.getElementById("weatherWarning"));
                weatherWarningRenderer.render(result);
                return result;
            }
        });
    };
    return ObservatoryWeatherService;
})(IWeatherService);
var WeatherWarningRenderer = (function () {
    function WeatherWarningRenderer(element) {
        this._element = element;
    }
    WeatherWarningRenderer.prototype.render = function (weatherWarnings) {
        while (this._element.firstChild) {
            this._element.removeChild(this._element.firstChild);
        }
        if ((weatherWarnings == null) || (weatherWarnings.length == 0)) {
            this._element.appendChild(this.createNewDiv("There is no weather warning."));
        }
        else {
            for (var _i = 0; _i < weatherWarnings.length; _i++) {
                var weatherWarning = weatherWarnings[_i];
                this._element.appendChild(this.createNewDiv(weatherWarning.name));
            }
        }
    };
    WeatherWarningRenderer.prototype.createNewDiv = function (html) {
        var weatherWarningElement = document.createElement("div");
        weatherWarningElement.innerHTML = html;
        return weatherWarningElement;
    };
    return WeatherWarningRenderer;
})();
//# sourceMappingURL=build.js.map