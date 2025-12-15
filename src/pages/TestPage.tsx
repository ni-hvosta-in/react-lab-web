import { useState, useEffect } from "react";

export function TestPage(){

    const [fio, setFio] = useState("");
    const [date, setDate] = useState("");
    const [psz, setPsz] = useState(<></>);

    function generate(){
        setPsz(
                <div>
                    <h2>Прошу отчислить меня по собственному желанию</h2>
                    <p>{fio}</p>
                    <small>{date}</small>
                </div>
            );
    }

    return (
        <div>
            <div>
            <form style={{display:"flex", flexDirection:"column"}}>
                <input type="text" placeholder="ФИО" required onChange={(event) => setFio(event.target.value)}/>
                <input type="date" placeholder="Дата" required onChange={(event) => setDate(event.target.value)}/>
                <button type="button" onClick={() => generate()}>получить ПСЖ</button>
            </form>
            </div>
            {psz}
        </div>
    );
}