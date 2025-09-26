import React from 'react'
import classes from './navbar.module.scss'
import Header from '@/components/Header/Header'

const Navbar = () => {
    return (
        <div className={classes.Wrapper}>
            <Header lineHeight={"32px"} fontSize={30} text="Condifigurator"/>
            <div className={classes.Links}>
                <p>Made by:</p>
                <p>@c2btx</p>
                <p>@undeadpelmen</p>
                <h1>Unauthorised</h1>
            </div>
        </div>
    )
}

export default Navbar