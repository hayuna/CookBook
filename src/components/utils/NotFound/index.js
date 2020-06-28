import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import t from '../../../translations/en.json'

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
            <p>{t.addressNotFound} <code>{location.pathname}</code></p>
            <p>{t.notFoundRedirecting} {counter} {t.seconds}</p>
            {counter === 0 && <Redirect to='/' />}
        </div>
    )
}

export default NotFound
