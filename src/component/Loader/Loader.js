import React from "react"
import "./Loader.css"

export const Loader = ({ loading }) => {
    return (
        <div className={`loader ${loading ? "loader--open" : ''}`}>
            <div className={`${!loading ? "loader__titleBlock" : ''}`}>
                <h1 className={`loader__title ${!loading ? "loader__title--show wow rubberBand" : ''}`} data-wow-duration="1.9s">Portfolio made with ReactJS</h1>
            </div>
            <div className={`loader__ring ${!loading ? "loader__ring--closed" : ''}`}></div>
        </div>
    )
}