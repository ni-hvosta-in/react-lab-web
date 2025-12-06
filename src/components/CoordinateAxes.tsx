import { useMemo } from "react";
import "../cssComponents/coordinateAxes.css"

interface CoordinateAxesProps {
    minX: number;  
    minY: number;  
    maxX: number;  
    maxY: number;  
    stepX: number;
    stepY: number    
    labels: string[];
    
}

export default function CoordinateAxes({minX, minY, maxX, maxY, stepX, stepY, labels}:CoordinateAxesProps){

    let width: number = maxX - minX;
    let height: number = maxY - minY;
    let markingsCount: number = labels.length;

    let xMarkings = useMemo(() => {
        return Array.from({length: markingsCount}, (_, i) => 
            stepX * (i - (markingsCount - 1) / 2)
        )
    }, [stepX]);

    let yMarkings = useMemo(() => {
        return Array.from({length: markingsCount}, (_, i) => 
            stepY * (-i + (markingsCount - 1) / 2)
        )
    }, [stepY]);


    return (
        <g className = "coordinate-axes">
            
            <line x1 = {0} y1 = {minY * 0.97} x2 = {0}  y2 = {maxY * 0.97} className="axis-line"/>
            <polygon points={`${maxX * 0.97}, ${height/150} ${maxX}, ${0} ${maxX * 0.97}, ${-height/150}`} fill="var(--axis-color)"/>

            <line x1 = {minX * 0.98 } y1 = {0} x2 = {maxX * 0.98} y2 = {0} className="axis-line"/>
            
            <polygon points={`${width / 150}, ${ -maxY * 0.97} ${0}, ${-maxY} ${-width/150}, ${-maxY * 0.97}`} fill="var(--axis-color)"/>    
            {
                xMarkings.map((xMark, i) =>
                    <>
                        <line x1={xMark} y1={-(height)/100} x2={xMark} y2={height/100} className="axis-line"/>
                        <text x={xMark} y={height/100} className="axis-label" textAnchor="middle" dominant-baseline="hanging">{labels[i]}</text>  
                    </>                 
                )
            }
            {
                yMarkings.map((yMark, i) =>
                    <>
                        <line x1={-(width)/100} y1={yMark} x2={width/100} y2={yMark} className="axis-line"/>
                        <text x={-(width)/100} y={yMark} className="axis-label" text-anchor="end" dominant-baseline="middle">{labels[i]}</text>
                    </>
                )
            }
        </g>
    );
}