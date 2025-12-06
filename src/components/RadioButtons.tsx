import "../cssComponents/RadioButtons.css"

interface RadioButtonsProps {
    values: string[]
    label: string;
    selected: string;
    setValue: (value: string) => void;
}
export default function RadioButtons({values, label, selected, setValue}: RadioButtonsProps) {
    
    function setSelected(value: string){
        setValue(value);
    }
    
    return (
        <div className="radio-wrapper">
            <label>{label}</label>
            <ul className="radioButtons">
                {
                values.map((button, index) => 
                    <li key={index} className="radio-item">
                        <button type="button"  className={`x-button ${selected === button ? "selected" : ""}`} onClick={() => setSelected(button)}>{button}</button>
                    </li>)
                }
            </ul>
        </div>
    );
}
