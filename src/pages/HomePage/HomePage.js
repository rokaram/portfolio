import React, { useEffect } from 'react'
import './HomePage.css'

import updateArrowImg from '../../images/update-arrow.png'
import { useAnim } from '../../hooks/anim.hook'
import { TitleLetter } from '../../component/TitleLetter/TitleLetter'
import { useState } from 'react'

export const HomePage = () => {
    const { startAnim } = useAnim()
    const updateBtn = React.createRef()
    const title = React.createRef()

    const colors = ['#d62828', '#C71585', '#FFD700', '#FF8C00', '#EE82EE', '#32CD32', '#57c4e5']
    const titleText = `Hey. I'm Karamov Roman`.split('')
    const [lettersInfo, setLettersInfo] = useState([])

    const rand = (min, max) => Math.round(Math.random() * (max - min) + min)

    const addElems = () => {
        const arr = []

        titleText.forEach(el => {
            arr.push({
                el,
                size: `${rand(30, 50)}px`,
                color: colors[rand(0, colors.length - 1)],
            })
        })

        setLettersInfo(arr)
    }

    useEffect(() => addElems(), [])

    const clickBtn = () => {
        startAnim(updateBtn.current, 'jello')
        startAnim(title.current, 'headShake')
        addElems()
    }

    return (
        <div className="home">
            <div className="home__inner">
                <div className="home__block wow jackInTheBox" data-wow-duration="1.5s">
                    <h1 className="home__title" ref={title}>
                        { lettersInfo.map((el, i) => <TitleLetter key={ i } { ...el } />) }
                    </h1>
                </div>
                <br />
                <div className="home__btnBlock">
                    <img 
                        className="home__updateBtn" 
                        src={ updateArrowImg } 
                        ref={ updateBtn } 
                        onClick={ () => clickBtn() }
                        alt="Update" 
                    />
                </div>
            </div>
        </div>
    )
}