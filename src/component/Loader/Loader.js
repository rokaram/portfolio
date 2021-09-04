import React from "react"
import "./Loader.css"

export const Loader = ({ loading }) => {
    return (
        <div className={`loader ${loading ? "loader--closed" : ''}`}>
            <div className="lds-dual-ring"></div>
        </div>
    )
}