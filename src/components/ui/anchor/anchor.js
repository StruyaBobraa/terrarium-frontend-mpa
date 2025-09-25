import React from "react";
import classes from "./anchor.module.scss";

const Anchor = (props) => {
    return (
        <a href={props.href} className={classes.Anchor} onClick={props.onClick}>{props.text}</a>
    )
}

export default Anchor