import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import './Menu.css'

export const Menu = () => {
    const lang = useLocation().pathname.slice(-2)
    const [menuOpen, setMenuOpen] = useState(false)

    const navList = [
        {
            title: "Home",
            path: "/home"
        },
        {
            title: "About me",
            path: "/aboutme"
        },
        {
            title: "Projects",
            path: "/projects"
        }
    ]

    return (
        <>
            <div
                className={`menuBtn ${menuOpen ? 'menu--open' : ''}`}
                onClick={ () => setMenuOpen(!menuOpen) }
            >
                <span className="menuBtn__line-top"></span>
                <span className="menuBtn__line-middle"></span>
                <span className="menuBtn__line-bottom"></span>
            </div>

            <div className={ `menu ${menuOpen ? "menu--open" : ""}` } >
                <ul className="menu__list">
                    {
                        navList.map((el, i) => {
                            return ( 
                                <li 
                                    key={ i }
                                    className="menu__link" 
                                    onClick={ () => setMenuOpen(!menuOpen) }
                                ><NavLink to={`${el.path}/${lang}`}>{ el.title }</NavLink></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}