var FlipDate = (function () {
    function FlipDate(element) {
        this._element = element;
        this._yearElement = this._element.getElementsByClassName("year").item[0];
        this._monthElement = this._element.getElementsByClassName("month").item[0];
        this._dateOfMonthElement = this._element.getElementsByClassName("dateOfMonth").item[0];
        setInterval(this.start(), 1000);
    }
    FlipDate.prototype.start = function () {
        var now = new Date();
        this._yearElement.textContent = now.getFullYear().toString();
        this._monthElement.textContent = now.toLocaleString("en-us", { month: "short" });
        this._dateOfMonthElement.textContent = now.getDate().toString();
    };
    return FlipDate;
}());
