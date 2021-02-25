import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Burger } from './Burger/Burger'
import './Header.css'

export const Header = () => {
    let [burgerActive, setBurgerActive] = useState(false)
    
    useEffect(() => {
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('.nav')

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav--active')
            if(nav.classList.contains('nav--active')) {
                setBurgerActive(true)
            } else {
                setTimeout(() => { 
                    setBurgerActive(false)
                }, 200)
            }
        })
    }, [])

    return (
        <header className="header">
            <div className="header__inner">
                <Burger />
                <ul className="nav">
                    {
                        burgerActive && 
                        <>
                            <li className="nav__link"><NavLink to="/home">Home</NavLink></li>
                            <li className="nav__link"><NavLink to="/aboutme">About Me</NavLink></li>
                            <li className="nav__link"><NavLink to="/games">Games</NavLink></li>
                        </>
                    }
                </ul>
            </div>
        </header>
    )
}