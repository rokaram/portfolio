import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router"
import './Skills.css'

import css from "../../images/skillImages/css.png"
import git from "../../images/skillImages/git.png"
import html from "../../images/skillImages/html.png"
import js from "../../images/skillImages/js.png"
import less from "../../images/skillImages/less.png"
import npm from "../../images/skillImages/npm.png"
import react from "../../images/skillImages/react.png"
import sass from "../../images/skillImages/sass.png"
import responDesign from "../../images/skillImages/responsive-design.png"
import ts from "../../images/skillImages/ts.png"

export const Skills = () => {
    const [loading, setLoading] = useState(true)
    const [loadImgCount, setLoadImgCount] = useState(0)
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            en: "Skills",
            ru: "Навыки"
        }
    }

    const loadImgIncrem = () => {
        setLoadImgCount(prev => ++prev)
        
        if(loadImgCount === 8) {
            setLoading(false)
        }
    }

    const skillImages = [
        {
            src: js,
            alt: "js"
        },
        {
            src: ts,
            alt: "ts"
        },
        {
            src: react,
            alt: "reactjs"
        },
        {
            src: html,
            alt: "html"
        },
        {
            src: css,
            alt: "css"
        },
        {
            src: sass,
            alt: "sass"
        },
        {
            src: less,
            alt: "less"
        },
        {
            src: responDesign,
            alt: "responsive design"
        },
        {
            src: npm,
            alt: "npm"
        },
        {
            src: git,
            alt: "git"
        }
    ]

    return (
        <div className="section">
            <Helmet title="Skills"/>
            <h1 className="section__title skills__title">{ content.title[lang] }</h1>

            <div className="skills__block">
            <p className={`skills__loader ${!loading && "skills__loader--closed"}`}>Loading...</p>
            <ul className="skills__list">
            {
                skillImages.map((el, i) => {
                    return ( 
                        <li className={`skills__item`} key={i}>
                            <img className={`skills__icon ${!loading && "skills__icon--active"}`} src={el.src} alt={el.alt} onLoad={ () => loadImgIncrem() } />
                        </li>
                    )
                })
            }
            </ul>
            </div>
        </div>
    )
}
