var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var clock = new ClockWidget(document.getElementById('ClockWidget'));
    clock.start();
    var photoWidget = new PhotoWidget(document.getElementById("PhotoWidget"));
    photoWidget.start();
    var weatherWidget = new WeatherWidget(document.getElementById("WeatherConditionWidget"));
    weatherWidget.start();
};
var WidgetBase = (function () {
    function WidgetBase(element) {
        this._element = element;
    }
    WidgetBase.prototype.appendDivElement = function (id) {
        return this.appendElement(id, "div");
    };
    WidgetBase.prototype.appendElement = function (id, tagName) {
        var result;
        if (this._element != null) {
            result = document.createElement(tagName);
            result.id = id;
            this._element.appendChild(result);
        }
        return result;
    };
    WidgetBase.prototype.getExecuteMillSecond = function (second) {
        return second * 1000;
    };
    return WidgetBase;
}());
var ClockWidget = (function (_super) {
    __extends(ClockWidget, _super);
    function ClockWidget(element) {
        var _this = _super.call(this, element) || this;
        _this._clockElement = _super.prototype.appendDivElement.call(_this, "Clock");
        _this._dateElement = _super.prototype.appendDivElement.call(_this, "Date");
        setInterval(function () { return _this.start(); }, 1000);
        return _this;
    }
    ClockWidget.prototype.start = function () {
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
    return ClockWidget;
}(WidgetBase));
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
}());
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
}());
var WeatherServiceSources;
(function (WeatherServiceSources) {
    WeatherServiceSources[WeatherServiceSources["ObservatoryWeatherService"] = 0] = "ObservatoryWeatherService";
    WeatherServiceSources[WeatherServiceSources["WeatherUndergroundService"] = 1] = "WeatherUndergroundService";
})(WeatherServiceSources || (WeatherServiceSources = {}));
window.WeatherServiceSources = WeatherServiceSources;
var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());
Settings.currnetLocationLat = 22.317930;
Settings.currnetLocationLong = 114.265863;
Settings.WeatherConditionService = WeatherServiceSources.WeatherUndergroundService;
Settings.WeatherConditionServiceRootPath = "http://api.wunderground.com/api/";
Settings.WeatherConditionServiceApiKey = "f1439c571fe4a431";
Settings.WeatherConditionServiceRequestUrl = "/conditions/q/{lat},{long}.json";
Settings.WeatherConditionServiceReloadSeconds = 5 * 60;
Settings.WeatherWarningService = WeatherServiceSources.ObservatoryWeatherService;
Settings.WeatherWarningServiceRootPath = "http://rss.weather.gov.hk/rss/";
Settings.WeatherWarningServiceApiKey = "";
Settings.WeatherWarningServiceRequestUrl = "WeatherWarningSummaryv2_uc.xml";
Settings.WeatherWarningServiceReloadSeconds = 60;
Settings.PhotoWidgetImageSource = "images/photos/1%20({ImageNo}).JPG";
Settings.PhotoWidgetImageReloadSeconds = 5 * 60;
var PhotoWidget = (function (_super) {
    __extends(PhotoWidget, _super);
    function PhotoWidget(element) {
        var _this = _super.call(this, element) || this;
        _this.imageCount = 86;
        _this._imageElement = _super.prototype.appendElement.call(_this, "photo", "img");
        return _this;
    }
    PhotoWidget.prototype.findRandomImage = function () {
        $("#" + this._element.id).fadeOut();
        var randomImage = Math.round(Math.random() * this.imageCount);
        this._imageElement.src = Settings.PhotoWidgetImageSource.replace("{ImageNo}", randomImage.toString());
        console.debug("Image reloaded. URL: " + this._imageElement.src);
        $("#" + this._element.id).fadeIn();
    };
    PhotoWidget.prototype.start = function () {
        var _this = this;
        this.findRandomImage();
        setInterval(function () { return _this.findRandomImage(); }, this.getExecuteMillSecond(Settings.PhotoWidgetImageReloadSeconds));
    };
    return PhotoWidget;
}(WidgetBase));
var IWeatherService = (function () {
    function IWeatherService(rootPath, apiKey, requestUrl) {
        this._rootPath = rootPath;
        this._apiKey = apiKey;
        this._requestUrl = requestUrl;
    }
    return IWeatherService;
}());
var ObservatoryWeatherService = (function (_super) {
    __extends(ObservatoryWeatherService, _super);
    function ObservatoryWeatherService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weatherWarningWebPath = "http://rss.weather.gov.hk/rss/WeatherWarningSummaryv2_uc.xml";
        return _this;
    }
    ObservatoryWeatherService.prototype.findCurrentObservation = function (latitude, longitude, doneCallback, failCallBack) {
        throw new Error("Not implmement yet.");
    };
    ObservatoryWeatherService.prototype.findWeatherWarnings = function (doneCallback, failCallBack) {
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
}(IWeatherService));
var WeatherCondition = (function () {
    function WeatherCondition() {
    }
    return WeatherCondition;
}());
var WeatherUndergroundService = (function (_super) {
    __extends(WeatherUndergroundService, _super);
    function WeatherUndergroundService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherUndergroundService.prototype.findCurrentObservation = function (latitude, longitude, doneCallback, failCallBack) {
        var url = this.createRequestUrl().replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());
        ;
        jQuery.getJSON(url).done(function (data) {
            console.debug("data found.");
            doneCallback(data);
        }).fail(function (data) {
            failCallBack(data);
        });
    };
    WeatherUndergroundService.prototype.findWeatherWarnings = function (doneCallback, failCallBack) {
        throw new Error("Not implmement yet.");
    };
    WeatherUndergroundService.prototype.createRequestUrl = function () {
        return this._rootPath + "/" + this._apiKey + "/" + this._requestUrl;
    };
    return WeatherUndergroundService;
}(IWeatherService));
var WeatherWarning = (function () {
    function WeatherWarning() {
    }
    return WeatherWarning;
}());
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
            for (var _i = 0, weatherWarnings_1 = weatherWarnings; _i < weatherWarnings_1.length; _i++) {
                var weatherWarning = weatherWarnings_1[_i];
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
}());
var WeatherWidget = (function (_super) {
    __extends(WeatherWidget, _super);
    function WeatherWidget(element) {
        var _this = _super.call(this, element) || this;
        _this._weatherConditionService = _this.createWeatherService(Settings.WeatherConditionService, Settings.WeatherConditionServiceRootPath, Settings.WeatherConditionServiceApiKey, Settings.WeatherConditionServiceRequestUrl);
        _this._weatherWarningService = _this.createWeatherService(Settings.WeatherWarningService, Settings.WeatherWarningServiceRootPath, Settings.WeatherWarningServiceApiKey, Settings.WeatherWarningServiceRequestUrl);
        return _this;
    }
    WeatherWidget.prototype.start = function () {
        setInterval(this.updateWeatherCondition(), _super.prototype.getExecuteMillSecond.call(this, Settings.WeatherConditionServiceReloadSeconds));
    };
    WeatherWidget.prototype.updateWeatherCondition = function () {
        this._weatherConditionService.findCurrentObservation(Settings.currnetLocationLat, Settings.currnetLocationLong, function (data) {
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
        }, function (data) {
            alert(data.message);
        });
    };
    WeatherWidget.prototype.createWeatherService = function (weatherService, rootPath, apiKey, requestUrl) {
        var result;
        switch (weatherService) {
            case WeatherServiceSources.ObservatoryWeatherService:
                result = new ObservatoryWeatherService(rootPath, apiKey, requestUrl);
                break;
            case WeatherServiceSources.WeatherUndergroundService:
                result = new WeatherUndergroundService(rootPath, apiKey, requestUrl);
                break;
            default:
                throw new Error("Invalid settings for defining service.");
        }
        return result;
    };
    return WeatherWidget;
}(WidgetBase));
//# sourceMappingURL=build.js.map