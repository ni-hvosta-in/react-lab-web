import "../cssComponents/startPage.css"
import AuthForm from "../components/AuthForm"
export default function StartPage(){
    return (
        <div className='main'>
        <h1>Лабораторная работа №4</h1>
        <p className="fio">
            <a href="https://my.itmo.ru/persons/466207?p=1&amp;q=%D0%BA%D0%BE%D0%B2%D1%8B%D1%80%D1%88%D0%B8%D0%BD">Ковыршин Александр Сергеевич </a>
        </p>
        <p>P3217</p>
        <p>Micronaut + React</p>
        <AuthForm/>
        </div>
    )
}