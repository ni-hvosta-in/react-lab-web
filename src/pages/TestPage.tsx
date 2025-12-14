import { useState } from "react";

export function TestPage(){

    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    let [succses, setSuccses] = useState(false);
    let typeOfAuth = "Sign in"
    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/auth', {
            method: "POST",
            headers: {
                 'Content-Type': 'application/json',
            }, 
            body: JSON.stringify ({
                login: login,
                password: password,
                typeOfAuth: typeOfAuth
            })
        });
        setSuccses(response.ok);
        console.log(response);
    }

    return (
        
            <form style={{
              display:"flex",
              flexDirection: "column"  
            }}
            onSubmit={submitForm}
            >
                <input type="text" placeholder="Логин" onChange = {event => setLogin(event.target.value)}/>
                <input type="password" placeholder="Пароль" onChange = {event => setPassword(event.target.value)}/>
                <button type="submit">Войти</button>
                {succses && <p>ПОБЕДА</p>}
            </form>
        );
}