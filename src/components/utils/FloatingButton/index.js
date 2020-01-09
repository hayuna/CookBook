import React, { useState, useEffect } from 'react'
import { FloatingMenu, Container, Icon, IconSign } from './style'

const FloatingButton = ({ onClick, icon }) => {
    const [symbol, setSymbol] = useState('')

    useEffect(
        () => {
            setSymbol(icon)
        }, []
    )

    return (
        <Container>
            <FloatingMenu>
                <div onClick={onClick}>
                    <Icon><IconSign symbol={symbol} /></Icon>
                </div>
            </FloatingMenu>
        </Container>
    )
}

export default FloatingButton
