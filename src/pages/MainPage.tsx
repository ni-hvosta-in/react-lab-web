import { useEffect, useState } from "react";
import InputNumber from "../components/InputNumber";
import RadioButtons from "../components/RadioButtons";
import "../cssComponents/mainPage.css"
export default function MainPage(){

    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [r, setR] = useState("5");

    useEffect(() => {
        console.log(x, y, r);
    }, [x, y, r]);

    let xValues: string[] = ['-4', '-3', '-2', '-1', '0', '1', '2', '3', '4'];
    let rValues: string[] = ['1', '2', '3', '4', '5'];

    
    return (
        <div className="wrapper">
            <form className="form">
                <RadioButtons values = {xValues} label={"Выберите X"} selected = {x} setValue={setX}/> 
                <InputNumber label={"Введите Y"} setNum={setY}/>
                <RadioButtons values = {rValues} label={"Выберите R"} selected = {r} setValue={setR}/> 
            </form>
        </div>
    )
}