import React, { useState } from 'react'
import { Container, Label, TextArea } from './style'
import { DISH_DESCRIPTION } from '../../../texts'

const DishDescription = ({ onChangeValue }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
        onChangeValue(e.target.value)
    }

    return(
        <Container>
            <Label>{DISH_DESCRIPTION}
                <div>
                    <TextArea value={value} onChange={handleChange} />
                </div>
            </Label>
        </Container>
    )
}

export default DishDescription
