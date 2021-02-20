import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { AboutMePage } from './pages/AboutMePage/AboutMePage'
import { HomePage } from './pages/HomePage/HomePage'

export const useRoutes = () => {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,

        },
        enter: {
            opacity: 1,
            transition: 'all .3s linear',
        },
        leave: {
            opacitty: 0,
        },
    })

    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/home" exact>
                    <HomePage />
                </Route>

                <Route path="/aboutme" exact>
                    <AboutMePage />
                </Route>

                <Redirect to="/home" />
            </Switch>
        </animated.div>
      ))
}