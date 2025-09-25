import React from "react";
import classes from "./input.module.scss"


const Input = (props) => {
    return (
        <input value={props.value} className={classes.Input} onChange={props.onChange} type={props.type} placeholder={props.placeholder} />
    )
}

export default Input