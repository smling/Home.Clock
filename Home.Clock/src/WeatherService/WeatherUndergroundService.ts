class WeatherUndergroundService extends IWeatherService {
    findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>) {
        // Get Web service path.
        let url: string = this.createRequestUrl().replace("{lat}", latitude.toString()).replace("{long}", longitude.toString());;

        // Get result from Web API call.
        jQuery.getJSON(url).done(function (data: any) {
            console.debug("data found.");
            doneCallback(data);
        }).fail(function (data: DOMException) {
            failCallBack(data);
        });
    }
    
    // Not support related weather warning.
    findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>) {
        throw new Error("Not implmement yet.");
    }

    private createRequestUrl():string
    {
        return this._rootPath + "/" + this._apiKey + "/" + this._requestUrl;
    }
}