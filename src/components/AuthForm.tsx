import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {

    const [typeOfAuth, setTypeOfAuth] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorTextForUser, setErrorText] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{
        setErrorText("");
    }, [typeOfAuth, login, password, repeatPassword]);

    const AuthType = {
        SIGN_IN: "Sign in",
        SIGN_UP: "Sign up"
    } as const;

    type AuthType = typeof AuthType[keyof typeof AuthType];

    async function postForm(event: React.FormEvent<HTMLFormElement>){
        
        event.preventDefault();
        
        if (typeOfAuth === AuthType.SIGN_UP && password !== repeatPassword) {
            setErrorText("Пароли не совпадают");
            return;
        }

        setErrorText("");

        try{

            let response = await fetch('http://localhost:8080/auth', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login: login,
                        password: password,
                        typeOfAuth: typeOfAuth
                    })
                });
                
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);  
                sessionStorage.setItem('token', data.token);
                navigate("/main");
                setErrorText("");
            } else {
                setErrorText(data.message);
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert("Сервер недоступен. Попробуйте позже.");
        }
    }

    const renderContent = () => {
        if (typeOfAuth == "") {
            return (
                    <div className="authForm">
                        <button onClick={() => setTypeOfAuth(AuthType.SIGN_IN)}>{AuthType.SIGN_IN}</button>
                        <button onClick={() => setTypeOfAuth(AuthType.SIGN_UP)}>{AuthType.SIGN_UP}</button>
                    </div>
                    );
        } else {
            
            return (

                <form className="authForm" onSubmit={postForm}> 
                    <input type="text" placeholder="Введите логин" onChange={(event) => {setLogin(event.target.value)}}/>
                    <input type="password" placeholder="Введите пароль" onChange={(event) => {setPassword(event.target.value)}}/>
                    {typeOfAuth == AuthType.SIGN_UP && <input type="password" placeholder="Повторите пароль" onChange={(event) => {setRepeatPassword(event.target.value)}}/>}

                    <button type = "submit">{typeOfAuth == AuthType.SIGN_IN ? AuthType.SIGN_IN : AuthType.SIGN_UP}</button>
                    <button onClick={() => setTypeOfAuth("")} type="button">Back</button>
                    {errorTextForUser}
                    
                </form>
                
                );

        }
    }

    return (
        <div>
           {renderContent()}
        </div>
    );
}