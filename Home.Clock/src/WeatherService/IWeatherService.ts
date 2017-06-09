abstract class IWeatherService
{
    protected _weatherObservation: HTMLElement;    
    protected _weatherWarning: HTMLElement;

    constructor(weatherObservation?: HTMLElement, weatherWarning?: HTMLElement)
    {
        this._weatherObservation = weatherObservation;
        this._weatherWarning = weatherWarning;
    }

    abstract findCurrentObservation(latitude: number, longitude: number);
    abstract findWeatherWarnings();
}