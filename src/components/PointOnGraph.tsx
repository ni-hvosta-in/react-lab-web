import { useMemo } from "react";
import type { Point } from "../classes/Point";

interface PointOnGraphProps{
    point: Point;
    currentR: number;
    Rx: number;
    Ry: number;
}
export function PointOnGraph({point, currentR, Rx, Ry}: PointOnGraphProps){

    let cx: number = useMemo(() => {
        return (point.x / point.r) * Rx
    }, [Rx]);

    let cy: number = useMemo(() => {
        return (-point.y / point.r) * Ry
    }, [Ry]);

    return (
            <g>
                {currentR == point.r && <circle cx={cx} cy={cy} r={2} fill={point.isHit ? "green" : "red"}/>}            
                {currentR != point.r && <circle cx={cx} cy={cy} r={2} fill="grey"/>}
            </g>
            );

}