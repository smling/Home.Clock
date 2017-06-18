var WeatherWarningRenderer = (function () {
    function WeatherWarningRenderer(element) {
        this._element = element;
    }
    WeatherWarningRenderer.prototype.render = function (weatherWarnings) {
        while (this._element.firstChild) {
            this._element.removeChild(this._element.firstChild);
        }
        if ((weatherWarnings == null) || (weatherWarnings.length == 0)) {
            this._element.appendChild(this.createNewDiv("There is no weather warning."));
        }
        else {
            for (var _i = 0, weatherWarnings_1 = weatherWarnings; _i < weatherWarnings_1.length; _i++) {
                var weatherWarning = weatherWarnings_1[_i];
                this._element.appendChild(this.createNewDiv(weatherWarning.name));
            }
        }
    };
    WeatherWarningRenderer.prototype.createNewDiv = function (html) {
        var weatherWarningElement = document.createElement("div");
        weatherWarningElement.innerHTML = html;
        return weatherWarningElement;
    };
    return WeatherWarningRenderer;
}());
