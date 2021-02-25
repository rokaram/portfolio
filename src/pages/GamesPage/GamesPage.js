import React, { useEffect } from 'react'
import { AimDot } from '../../component/Games/AimDot/AimDot'
import './GamesPage.css'

export const GamesPage = () => {
    return (
        <div className="game">
            <div className="game__header">
                <h1>Games</h1>

                
            </div>
            <AimDot />
        </div>
    )
}