import React, { useState } from 'react'
import { Container, Label, TextArea } from './style'
import t from '../../../translations/en.json'

const DishDescription = ({ onChangeValue }) => {
    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
        onChangeValue(e.target.value)
    }

    return (
        <Container>
            <Label>{t.dishDescription}
                <div>
                    <TextArea value={value} onChange={handleChange} />
                </div>
            </Label>
        </Container>
    )
}

export default DishDescription
