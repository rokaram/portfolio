import React from 'react'
import './AboutMePage.css'

export const AboutMePage = () => {
    const title = 'About Me'
    const descrip = `I'm 15 years old. I have 1 year of experience working in Web Dev. I know very bad HTML, CSS, JavaScript, ReactJS`

    return (
        <div className="aboutme">
            <div className="aboutme__inner">
                <h1 className="aboutme__title">{ title }</h1>
                
                <p className="aboutme__descrip">{ descrip }</p>
            </div>
        </div>
    )
}