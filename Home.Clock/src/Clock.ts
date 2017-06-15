class Clock {
    element: HTMLElement;
    timerToken: number;

    //private _clock: flipclock.IFlipClock;
    private _clockElement: HTMLElement;
    private _dateElement: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this._clockElement = document.getElementById("Clock");
        this._dateElement=document.getElementById("Date")
        setInterval(()=>this.start(), 1000);
    }

    start() {
        let now: Date = new Date();
        let hourStr: string = (now.getHours() < 10 ? "0" : "") + now.getHours().toString();
        let minuteStr: string = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes().toString();
        let secondStr: string = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds().toString();
        this._clockElement.textContent = hourStr + ":" + minuteStr + ":" + secondStr;
        
        let yearStr: string = now.getFullYear().toString();
        let monthStr: string = ((now.getMonth()+1) < 10 ? "0" : "") + (now.getMonth()+1).toString();
        let dateOfMonthStr: string = (now.getDate() < 10 ? "0" : "") + now.getDate().toString();

        this._dateElement.textContent = yearStr + "-"+monthStr+ "-" + dateOfMonthStr;
    }
}