import React from 'react'
import classes from './navbar.module.scss'
import Header from '@/components/Header/Header'

const Navbar = () => {
    return (
        <div className={classes.Wrapper}>
            <Header lineHeight={"32px"} fontSize={30} text="*Logo*"/>
            <div className={classes.Links}>
                <p>*Link 1*</p>
                <p>*Link 2*</p>
                <p>*Link 3*</p>
                <h1>*Auth status*</h1>
            </div>
        </div>
    )
}

export default Navbar