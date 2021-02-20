import React from 'react'
import './TitleLetter.css'

export const TitleLetter = ({el, size, color}) => {
    const colors = ['#d62828', '#C71585', '#FFD700', '#FF8C00', '#EE82EE', '#32CD32', '#57c4e5']
    const rand = (min, max) => Math.round(Math.random() * (max - min) + min)

    let styles = {
        fontSize: size,
        color
    }

    const multi = e => {
        e.target.style.color = `${colors[rand(0, colors.length - 1)]}`
        e.target.style.fontSize = `${rand(30, 50)}px`
    }

    return (
        <span 
            className="intro__title-symbol" 
            onMouseOver={ e => multi(e)}
            style={ styles }
        >{ el }</span>
    )
}