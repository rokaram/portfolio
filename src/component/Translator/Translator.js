import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useLocation, useParams } from 'react-router'

import translatorIcon from "../../images/translatorIcon.png"
import "./Translator.css"

export const Translator = () => {
    const pathName = useLocation().pathname.slice(0, -3)
    const [transListActive, setTransListActive] = useState(false)

    const changeListActive = () => {
        setTransListActive(!transListActive)
    }

    return (
        <div className={`translator ${transListActive ? 'translator--open' : ''}`}>
            <img
                className="translator__icon"
                src={ translatorIcon }
                onClick={ () => changeListActive() }
                alt="TranslatorIcon"
            />

            <ul className="translator__list">
                <li className="translator__list-item" onClick={ () => changeListActive()}>
                    <NavLink to={`${pathName}/en`}>Eng</NavLink>
                </li>

                <li className="translator__list-item" onClick={ () => changeListActive() }>
                    <NavLink to={`${pathName}/ru`}>Rus</NavLink>
                </li>
            </ul>
        </div>
    )
}