import React from 'react'
import { useLocation } from 'react-router'
import { Helmet } from "react-helmet"

import vkSocialIcon from "../../images/SocialIcons/vk-social.png"
import instaSocialIcon from "../../images/SocialIcons/instagram.png"
import gmailSocialIcon from "../../images/SocialIcons/gmail-logo.png"
import './ContactMe.css'

export const ContactMe = () => {
    const lang = useLocation().pathname.slice(-2)
    const content = {
        title: {
            ru: "Связь со мной",
            en: "Contact me"
        }
    }
    
    return (
        <div className="section">
            <Helmet title="Contact me" />
            <h1 className="section__title">{ content.title[lang] }</h1>

            <ul className="social">
                <li className="social__item">
                    <img className="social__logo" src={ vkSocialIcon } alt="vk social"/>
                    <a className="social__link" href="https://vk.com/karamofff" target="_blank">https://vk.com/karamofff</a>
                </li>

                <li className="social__item">
                    <img className="social__logo" src={ instaSocialIcon } alt="vk social"/>
                    <a className="social__link" href="https://instagram.com/__karamofff__" target="_blank">https://instagram.com/__karamofff__</a>
                </li>

                <li className="social__item">
                    <img className="social__logo" src={ gmailSocialIcon } alt="vk social"/>
                    <a className="social__link" type="gmail" href="mailto:karamofffroman@gmail.com" target="_blank">karamofffroman@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}