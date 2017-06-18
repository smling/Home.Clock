var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClockWidget = (function (_super) {
    __extends(ClockWidget, _super);
    function ClockWidget(element) {
        var _this = _super.call(this, element) || this;
        _this._clockElement = _super.prototype.appendDivElement.call(_this, "Clock");
        _this._dateElement = _super.prototype.appendDivElement.call(_this, "Date");
        setInterval(function () { return _this.start(); }, 1000);
        return _this;
    }
    ClockWidget.prototype.start = function () {
        var now = new Date();
        var hourStr = (now.getHours() < 10 ? "0" : "") + now.getHours().toString();
        var minuteStr = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes().toString();
        var secondStr = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds().toString();
        this._clockElement.textContent = hourStr + ":" + minuteStr + ":" + secondStr;
        var yearStr = now.getFullYear().toString();
        var monthStr = ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1).toString();
        var dateOfMonthStr = (now.getDate() < 10 ? "0" : "") + now.getDate().toString();
        this._dateElement.textContent = yearStr + "-" + monthStr + "-" + dateOfMonthStr;
    };
    return ClockWidget;
}(WidgetBase));
