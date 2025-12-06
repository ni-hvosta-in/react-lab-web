class Point {
    id: number;
    x: number;
    y: number;
    r: number;
    isHit: boolean;
    currTime: string;

    constructor(id: number, x: number, y: number, r: number, isHit: boolean, currTime: string) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = isHit;
        this.currTime = currTime;
    }

    toString(){
        return `id: ${this.id} x: ${this.x} y: ${this.y} r: ${this.r} isHit: ${this.isHit} currTime ${this.currTime}`;
    }
}
export { Point };