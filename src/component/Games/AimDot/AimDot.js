import React, { useCallback, useEffect, useState } from 'react'
import { useMath } from '../../../hooks/math.hook'
import './AimDot.css'

export const AimDot = () => {
    const field = React.createRef()
    const dot = React.createRef()
    const { rand } = useMath()
    const [sec, setSec] = useState(0)
    const [score, setScore] = useState(0)
    const [aver, setAver] = useState(0)
    const [times, setTimes] = useState([])
    const [styles, setStyles] = useState({})
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        setStyles({
            top: `${rand(0, field.current.offsetHeight - dot.current.offsetHeight * 2)}px`,
            left: `${rand(0, field.current.offsetWidth - dot.current.offsetWidth * 2)}px`
        })
    }, [])

    const restartGame = useCallback(() => {
        window.location.reload()
    }, [])

    const finishResult = times => {
        setAver(Math.round(times.reduce((prev, el) => prev + el) / times.length))
        setScore(0)
        setOpenModal(true)
    }

    const clickDot = () => {
        setScore(prev => prev + 1)
        setStyles({
            top: `${rand(0, field.current.offsetHeight - dot.current.offsetHeight * 2)}px`,
            left: `${rand(0, field.current.offsetWidth - dot.current.offsetWidth * 2)}px`
        })
        setSec(0)
        setInterval(() => {
            setSec(prev => prev + 1)
        }, 1)

        setTimes([...times, sec])
        score === 10 && finishResult(times)
    }

    return (
        <div className="aimdot" ref={ field }>
            <div className="aimdot__header">
                <p className="aimdot__score">{ score } / 10</p>
            </div>
            <span
                className="aimdot__dot"
                style={ styles }
                ref={ dot }
                onMouseDown={ clickDot }
            ></span>
            { openModal &&
                <div className="aimbot__modal">
                    <div className="aimbot__modal-inner">
                        <p className="aimbot__modal-title">Your result: { aver }</p>
                        <p className="aimbot__modal-btn" onClick={ restartGame }>Restart</p>
                    </div>
                </div>
            }
        </div>
    )
}