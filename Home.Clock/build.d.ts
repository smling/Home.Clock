declare abstract class WidgetBase {
    protected _element: HTMLElement;
    constructor(element: HTMLElement);
    abstract start(): void;
    protected appendDivElement(id: string): HTMLElement;
    protected appendElement(id: string, tagName: string): HTMLElement;
    protected getExecuteMillSecond(second: number): number;
}
declare class ClockWidget extends WidgetBase {
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
declare enum WeatherServiceSources {
    ObservatoryWeatherService = 0,
    WeatherUndergroundService = 1,
}
declare class Settings {
    static currnetLocationLat: number;
    static currnetLocationLong: number;
    static WeatherConditionService: WeatherServiceSources;
    static WeatherConditionServiceRootPath: string;
    static WeatherConditionServiceApiKey: string;
    static WeatherConditionServiceRequestUrl: string;
    static WeatherConditionServiceReloadSeconds: number;
    static WeatherWarningService: WeatherServiceSources;
    static WeatherWarningServiceRootPath: string;
    static WeatherWarningServiceApiKey: string;
    static WeatherWarningServiceRequestUrl: string;
    static WeatherWarningServiceReloadSeconds: number;
    static PhotoWidgetImageSource: string;
    static PhotoWidgetImageReloadSeconds: number;
}
declare class PhotoWidget extends WidgetBase {
    private imageCount;
    private _imageElement;
    constructor(element: HTMLElement);
    private findRandomImage();
    start(): void;
}
declare class WeatherWidget extends WidgetBase {
    private _weatherConditionService;
    private _weatherWarningService;
    constructor(element: HTMLElement);
    start(): void;
    private updateWeatherCondition();
    private createWeatherService(weatherService, rootPath, apiKey, requestUrl);
}
interface IRenderer {
    render(weatherWarnings: Array<WeatherWarning>): any;
}
declare abstract class IWeatherService {
    protected _weatherObservation: HTMLElement;
    protected _weatherWarning: HTMLElement;
    protected _rootPath: string;
    protected _apiKey: string;
    protected _requestUrl: string;
    constructor(rootPath: string, apiKey: string, requestUrl: string);
    abstract findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): any;
    abstract findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): any;
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
    findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): void;
    findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): void;
    private createRequestUrl();
}
declare class WeatherWarning {
    name: string;
    publishDate: Date;
}
declare class ObservatoryWeatherService extends IWeatherService {
    private _weatherWarningWebPath;
    findCurrentObservation(latitude: number, longitude: number, doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): void;
    findWeatherWarnings(doneCallback: JQueryPromiseCallback<any>, failCallBack: JQueryPromiseCallback<any>): void;
}
declare class WeatherWarningRenderer implements IRenderer {
    private _element;
    constructor(element: HTMLElement);
    render(weatherWarnings: Array<WeatherWarning>): void;
    private createNewDiv(html);
}
