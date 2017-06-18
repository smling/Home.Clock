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
