declare class Clock {
    element: HTMLElement;
    timerToken: number;
    private _clockElement;
    private _dateElement;
    constructor(element: HTMLElement);
    start(): void;
}
declare class FlipDate {
    private _element;
    private _dateContentElement;
    private _yearElement;
    private _monthElement;
    private _dateOfMonthElement;
    private _date;
    constructor(element: HTMLElement);
    start(): void;
}
declare class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    constructor(element: HTMLElement);
    start(): void;
    stop(): void;
}
declare class PhotoWidget {
    private imageCount;
    private _element;
    private _imageElement;
    constructor(element: HTMLElement);
    private findRandomImage();
    start(): void;
}
interface IRenderer {
    render(weatherWarnings: Array<WeatherWarning>): any;
}
declare abstract class IWeatherService {
    protected _weatherObservation: HTMLElement;
    protected _weatherWarning: HTMLElement;
    constructor(weatherObservation?: HTMLElement, weatherWarning?: HTMLElement);
    abstract findCurrentObservation(latitude: number, longitude: number): any;
    abstract findWeatherWarnings(): any;
}
declare class WeatherCondition {
    DataSource: string;
    DataSourceIconUrl: string;
    IconName: string;
    IconUrl: string;
    Location: string;
    ObservationTime: Date;
    RelativeHumidityString: string;
    TempetureFullString: string;
    TempetureInCensus: number;
    UV: number;
}
declare class WeatherUndergroundService extends IWeatherService {
    protected _rootPath: string;
    protected _apiKey: string;
    protected _conditionPath: string;
    start(): void;
    findCurrentObservation(latitude: number, longitude: number): void;
    findWeatherWarnings(): any;
}
declare class WeatherWarning {
    name: string;
    publishDate: Date;
}
declare class ObservatoryWeatherService extends IWeatherService {
    private _weatherWarningWebPath;
    findCurrentObservation(latitude: number, longitude: number): void;
    findWeatherWarnings(): void;
}
declare class WeatherWarningRenderer implements IRenderer {
    private _element;
    constructor(element: HTMLElement);
    render(weatherWarnings: Array<WeatherWarning>): void;
    private createNewDiv(html);
}
