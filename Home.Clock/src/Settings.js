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
