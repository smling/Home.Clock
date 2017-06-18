var IWeatherService = (function () {
    function IWeatherService(rootPath, apiKey, requestUrl) {
        this._rootPath = rootPath;
        this._apiKey = apiKey;
        this._requestUrl = requestUrl;
    }
    return IWeatherService;
}());
