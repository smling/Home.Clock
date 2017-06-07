class Clock
{
    element: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    start() {
        this.timerToken = setInterval(() => this.element.innerHTML = moment().format("YYYY-MM-DD HH:mm:ss"), 500);
        //this.timerToken = setInterval(() => this.element.innerHTML = new Date().toUTCString(), 500);
    }
    
    stop() {
        clearTimeout(this.timerToken);
    }
}
//http://api.wunderground.com/api/f1439c571fe4a431/conditions/q/22.32,114.18.json