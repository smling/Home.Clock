var WidgetBase = (function () {
    function WidgetBase(element) {
        this._element = element;
    }
    WidgetBase.prototype.appendDivElement = function (id) {
        return this.appendElement(id, "div");
    };
    WidgetBase.prototype.appendElement = function (id, tagName) {
        var result;
        if (this._element != null) {
            result = document.createElement(tagName);
            result.id = id;
            this._element.appendChild(result);
        }
        return result;
    };
    WidgetBase.prototype.getExecuteMillSecond = function (second) {
        return second * 1000;
    };
    return WidgetBase;
}());
