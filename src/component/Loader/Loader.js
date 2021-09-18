import React, { useEffect, useState } from "react"
import "./Loader.css"

export const Loader = ({ loading }) => {
    const [deleteLoader, setDeleteLoader] = useState(false)

    useEffect(() => {
        if(!loading) {
            setTimeout(() => setDeleteLoader(true), 3400)
        }
    }, [loading])

    return (
        <>
            { !deleteLoader &&
            <div className={`loader ${loading ? "loader--open" : ''}`}>
                <h1 className={`loader__title ${!loading ? "loader__title--show wow rubberBand" : ''}`} data-wow-duration="1.9s">Portfolio made with ReactJS</h1>
                <div className={`loader__ring ${!loading ? "loader__ring--closed" : ''}`}></div>
            </div>
            }
        </>
    )
}