/// <reference path="WeatherService/WeatherServiceSources.ts" />
class Settings
{
    // Location settings.
    static currnetLocationLat: number = 22.317930;
    static currnetLocationLong: number = 114.265863;

    // Weather condition service and related setting.
    static WeatherConditionService: WeatherServiceSources=WeatherServiceSources.WeatherUndergroundService;
    static WeatherConditionServiceRootPath: string="http://api.wunderground.com/api/";
    static WeatherConditionServiceApiKey: string="f1439c571fe4a431"
    static WeatherConditionServiceRequestUrl: string="/conditions/q/{lat},{long}.json";
    static WeatherConditionServiceReloadSeconds: number= 5*60;  // 5 minutes.

    // Weather warning service and related settings.
    static WeatherWarningService: WeatherServiceSources=WeatherServiceSources.ObservatoryWeatherService;
    static WeatherWarningServiceRootPath: string="http://rss.weather.gov.hk/rss/";
    static WeatherWarningServiceApiKey: string="";
    static WeatherWarningServiceRequestUrl: string ="WeatherWarningSummaryv2_uc.xml";
    static WeatherWarningServiceReloadSeconds: number= 60;  // 1 minutes.

    // PhotoWidget settings.
    static PhotoWidgetImageSource:string="images/photos/1%20({ImageNo}).JPG";
    static PhotoWidgetImageReloadSeconds: number=5*60; // 5 minutes.
}