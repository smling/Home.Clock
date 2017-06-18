class PhotoWidget
{
    private imageCount: number = 86;
    private _element: HTMLElement;
    private _imageElement: HTMLImageElement;

    constructor(element: HTMLElement)
    {
        this._element = element;
        this._imageElement = document.createElement("img") as HTMLImageElement;
        this._element.appendChild(this._imageElement);
    }

    private findRandomImage()
    {
        $("#" + this._element.id).fadeOut();
        let randomImage:number = Math.round(Math.random() * this.imageCount);
        this._imageElement.src = "images/photos/1%20(" + randomImage.toString() + ").JPG";
        console.debug(randomImage.toString());
        
        $("#" + this._element.id).fadeIn();
    }

    start()
    {
        setInterval(() => this.findRandomImage(), 5000);
    }
}