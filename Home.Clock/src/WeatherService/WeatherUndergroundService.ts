class WeatherUndergroundService implements IWeatherService {

    protected _rootPath: string = "http://api.wunderground.com/api/";
    protected _apiKey: string = "f1439c571fe4a431";

    // Get Condition by location. 
    // Sample: http://api.wunderground.com/api/f1439c571fe4a431/conditions/q/22.32,114.18.json
    protected _conditionPath: string = this._rootPath + this._apiKey + "/conditions/q/{lat},{long}.json";

    findCurrentObservation(latitude: number, longitude: number) {
        // Get Web service path.
        let _requestUrl: string = this._conditionPath.replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());;

        // Get result from Web API call.
        jQuery.getJSON(_requestUrl).done(function (data: any) {
            alert(data);
        }).fail(function (data: DOMException) {
            alert(data.message);
        });
    }
    
    // Not support related weather warning.
    findWeatherWarnings() {
        return null;
    }
}