import "../cssComponents/inputNumber.css"
interface InputNumberProps {
    label: string;
    setNum: (num: string) => void;        
}

export default function InputNumber({label, setNum}:InputNumberProps){

    return (
        <div className = "InputNumber">
            <label htmlFor="input-number">{label}</label>
            <input type="number" onChange = {(event) => setNum(event.target.value)} className = "input-number"/>
        </div>
    );
}