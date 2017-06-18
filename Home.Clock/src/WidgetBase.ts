// Abstract class for base Widget in which include base append HTML methods.
abstract class WidgetBase {
        protected _element: HTMLElement;

        constructor(element: HTMLElement) {
            this._element = element;
        }

        abstract start(): void;

        protected appendDivElement(id: string): HTMLElement {
            return this.appendElement(id, "div");
        }

        protected appendElement(id: string, tagName: string): HTMLElement {
            let result: HTMLElement;
            if (this._element != null) {
                result = document.createElement(tagName);
                result.id = id;
                this._element.appendChild(result);
            }
            return result;
        }

        protected getExecuteMillSecond(second: number): number
        {
            return second * 1000;
        }
    }