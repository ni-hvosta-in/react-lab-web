import "../cssComponents/Areas.css"
interface AreasProps{
    Rx: number;
    Ry: number;
}
export default function Areas({Rx, Ry} : AreasProps){
    return (
        <g>
            <rect x={-Rx/2} y={-Ry} width={Rx/2} height={Ry} className="area"/>
            <polygon points = {`${-Rx}, ${0} ${0}, ${0} ${0}, ${Ry}`} className="area"/>
            <path d = {`M 0 0 L ${Rx/2} 0 A ${Rx/2} ${Ry/2} 0 0 0 0 ${-Ry/2} Z`} className="area"/>
        </g>
    );
}