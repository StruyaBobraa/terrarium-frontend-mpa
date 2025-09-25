import React from "react";
import classes from "./button.module.scss"


const Button = (props) => {
    return (
        <a href={props.href} style={props.style} className={classes.Button} onClick={props.onClick}>{props.textContent}</a>
    )
}

export default Button