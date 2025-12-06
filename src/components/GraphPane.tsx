import { useMemo } from "react";
import "../cssComponents/GraphPane.css";
import CoordinateAxes from "./CoordinateAxes";
import type { Point } from "../classes/Point";
import Areas from "./Areas";
import PointOnGraph from "./PointOnGraph";

interface GraphPaneProps {
    currentR:number
    points: Point[];
}
export default function GraphPane({currentR, points}: GraphPaneProps){
    
    let minX: number = -100;
    let minY: number = -100;
    let width: number = 200;
    let height: number = 200;
    
    let maxX: number = minX + width;
    let maxY: number = minY + height;

    let labels: string[] = ["-R", "-R/2", "0", "R/2", "R"]; 
    let markingsCount: number = labels.length;

    let stepX: number = useMemo(() => {
        return (currentR / 5) * (maxX - minX) / markingsCount
    }, [currentR])

    let stepY: number = useMemo(() => {
        return (currentR / 5) * (maxY - minY) / markingsCount
    }, [currentR])

    let Rx: number = useMemo(() => {
        return stepX * (markingsCount-1) / 2;
    }, [stepX]);

    let Ry: number = useMemo(() => {
        return stepY * (markingsCount-1) / 2;
    }, [stepY]);



    return (
    <svg width="400" height="400" viewBox = {`${minX} ${minY} ${width} ${height}`} className="graph-pane">
        <CoordinateAxes minX={-100} maxX={100} minY={-100} maxY={100} labels={labels} stepX = {stepX} stepY={stepY}/>
        <Areas Rx={Rx} Ry={Ry}/>
        {
        points.map((point) => (
            <PointOnGraph key = {point.id} currentR={currentR} Rx={Rx} Ry={Ry} point={point}/>
        ))
        }
    </svg>);
}