class Clock {
    element: HTMLElement;
    timerToken: number;

    private _clock: flipclock.IFlipClock;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    start() {
        //this.timerToken = setInterval(() => this.element.innerHTML = moment().format("YYYY-MM-DD HH:mm:ss"), 500);
        //this.timerToken = setInterval(() => this.element.innerHTML = new Date().toUTCString(), 500);
        // Force start flip clock.
        let code: string = `
            $('#`+ this.element.id + `').FlipClock({
                    clockFace: 'TwelveHourClock'
				});`;
        //let dateDisplay: HTMLElement = document.createElement("div");
        //dateDisplay.innerHTML = new Date().toString();
        //console.debug(code);
        this._clock = eval(code);
        //Wthis.element.appendChild(dateDisplay);
    }
}