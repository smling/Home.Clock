/// <reference path="WidgetBase.ts" />
class ClockWidget extends WidgetBase {
        private _clockElement: HTMLElement;
        private _dateElement: HTMLElement;

        constructor(element: HTMLElement) {
            super(element);
            this._clockElement = super.appendDivElement("Clock");
            this._dateElement = super.appendDivElement("Date");
            setInterval(() => this.start(), 1000);
        }

        start() {
            let now: Date = new Date();
            let hourStr: string = (now.getHours() < 10 ? "0" : "") + now.getHours().toString();
            let minuteStr: string = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes().toString();
            let secondStr: string = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds().toString();
            this._clockElement.textContent = hourStr + ":" + minuteStr + ":" + secondStr;

            let yearStr: string = now.getFullYear().toString();
            let monthStr: string = ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1).toString();
            let dateOfMonthStr: string = (now.getDate() < 10 ? "0" : "") + now.getDate().toString();

            this._dateElement.textContent = yearStr + "-" + monthStr + "-" + dateOfMonthStr;
        }
    }