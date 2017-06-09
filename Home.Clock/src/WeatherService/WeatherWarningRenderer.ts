class WeatherWarningRenderer implements IRenderer {
    private _element: HTMLElement;
    constructor(element: HTMLElement) {
        this._element = element;
    }
    render(weatherWarnings: Array<WeatherWarning>) {
        // Empty element.
        while (this._element.firstChild) {
            this._element.removeChild(this._element.firstChild);
        }

        // If No weather warning, show no weather warning message.
        if ((weatherWarnings == null) || (weatherWarnings.length == 0)) {
            this._element.appendChild(this.createNewDiv("There is no weather warning."));
        } else {

            for (let weatherWarning of weatherWarnings) {
                this._element.appendChild(this.createNewDiv(weatherWarning.name));
            }
        }
    }

    private createNewDiv(html: string) {
        var weatherWarningElement = document.createElement("div");
        weatherWarningElement.innerHTML = html;
        return weatherWarningElement;
    }
}