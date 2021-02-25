import React, { useEffect } from 'react'
import './index.css'
import { useRoutes } from './routes'
import WOW from 'wowjs'
import { Header } from './component/Header/Header'
import { useState } from 'react'
import { Loader } from './component/Loader/Loader'

export const App = () => {
    let routes = useRoutes()
    let [loaded, setLoaded] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const wow = new WOW.WOW()
            wow.init()
        }, 0)
        setLoaded(false)
    }, [])

    return (
        <>
            { !loaded ?
                <>
                    <Header />
                    <div className="container">
                        { routes }
                    </div>
                </>
            : <Loader /> }
        </>
    )
}

export default App;
