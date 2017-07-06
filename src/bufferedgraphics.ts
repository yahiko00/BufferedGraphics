// bufferedgraphics.ts

export interface Graphics {
    visible: boolean;
    clear(): void;
} // Graphics

export class BufferedGraphics<T extends Graphics> {
    private isSwitched: boolean;
    private graphicsA: T;
    private graphicsB: T;
    constructor(type: { new(): T ;}) {
        this.isSwitched = false;
        this.graphicsA = new type();
        this.graphicsB = new type();
    } // constructor

    switchBuffer() {
        if (!this.isSwitched) {
            this.graphicsA.visible = false;
            this.graphicsB.visible = true;
        }
        else {
            this.graphicsA.visible = true;
            this.graphicsB.visible = false;
        }
        this.isSwitched != this.isSwitched;
    } // switchBuffer

    getMain() {
        if (!this.isSwitched) {
            return this.graphicsA;
        }
        else {
            return this.graphicsB;
        }
    } // getMain

    getBuffer() {
        if (!this.isSwitched) {
            return this.graphicsB;
        }
        else {
            return this.graphicsA;
        }
    } // getBuffer

    clearGraphics() {
        this.getMain().clear();
    } // clearGraphics

    clearBuffer() {
        this.getBuffer().clear();
    } // clearBuffer
} // BufferedGraphics

export default BufferedGraphics;
