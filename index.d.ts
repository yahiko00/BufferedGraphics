export interface Graphics {
    visible: boolean;
    clear(): void;
}
export declare class BufferedGraphics<T extends Graphics> {
    private isSwitched;
    private graphicsA;
    private graphicsB;
    constructor(type: {
        new (): T;
    });
    switchBuffer(): void;
    getMain(): T;
    getBuffer(): T;
    clearGraphics(): void;
    clearBuffer(): void;
}
export default BufferedGraphics;
