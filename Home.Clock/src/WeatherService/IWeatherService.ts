interface IWeatherService
{
    findCurrentObservation(latitude: number, longitude: number)
    findWeatherWarnings();
}