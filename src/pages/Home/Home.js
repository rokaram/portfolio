import React from 'react'
import { useLocation } from 'react-router'
import './Home.css'

export const Home = () => {
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            en: "Karamov Roman",
            ru: "Карамов Роман"
        },
        subtitle: {
            en: "Two years of experience working in Web Development",
            ru: "Два года опыта работы в области Веб-разработки"
        }
    }

    return (
        <div className="section home wow jackInTheBox" data-wow-duration="2s">
            <h1 className="home__title">{ content.title[lang] }</h1>
            <h3 className="home__subtitle">{ content.subtitle[lang] }</h3>
        </div>
    )
}