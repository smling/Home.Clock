class WeatherUndergroundService extends IWeatherService {

    protected _rootPath: string = "http://api.wunderground.com/api/";
    protected _apiKey: string = "f1439c571fe4a431";

    // Get Condition by location. 
    // Sample: http://api.wunderground.com/api/f1439c571fe4a431/conditions/q/22.32,114.18.json
    protected _conditionPath: string = this._rootPath + this._apiKey + "/conditions/q/{lat},{long}.json";

    start() {
        this.findCurrentObservation(22.317930, 114.265863);
        setInterval(()=>this.findCurrentObservation(22.317930, 114.265863),1000*60);
    }


    findCurrentObservation(latitude: number, longitude: number) {
        // Get Web service path.
        let _requestUrl: string = this._conditionPath.replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());;

        // Get result from Web API call.
        jQuery.getJSON(_requestUrl).done(function (data: any) {
            console.debug("data found.")
            // Render data.
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
            (document.getElementById("ConditionIcon") as HTMLImageElement).src = "images/weather-underground-icon-png/"+result.IconName+".png";
            document.getElementById("Location").textContent = result.Location;
            document.getElementById("ObservationTime").textContent = result.ObservationTime.toString();
            document.getElementById("RelativeHumidityString").textContent = result.RelativeHumidityString;
            document.getElementById("TempetureFullString").textContent = result.TempetureFullString;
            document.getElementById("UV").textContent = result.UV.toString();

        }).fail(function (data: DOMException) {
            alert(data.message);
        });
    }
    
    // Not support related weather warning.
    findWeatherWarnings() {
        return null;
    }

    
}