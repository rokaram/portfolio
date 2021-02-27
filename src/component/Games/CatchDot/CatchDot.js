import React, { useEffect, useState } from 'react'
import { useMath } from '../../../hooks/math.hook'
import targetImg from '../../../images/target.png'
import '../Games.css'

export const CatchDot = () => {
    const field = React.createRef()
    const dot = React.createRef()
    const { rand } = useMath()
    const neededAver = 700
    const [sec, setSec] = useState(0)
    const [score, setScore] = useState(0)
    const [aver, setAver] = useState(0)
    const [times, setTimes] = useState([])
    const [styles, setStyles] = useState({})
    const [openModal, setOpenModal] = useState(true)
    const [finishModal, setFinishModal] = useState(false)
    
    useEffect(() => {
        setStyles({
            top: `${rand(32, field.current.offsetHeight - dot.current.offsetHeight * 2)}px`,
            left: `${rand(0, field.current.offsetWidth - dot.current.offsetWidth * 2)}px`
        })
    }, [])

    const restartGame = () => {
        window.location.reload()
    }

    const finishResult = times => {
        setAver(Math.round(times.reduce((prev, el) => prev + el) / times.length))
        setScore(0)
        setOpenModal(true)
        setFinishModal(true)
    }

    const clickDot = () => {
        setScore(prev => prev + 1)
        setStyles({
            top: `${rand(32, field.current.offsetHeight - dot.current.offsetHeight * 2)}px`,
            left: `${rand(0, field.current.offsetWidth - dot.current.offsetWidth * 2)}px`
        })
        setSec(0)
        setInterval(() => {
            setSec(prev => prev + 1)
        }, 1)

        times.length ? setTimes([...times, sec]) : setTimes([sec])
        if(score === 10) {
            finishResult(times)
        }
    }

    return (
        <div className="gamefield" ref={ field }>
            <div className="gamefield__header">
                <p className="gamefield__score">{ score } / 10</p>
            </div>
            <img
                className="gamefield__dot"
                style={ styles }
                ref={ dot }
                onMouseDown={ clickDot }
                src={ targetImg }
            />
            { openModal &&
                <div className="gamefield__modal">
                    <div className="gamefield__modal-inner">
                        { finishModal ?
                        <>
                            <p className="gamefield__modal-title">You {aver < neededAver ? 'win' : 'lose' }. Your result: { aver }ms</p>
                            <p className="gamefield__modal-subtitle">Result must be less than { neededAver }ms</p>
                            <p className="gamefield__modal-btn" onClick={ restartGame }>Restart</p>
                        </>
                        :
                        <>
                            <p className="gamefield__modal-title">Catch Dot</p>
                            <p className="gamefield__modal-subtitle">Catch the moving dot as quickly as possible</p>
                            <p className="gamefield__modal-btn" onClick={ () => setOpenModal(false) }>Start</p>
                        </> }
                    </div>
                </div>
            }
        </div>
    )
}