import React, { useState } from "react";
import classes from './registration.module.scss'
import Header from "@/components/Header/Header";
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Anchor from "@/components/ui/anchor/anchor";

const Registration = (props) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className={classes.Wrapper}>
            <Header fontSize={56} text="Регистрация"/>
            <div className={classes.Form}>
                <div>
                    <p>Имя</p>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Маргарита" type="text"/>
                </div>
                <div>
                    <p>Номер телефона</p>
                    <Input value={number} onChange={(e) => setNumber(e.target.value)} placeholder="+7 (___) ___-__-__" type="text"/>
                </div>
                <div>
                    <p>Придумайте пароль</p>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password"/>
                </div>
                <div>
                    <p>Подтвердите пароль</p>
                    <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Пароль" type="password"/>
                </div>
                
            </div>
            <Button href="/" textContent="Завершить регистрацию"/>
        </div>
    )
}

export default Registration