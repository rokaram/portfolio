import React from "react"
import { useLocation } from "react-router"
import "./Projects.css"

export const Projects = () => {
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            ru: "Проекты",
            en: "Projects"
        },
        subtitle: {
            ru: "Два года опыта работы в области Веб-разработки",
            en: "Two years of experience working in Web Development"
        }
    }

    return (
        <div className="section">
            <h1 className="section__title">{ content.title[lang] }</h1>
        </div>
    )
}