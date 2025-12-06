import { useEffect, useState, type FormEvent } from "react";
import InputNumber from "../components/InputNumber";
import RadioButtons from "../components/RadioButtons";
import "../cssComponents/mainPage.css"
import GraphPane from "../components/GraphPane";
import toast from "react-hot-toast";
import { Point } from "../classes/Point";
import { useNavigate } from "react-router-dom";

export default function MainPage(){

    const navigate = useNavigate();
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [r, setR] = useState("5");
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        console.log(x, y, r);
    }, [x, y, r]);

   
    useEffect(() => {
        const token = sessionStorage.getItem("token") || "";
        if (!token) {
            navigate('/');
        }

        async function getPoints() {
            
            let response = await fetch(serverAdress + "/hit", {
                method: "GET",
                headers: {
                    "Authorization": token
                }
            });

            if (!response.ok) {
                toast.error("Ошибка: " + response.status);
                return;
            }

            let data: Point[] = await response.json();  
            if (response.ok){
                setPoints(data);
            }
        }

        getPoints();

    }, [])
    
    const token = sessionStorage.getItem("token") || "";
    const serverAdress: string = "http://localhost:8080";
   


    let xValues: string[] = ['-4', '-3', '-2', '-1', '0', '1', '2', '3', '4'];
    let rValues: string[] = ['1', '2', '3', '4', '5'];

     async function sendForm(event: FormEvent<HTMLFormElement>){

        event.preventDefault();
        if (x === "" || y === "" || r === ""){
            toast.error('Пожалуйста, заполните все поля формы.');
            return;
        }

        await sendPoint(Number(x), Number(y), Number(r));
        
    }

    async function sendPoint(x: number, y: number, r: number) {

        console.log(`Token: ${token}`);
        let response = await fetch(serverAdress + "/hit", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    x: Math.round(x*100)/100,
                    y: Math.round(y*100)/100,
                    r: Math.round(r*100)/100,
                    token: token
                })

            });
        
        if (response.status === 401) {
            toast.error("Сессия истекла. Пожалуйста, войдите снова.");
            navigate('/');
            return;
        }
        if (!response.ok) {
            toast.error("Ошибка при отправке данных. Пожалуйста, попробуйте снова.");
            return;
        }

        const data = await response.json();
        let idresp: number = data.id;
        let xresp: number = data.x;
        let yresp: number = data.y;
        let rresp: number = data.r;
        let isHit: boolean = data.isHit;
        let time: string = data.currTime;
        
        
        let point = new Point(idresp, xresp, yresp, rresp, isHit, time);
        console.log(point);
        setPoints(prev => [point, ...prev])
        toast.success("Точка успешно добавлена!");
        
    }

    
    return (
        <div className="wrapper">

            <GraphPane currentR = {Number(r)} points={points}/>
            <form className="form" onSubmit={(event) => sendForm(event)}>
                <RadioButtons values = {xValues} label={"Выберите X"} selected = {x} setValue={setX}/> 
                <InputNumber label={"Введите Y"} setNum={setY}/>
                <RadioButtons values = {rValues} label={"Выберите R"} selected = {r} setValue={setR}/> 
                <button type="submit">Отправить</button>
            </form>
            
        </div>
    )
}