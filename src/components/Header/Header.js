import React from 'react'
import classes from './Header.module.scss'

const Header = (props) => {
    let cls = [classes.Huge_text]
    if (props.fontSize === 72) {
        cls.push(classes.p72)
    } if (props.fontSize === 56) {
        cls.push(classes.p56)
    } if (props.fontSize === 30) {
        cls.push(classes.p30)
    }
    return (
        <h1 className={cls.join(" ")} style={{
            lineHeight: props.lineHeight,
            padding: props.padding,
            textAlign: props.align,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom
        }}>{props.text}</h1>
    )
}

export default Header