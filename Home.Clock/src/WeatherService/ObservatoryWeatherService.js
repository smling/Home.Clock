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
