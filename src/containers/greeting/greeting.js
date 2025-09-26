import React, { useState } from "react";
import classes from "./greeting.module.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Anchor from "@/components/ui/anchor/anchor";

const Greeting = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className={classes.Wrapper}>
            <Header fontSize={56} text="Доброе утро!"/>
            <p className={classes.label}>Пожалуйста, войдите в свой аккаунт чтобы продолжить</p>
            <div className={classes.Form}>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password"/>
                <p>Забыли пароль? <Anchor href="/recovery" text="Восстановить"/></p>
                <Button onClick={() => props.onLoginClick(email, password)} textContent="Войти" type="gray"/>
            </div>
            <div className={classes.other}>
                <p>Другие способы входа</p>
                <div className={classes.others}>
                    <button/>
                    <button/>
                    <button/>
                </div>
            </div>
            <p className={classes.register}>У вас нет аккаунта?<br/><Anchor href="/registration" text="Зарегистрироваться"/></p>
        </div>
    )
}

export default Greeting