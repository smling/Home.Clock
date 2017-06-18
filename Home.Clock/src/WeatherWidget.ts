/// <reference path="WidgetBase.ts" />
/// <reference path="WeatherService/WeatherServiceSources.ts" />

class WeatherWidget extends WidgetBase
{
    private _weatherConditionService: IWeatherService;
    private _weatherWarningService: IWeatherService;

    constructor(element: HTMLElement)
    {
        super(element);
        this._weatherConditionService = this.createWeatherService(Settings.WeatherConditionService, Settings.WeatherConditionServiceRootPath, Settings.WeatherConditionServiceApiKey, Settings.WeatherConditionServiceRequestUrl);
        this._weatherWarningService = this.createWeatherService(Settings.WeatherWarningService, Settings.WeatherWarningServiceRootPath, Settings.WeatherWarningServiceApiKey, Settings.WeatherWarningServiceRequestUrl);
    }

    start()
    {
        setInterval(this.updateWeatherCondition(), super.getExecuteMillSecond(Settings.WeatherConditionServiceReloadSeconds));
    }

    private updateWeatherCondition(): void
    {
        this._weatherConditionService.findCurrentObservation(Settings.currnetLocationLat, Settings.currnetLocationLong, function (data: any) {
            // Success callback.
            // Map data to object and render in UI.
            // TODO: move related code to base class.
            let result: WeatherCondition = new WeatherCondition();
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

            // Update UI.
            (document.getElementById("ConditionIcon") as HTMLImageElement).src = "images/weather-underground-icon-png/" + result.IconName + ".png";
            document.getElementById("Location").textContent = result.Location;
            document.getElementById("ObservationTime").textContent = result.ObservationTime.toString();
            document.getElementById("RelativeHumidityString").textContent = result.RelativeHumidityString;
            document.getElementById("TempetureFullString").textContent = result.TempetureFullString;
            document.getElementById("UV").textContent = result.UV.toString();
        }, function (data: any) {
            alert(data.message);
        });
    }

    private createWeatherService(weatherService: WeatherServiceSources, rootPath: string, apiKey: string, requestUrl: string): IWeatherService
    {
        let result: IWeatherService;
        switch (weatherService)
        {
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
    }
}