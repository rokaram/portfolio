import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { AboutMe } from './pages/AboutMe/AboutMe'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'

export const useRoutes = () => {
    const location = useLocation()
    const langsReg = /(en|ru)/
    const lang = location.pathname.slice(-2).match(langsReg) ? location.pathname.slice(-2).match(langsReg)[0] : 'en'

    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            transition: 'all .1s linear',
        },
        enter: {
            opacity: 1,
            transition: 'all .1s linear',
            position: 'relative',
        },
        leave: {
            opacity: 0,
            transition: 'all .1s linear',
        },
    })
    
    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <div style={{position: 'absolute', width: '100%'}}>
                <Switch location={item}>
                    <Route path={`/home/${lang}`} exact>
                        <Home />
                    </Route>

                    <Route path={`/aboutme/${lang}`} exact>
                        <AboutMe />
                    </Route>

                    <Route path={`/projects/${lang}`} exact>
                        <Projects />
                    </Route>

                    { !lang.match(langsReg) || location.pathname === '/' && <Redirect to={'/home/en'} /> }
                </Switch>
            </div>
        </animated.div>
    ))
}