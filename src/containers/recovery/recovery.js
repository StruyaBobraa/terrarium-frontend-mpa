import React, {  useState } from "react";
import classes from './recovery.module.scss'
import Header from "@/components/Header/Header";
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import CodeInput from "@/components/ui/codeInput/codeInput";


const Recovery = (props) => {
    const [step, setStep] = useState(1)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [number, setNumber] = useState("")
    const [currentCode, setCurrentCode] = useState('');

    const handleCodeChange = (code) => {
        setCurrentCode(code);
    };

    const handleComplete = (code) => {
        if (code === number){
            setStep(3)
        } else {
            alert("Неверный код")
        }
    };

    function step1() {
        return (
            <div className={classes.Form}>
                <h1>Введите номер телефона</h1>
                <p>Мы пришлем код на указанный номер</p>
                <Input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="+7 (___) ___-__-__" type="text"/>
                <Button onClick={() => setStep(2)} textContent="Далее"/>
            </div>
        )
    }

    function step2() {
        return (
            <div className={classes.Form}>
                <h1>Введите код</h1>
                <CodeInput 
                    length={4}
                    onChange={handleCodeChange}
                    onComplete={handleComplete}
                />
            </div>
        )
    }

    function step3() {
        return (
            <div className={classes.Form}>
                <div>
                    <span>Придумайте пароль</span>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password"/>
                </div>
                <div>
                    <span>Подтвердите пароль</span>
                    <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Пароль" type="password"/>
                </div>
                <Button href="/" textContent="Далее"/>
            </div>
        )
    }

    return (
        <div className={classes.Wrapper}>
            <Header fontSize={56} text="Восстановление пароля"/>
            {
                step === 1 && step1()
            }
            {
                step === 2 && step2()
            }
            {
                step === 3 && step3()
            }
        </div>
    )
}

export default Recovery