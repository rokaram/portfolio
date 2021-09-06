import React from 'react'
import { useLocation } from 'react-router'
import { Helmet } from "react-helmet"
import './Home.css'

export const Home = () => {
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            en: "Karamov Roman",
            ru: "Карамов Роман"
        },
        subtitle: {
            en: "One year of learning in Web Development",
            ru: "Один год обучения в области Веб-разработки"
        }
    }

    return (
        <section className="home wow jackInTheBox" data-wow-duration="2s" data-wow-delay="2s">
            <Helmet title="Home"/>
            <h1 className="home__title">{ content.title[lang] }</h1>
            <h3 className="home__subtitle">{ content.subtitle[lang] }</h3>
        </section>
    )
}