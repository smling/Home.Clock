abstract class IWeatherService
{
    protected _weatherObservation: HTMLElement;    
    protected _weatherWarning: HTMLElement;

    protected _rootPath: string;
    protected _apiKey: string;
    protected _requestUrl: string;

    //constructor(weatherObservation?: HTMLElement, weatherWarning?: HTMLElement)
    //{
    //    this._weatherObservation = weatherObservation;
    //    this._weatherWarning = weatherWarning;
    //}

    constructor(rootPath: string, apiKey: string, requestUrl: string)
    {
        this._rootPath = rootPath;
        this._apiKey = apiKey;
        this._requestUrl = requestUrl;
    }
    
    abstract findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>);
    abstract findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>);
}