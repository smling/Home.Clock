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
    reload(): any;
}
declare class ObservatoryWeatherService implements IWeatherService {
    private _weatherWarningWebPath;
    getWeatherWarningSummary(): WeatherWarning[];
    reload(): void;
}
declare class OpenWeatherMapService implements IWeatherService {
    reload(): void;
}
declare class WeatherWarning {
    name: string;
    publishDate: Date;
}
