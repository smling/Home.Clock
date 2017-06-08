declare class Clock {
    element: HTMLElement;
    timerToken: number;
    constructor(element: HTMLElement);
    start(): void;
    stop(): void;
}
declare class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    constructor(element: HTMLElement);
    start(): void;
    stop(): void;
}
interface IWeatherService {
    findCurrentObservation(latitude: number, longitude: number): any;
    findWeatherWarnings(): any;
}
declare class ObservatoryWeatherService implements IWeatherService {
    private _weatherWarningWebPath;
    findCurrentObservation(latitude: number, longitude: number): void;
    findWeatherWarnings(): WeatherWarning[];
}
declare class WeatherUndergroundService implements IWeatherService {
    protected _rootPath: string;
    protected _apiKey: string;
    protected _conditionPath: string;
    findCurrentObservation(latitude: number, longitude: number): void;
    findWeatherWarnings(): any;
}
declare class WeatherWarning {
    name: string;
    publishDate: Date;
}
