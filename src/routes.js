import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { AboutMePage } from './pages/AboutMePage/AboutMePage'
import { GamesPage } from './pages/GamesPage/GamesPage'
import { HomePage } from './pages/HomePage/HomePage'

export const useRoutes = () => {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
        },
        enter: {
            position: 'relative',
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
    })
    
    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <div style={{position: 'absolute', width: '100%'}}>
                <Switch location={item}>
                    <Route path="/home" exact>
                        <HomePage />
                    </Route>

                    <Route path="/aboutme" exact>
                        <AboutMePage />
                    </Route>

                    <Route path="/games" exact>
                        <GamesPage />
                    </Route>

                    <Redirect to="/home" />
                </Switch>
            </div>
        </animated.div>
    ))
}