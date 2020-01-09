import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { ADDRESS_NOT_FOUND, NOT_FOUND_REDIRECTING, SECONDS } from '../../../texts';

const NotFound = ({ location }) => {
    const [counter, setCounter] = useState(10)
    const [intervalId, setIntervalId] = useState(null)

    useEffect(
        () => {
            const intervalId = setInterval(countdown, 1000)
            setIntervalId(intervalId)
            return () => clearInterval(intervalId)        
        }, [intervalId]
    )

    const countdown = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <p>{ADDRESS_NOT_FOUND} <code>{ location.pathname }</code></p>
            <p>{NOT_FOUND_REDIRECTING} { counter } {SECONDS}</p>
            {counter === 0 && <Redirect to='/' />}
        </div>
    )
}

export default NotFound
