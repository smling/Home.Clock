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
            document.getElementById("TempetureFullString").textContent = result.TempetureInCensus.toString() + " C";
            document.getElementById("UV").textContent = "UV: " + result.UV.toString();
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
