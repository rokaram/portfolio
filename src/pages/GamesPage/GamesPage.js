import React, { useState, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTransition, animated } from 'react-spring'
import { AimDot } from '../../component/Games/AimDot/AimDot'
import { CatchDot } from '../../component/Games/CatchDot/CatchDot'
import { Clicker } from '../../component/Games/Clicker/Clicker'
import './GamesPage.css'

const gamesField = [
    {
        id: 0,
        comp: <AimDot />
    },
    {
        id: 1,
        comp: <CatchDot />
    },
    {
        id: 2,
        comp: <Clicker />
    }
]

export const GamesPage = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const prevIdx = useRef(-1)
    const transitions = useTransition(gamesField[activeIndex], item => item.id, {
        from: {
            transform: activeIndex > prevIdx.current ? 'translateX(100%)' : 'translateX(-100%)'
        },
        enter: {
            position: 'relative',
            transform: 'translateX(0%)'
        },
        leave: {
            transform: activeIndex > prevIdx.current ? 'translateX(-100%)' : 'translateX(100%)'
        },
        onRest: () => {
            prevIdx.current = activeIndex
        }
    })

    useEffect(() => {
        const navLinks = document.querySelectorAll('.game__nav-link')
        navLinks.forEach(el => el.classList.remove('game__nav-link--active'))
        navLinks[activeIndex].classList.add('game__nav-link--active')
    }, [activeIndex])

    return (
        <div className="game">
            <Helmet title="Games" />

            <div className="game__header">
                <h1 className="game__title">Games</h1>

                <ul className="game__nav">
                    <li className="game__nav-link" onClick={ () => setActiveIndex(0) }>Aim Dot</li>
                    <li className="game__nav-link" onClick={ () => setActiveIndex(1) }>Catch Dot</li>
                    <li className="game__nav-link" onClick={ () => setActiveIndex(2) }>Clicker</li>
                </ul>
            </div>
            
            {
            transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <div style={{position: 'absolute', width: '100%', height: 'calc(100vh - 100px)'}}>
                        { item.comp }
                    </div>
                </animated.div>
            ))
            }
        </div>
    )
}