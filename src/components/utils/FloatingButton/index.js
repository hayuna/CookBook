import React, { useState, useEffect } from 'react'
import { FloatingMenu, Container, Icon, IconSign } from './style'

const FloatingButton = ({ icon, onclick }) => {
    const [symbol, setSymbol] = useState('')

    useEffect(
        () => {
            setSymbol(icon)
        }, []
    )

    return (
        <Container>
            <FloatingMenu>
                <div onClick={onclick}>
                    <Icon><IconSign symbol={symbol} /></Icon>
                </div>
            </FloatingMenu>
        </Container>
    )
}

export default FloatingButton
