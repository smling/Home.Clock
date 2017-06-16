class PhotoWidget
{
    private imageCount: number = 100;
    private _element: HTMLElement;

    constructor(element: HTMLElement)
    {
        this._element = element;
    }

    private findRandomImage()
    {
        $("#" + this._element.id).fadeOut();
        let randomImage = Math.round(Math.random() * this.imageCount);
        console.debug(randomImage.toString());
        
        $("#" + this._element.id).fadeIn();
    }

    start()
    {
        setInterval(() => this.findRandomImage(), 5000);
    }
}