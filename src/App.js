import React, { useEffect } from 'react'
import './index.css'
import { useRoutes } from './routes'
import WOW from 'wowjs'
import { useState } from 'react'
import { Menu } from './component/Menu/Menu'
import { Loader } from './component/Loader/Loader'
import { Translator } from './component/Translator/Translator'
import { Helmet } from "react-helmet"

export const App = () => {
    let routes = useRoutes()
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const wow = new WOW.WOW()
            wow.init()
        }, 0)
        
        setLoading(false)
    }, [])

    return (
        <>
            <Helmet titleTemplate="Karamov Roman ~ %s"/>
            <Loader loading = { loading } />

            { !loading && 
                <>
                    <Menu />
                    <Translator />
                    
                    <div className="background-opacity"></div>

                    <div className="container">
                        { routes }
                    </div>
                </>
            }
        </>
    )
}

export default App;
