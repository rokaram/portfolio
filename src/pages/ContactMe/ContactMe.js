import React from 'react'
import { useLocation } from 'react-router'
import { Helmet } from "react-helmet"
import './ContactMe.css'

export const ContactMe = () => {
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            ru: "Связь со мной",
            en: "Contact me"
        },
        subtitle: {
            ru: "Два года опыта работы в области Веб-разработки",
            en: "Two years of experience working in Web Development"
        }
    }

    return (
        <div className="section">
            <Helmet title="Contact me" />
            <h1 className="section__title">{ content.title[lang] }</h1>
        </div>
    )
}