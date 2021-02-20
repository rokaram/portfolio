import React from 'react'
import { useState } from 'react'
import './Burger.css'

export const Burger = () => {
    let [burgerClass, setBurgerClass] = useState(['burger'])

    const burgerClick = () => {
        setBurgerClass(burgerClass.length === 1 ? [...burgerClass, 'burger--closed'] : ['burger'])
    }

    return (
        <div className={ burgerClass.join(' ') } onClick={ burgerClick }>
            <span className="burger__line burger__line-top"></span>
            <span className="burger__line burger__line-mid"></span>
            <span className="burger__line burger__line-bot"></span>
        </div>
    )
}