import type { Point } from "../classes/Point";
import "../cssComponents/Table.css";

interface TableProps {
    points: Point[];
}

export function Table({points} : TableProps){
    return (
        <div className="table-wrapper">
            <table className="results-table">
                <thead>
                    <tr>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                        <th>Result</th>
                        <th>Time</th>
                    </tr>
                </thead>
            </table>
            <div className="table-body-wrapper">
                <table className="results-table">
                    <tbody>
                        
                            {
                            points.map(point => (
                                <tr key={point.id}>
                                    <td>{point.x}</td>
                                    <td>{point.y}</td>
                                    <td>{point.r}</td>
                                    <td>{point.isHit ? "Попал✅" : "Промазал❌" }</td>
                                    <td>{point.currTime}</td>
                                </tr>  
                            ))
                            }
                           
                    </tbody>
                </table>
            </div>
        </div>
    );
}