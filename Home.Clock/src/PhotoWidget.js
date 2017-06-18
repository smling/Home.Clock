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
var PhotoWidget = (function (_super) {
    __extends(PhotoWidget, _super);
    function PhotoWidget(element) {
        var _this = _super.call(this, element) || this;
        _this.imageCount = 86;
        _this._imageElement = _super.prototype.appendElement.call(_this, "photo", "img");
        return _this;
    }
    PhotoWidget.prototype.findRandomImage = function () {
        $("#" + this._element.id).fadeOut();
        var randomImage = Math.round(Math.random() * this.imageCount);
        this._imageElement.src = Settings.PhotoWidgetImageSource.replace("{ImageNo}", randomImage.toString());
        console.debug("Image reloaded. URL: " + this._imageElement.src);
        $("#" + this._element.id).fadeIn();
    };
    PhotoWidget.prototype.start = function () {
        var _this = this;
        this.findRandomImage();
        setInterval(function () { return _this.findRandomImage(); }, this.getExecuteMillSecond(Settings.PhotoWidgetImageReloadSeconds));
    };
    return PhotoWidget;
}(WidgetBase));
