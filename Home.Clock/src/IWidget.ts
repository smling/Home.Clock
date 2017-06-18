abstract class BaseWidget {
    protected _element: HTMLElement;

    abstract start(): void;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    protected appendDivElement(id: string): HTMLElement {
        return this.appendElement("div", id);
    }

    protected appendElement(tagName: string, id: string): HTMLElement
    {
        let result: HTMLElement = document.createElement(tagName);
        result.id = id;
        this._element.appendChild(result);
        return result;
    }


}