/// <reference path="WidgetBase.ts" />
/// <reference path="Settings.ts" />
class PhotoWidget extends WidgetBase
{
    private imageCount: number = 86;
    private _imageElement: HTMLImageElement;

    constructor(element: HTMLElement)
    {
        super(element);
        this._imageElement = super.appendElement("photo", "img") as HTMLImageElement;
    }

    private findRandomImage()
    {
        $("#" + this._element.id).fadeOut();
        let randomImage:number = Math.round(Math.random() * this.imageCount);
        this._imageElement.src = Settings.PhotoWidgetImageSource.replace("{ImageNo}", randomImage.toString());
        console.debug("Image reloaded. URL: "+this._imageElement.src);
        $("#" + this._element.id).fadeIn();
    }

    start()
    {
        // Execute once then run in interval.
        this.findRandomImage();
        setInterval(() => this.findRandomImage(), this.getExecuteMillSecond(Settings.PhotoWidgetImageReloadSeconds));
    }
}