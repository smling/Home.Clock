class PhotoWidget
{
    private imageCount: number = 100;
    
    findRandomImage()
    {
        let randomImage = Math.round(Math.random() * this.imageCount);
        console.debug(randomImage.toString());
    }

    start()
    {
        setInterval(() => this.findRandomImage(), 1000);
    }
}